import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './CommentModal.css';

const CommentModal = ({ isOpen, onClose, postId, postTitle, onCommentCountUpdate }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [hiddenComments, setHiddenComments] = useState({});
  const [currentUser] = useState('Admin');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const replyTextareaRef = useRef(null);
  const navigate = useNavigate();

  const getTimeAgo = (dateString) => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffInMs = now - postDate;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);

    if (diffInMinutes < 1) return 'now';
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInHours < 24) return `${diffInHours}h`;
    if (diffInDays < 7) return `${diffInDays}d`;
    if (diffInWeeks < 4) return `${diffInWeeks}w`;
    return `${diffInMonths}mo`;
  };

  const buildNestedComments = (comments, parentId = null) => {
    return comments
      .filter(comment => comment.parentCommentId === parentId)
      .map(comment => ({
        ...comment,
        replies: buildNestedComments(comments, comment.id)
      }))
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  };

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/api/posts/${postId}/comments`);
      const nestedComments = buildNestedComments(response, null);
      setComments(nestedComments.sort((a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
      ));
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const submitComment = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    if (!newComment.trim()) return;

    try {
      setSubmitting(true);
      await api.post(`/api/posts/${postId}/comments`, {
        content: newComment.trim()
      });
      setNewComment('');
      fetchComments();
      
      // Update comment count in real-time
      if (onCommentCountUpdate) {
        onCommentCountUpdate(postId);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const submitReply = async (parentCommentId, replyToUser = null) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    if (!replyText.trim()) return;

    try {
      await api.post(`/api/posts/${postId}/comments`, {
        content: replyText.trim(),
        parentCommentId: parentCommentId,
        replyToUser: replyToUser
      });
      setReplyText('');
      setReplyingTo(null);
      fetchComments();
      
      // Update comment count in real-time
      if (onCommentCountUpdate) {
        onCommentCountUpdate(postId);
      }
    } catch (error) {
      console.error('Error submitting reply:', error);
    }
  };

  const toggleCommentVisibility = (commentId) => {
    setHiddenComments(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  const countAllReplies = (replies) => {
    return replies.reduce((total, reply) => {
      return total + 1 + (reply.replies ? countAllReplies(reply.replies) : 0);
    }, 0);
  };

  const CommentItem = ({ comment, depth = 0 }) => {
    const hasReplies = comment.replies && comment.replies.length > 0;
    const isHidden = hiddenComments[comment.id] || false;
    const isTopLevel = depth === 0;
    const totalRepliesCount = hasReplies ? countAllReplies(comment.replies) : 0;

    const getIndentStyle = (depth) => {
      if (depth === 0) return '';
      if (depth <= 2) return `ml-2 xs:ml-3 sm:ml-${Math.min(depth * 4, 8)} border-l-2 border-gray-600 pl-1 xs:pl-2`;
      return 'ml-3 xs:ml-4 sm:ml-6 border-l border-gray-500 pl-1 xs:pl-2';
    };

    const getAvatarSize = (depth) => {
      if (depth === 0) return 'w-6 h-6 xs:w-7 xs:h-7 text-xs xs:text-sm';
      if (depth === 1) return 'w-5 h-5 xs:w-6 xs:h-6 text-xs';
      if (depth === 2) return 'w-4 h-4 xs:w-5 xs:h-5 text-xs';
      return 'w-3 h-3 xs:w-4 xs:h-4 text-xs';
    };

    return (
      <div className={getIndentStyle(depth)}>
        <div className={`bg-gray-${depth > 2 ? '600' : '800'} rounded-md sm:rounded-lg p-1.5 xs:p-2 sm:p-${depth > 2 ? '2' : '3'} mb-1 xs:mb-1.5 sm:mb-2 border border-gray-${depth > 2 ? '500' : '700'}`}>
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center">
              <div className={`${getAvatarSize(depth)} bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                {(comment.authorName || comment.author?.name || 'U')[0].toUpperCase()}
              </div>
              <div className="ml-2">
                <div className="flex items-center gap-2">
                  <p className={`text-white font-medium ${depth > 2 ? 'text-xs' : 'text-xs xs:text-sm'}`}>
                    {comment.authorName || comment.user?.name || 'User'}
                    {comment.replyToUser && (
                      <span className="text-blue-400 ml-1">→ {comment.replyToUser}</span>
                    )}
                  </p>
                  <span className="text-gray-400 text-xs hidden xs:inline">•</span>
                  <span className="text-gray-400 text-xs">{getTimeAgo(comment.createdAt)}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 xs:space-x-2">
              {hasReplies && isTopLevel && (
                <button
                  onClick={() => toggleCommentVisibility(comment.id)}
                  className="text-xs text-blue-400 hover:text-blue-300 px-0.5 xs:px-1 py-0.5 xs:py-1 rounded cursor-pointer"
                >
                  {isHidden ? `View ${totalRepliesCount} ${totalRepliesCount === 1 ? 'reply' : 'replies'}` : 'Hide'}
                </button>
              )}
              <button
                onClick={() => {
                  if (!isAuthenticated) {
                    navigate('/login');
                    return;
                  }
                  setReplyingTo(replyingTo === comment.id ? null : comment.id);
                  setReplyText('');
                }}
                className="text-blue-400 text-xs px-0.5 xs:px-1 py-0.5 xs:py-1 rounded cursor-pointer hover:text-blue-300"
              >
                Reply
              </button>
            </div>
          </div>
          <p className={`text-gray-300 ${depth > 2 ? 'text-xs' : 'text-xs xs:text-sm'} ml-6 xs:ml-${depth > 2 ? '6' : '9'} break-words`}>{comment.content}</p>
        </div>

        {replyingTo === comment.id && (
          <div className="mt-1 xs:mt-1.5 sm:mt-2 p-1.5 xs:p-2 sm:p-3 border-t border-purple-500/30 bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded">
            <div className="flex flex-col gap-1 xs:gap-1.5 sm:gap-2">
              <input
                type="text"
                ref={replyTextareaRef}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="w-full bg-black/30 border border-white rounded-md xs:rounded-lg sm:rounded-xl px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-3 text-white placeholder-gray-300 focus:border-white focus:ring-2 focus:ring-white/50 focus:outline-none text-xs sm:text-sm backdrop-blur-md transition-all duration-300 hover:bg-black/40 focus:bg-black/50"
                style={{ direction: 'ltr', textAlign: 'left' }}
                dir="ltr"
                autoFocus
              />
              <div className="flex gap-1 xs:gap-1.5 sm:gap-2">
                <button
                  onClick={() => setReplyingTo(null)}
                  className="px-1.5 py-0.5 xs:px-2 xs:py-1 text-gray-400 text-xs cursor-pointer hover:text-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (replyText.trim()) {
                      submitReply(comment.id, comment.authorName);
                    }
                  }}
                  className="px-2 py-1 xs:px-3 xs:py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md sm:rounded-lg hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-1 xs:gap-1.5 sm:gap-2 cursor-pointer text-xs sm:text-sm hover:scale-105 shadow-lg"
                >
                  <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Reply
                </button>
              </div>
            </div>
          </div>
        )}

        {hasReplies && !isHidden && (
          <div className="space-y-0.5 xs:space-y-1">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    
    if (isOpen) {
      fetchComments();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, postId]);

  if (!isOpen) return null;

  return (
    <div className="comment-modal-overlay fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-1 xs:p-2 sm:p-4 md:p-6 overflow-hidden z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 via-slate-600/5 to-gray-700/5 animate-pulse"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 animate-bounce" style={{ animationDuration: '3s' }}>
          <svg width="80" height="60" viewBox="0 0 80 60" className="text-white/20">
            <path d="M10 50 Q20 30 30 50 Q40 30 50 50 Q60 30 70 50" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="40" cy="20" r="8" fill="currentColor"/>
            <path d="M35 15 L45 15 M40 10 L40 25" stroke="white" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute top-20 right-20 animate-pulse" style={{ animationDuration: '4s' }}>
          <svg width="60" height="80" viewBox="0 0 60 80" className="text-white/15">
            <rect x="20" y="40" width="20" height="30" fill="currentColor"/>
            <polygon points="10,40 30,20 50,40" fill="currentColor"/>
            <circle cx="55" cy="25" r="3" fill="currentColor"/>
            <rect x="53" y="28" width="4" height="15" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-spin" style={{ animationDuration: '20s' }}>
          <svg width="50" height="50" viewBox="0 0 50 50" className="text-white/10">
            <path d="M25 5 L30 20 L45 20 L35 30 L40 45 L25 35 L10 45 L15 30 L5 20 L20 20 Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-1/3 animate-bounce" style={{ animationDuration: '5s' }}>
          <div className="text-white/10 text-2xl font-arabic">☪</div>
        </div>
      </div>
      <div className="comment-modal-content bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-700/90 rounded-lg sm:rounded-xl shadow-2xl w-full xs:w-[98%] sm:w-[95%] md:w-[85%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] h-full xs:h-[98%] sm:h-[95%] md:h-[90%] lg:h-[85%] max-h-[800px] overflow-hidden border border-white/10 backdrop-blur-md animate-fadeIn flex flex-col">
        <div className="relative flex items-center justify-between p-2 xs:p-3 sm:p-4 md:p-6 border-b border-white/20 bg-gradient-to-r from-slate-800/80 via-gray-800/80 to-slate-700/80 overflow-hidden">
          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white truncate pr-2">{postTitle}</h3>
          <button
            onClick={onClose}
            className="text-purple-300 hover:text-white transition-all duration-300 hover:rotate-90 transform cursor-pointer flex-shrink-0 p-1"
          >
            <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 p-1 xs:p-2 sm:p-3 md:p-4 overflow-y-auto bg-gradient-to-b from-transparent to-black/10" style={{ scrollBehavior: 'smooth' }}>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : comments.length === 0 ? (
            <p className="text-gray-400 text-center py-4 xs:py-6 text-xs xs:text-sm">
              {isAuthenticated ? 'No comments yet. Be the first to comment!' : 'No comments yet. Login to comment!'}
            </p>
          ) : (
            <div className="space-y-1 xs:space-y-2 sm:space-y-3">
              {comments.map((comment, index) => (
                <CommentItem key={comment.id || index} comment={comment} depth={0} />
              ))}
            </div>
          )}
        </div>

        <div className="relative p-1 xs:p-2 sm:p-3 md:p-4 border-t border-white/20 bg-gradient-to-br from-slate-800/80 via-gray-800/80 to-slate-700/80 backdrop-blur-sm overflow-hidden">
          {isAuthenticated ? (
            <div className="flex flex-col gap-1 xs:gap-2 sm:gap-3">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                rows="1"
                className="w-full bg-black/30 border border-white rounded-md xs:rounded-lg sm:rounded-xl px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-3 text-white placeholder-gray-300 focus:border-white focus:ring-2 focus:ring-white/50 focus:outline-none resize-none text-xs xs:text-sm backdrop-blur-md transition-all duration-300 hover:bg-black/40 focus:bg-black/50"
                style={{ direction: 'ltr', textAlign: 'left', unicodeBidi: 'embed' }}
                dir="ltr"
              />
              <button
                onClick={submitComment}
                disabled={!newComment.trim() || submitting}
                className="self-end px-3 py-1.5 xs:px-4 xs:py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-slate-600 via-gray-600 to-slate-500 text-white rounded-md xs:rounded-lg sm:rounded-xl hover:from-slate-500 hover:via-gray-500 hover:to-slate-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-1 xs:gap-2 cursor-pointer text-xs sm:text-sm hover:scale-105 shadow-xl font-medium border border-white/20"
              >
                {submitting ? (
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                ) : (
                  <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
                Post
              </button>
            </div>
          ) : (
            <div className="text-center py-2 xs:py-4">
              <p className="text-gray-400 mb-2 xs:mb-3 text-xs xs:text-sm">Please login to comment</p>
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-1.5 xs:px-6 xs:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md xs:rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer text-xs xs:text-sm"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentModal;