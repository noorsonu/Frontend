import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [hiddenComments, setHiddenComments] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const replyTextareaRef = useRef(null);
  const navigate = useNavigate();
  const { postId } = useParams();

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

    return (
      <div className={getIndentStyle(depth)}>
        <div className="bg-gray-800/60 rounded-xl p-3 sm:p-4 mb-3 border border-gray-600/30 shadow-sm hover:shadow-md transition-shadow duration-200 backdrop-blur-md">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 shadow-sm">
                {(comment.authorName || comment.author?.name || 'U')[0].toUpperCase()}
              </div>
              <div className="ml-3">
                <div className="flex items-center gap-2">
                  <p className="text-white font-semibold text-sm">
                    {comment.authorName || comment.user?.name || 'User'}
                    {comment.replyToUser && (
                      <span className="text-green-400 ml-1 font-normal">→ {comment.replyToUser}</span>
                    )}
                  </p>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className="text-gray-400 text-xs">{getTimeAgo(comment.createdAt)}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {hasReplies && isTopLevel && (
                <button
                  onClick={() => toggleCommentVisibility(comment.id)}
                  className="text-xs text-green-400 hover:text-green-300 px-2 py-1 rounded-md hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
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
                className="text-green-400 hover:text-green-300 text-xs px-2 py-1 rounded-md hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
              >
                Reply
              </button>
            </div>
          </div>
          <p className="text-gray-300 text-sm ml-11 mt-2 leading-relaxed">{comment.content}</p>
        </div>

        {replyingTo === comment.id && (
          <div className="mt-1 xs:mt-1.5 sm:mt-2 p-1.5 xs:p-2 sm:p-3 border-t border-green-500/30 bg-gradient-to-r from-gray-800/50 to-slate-800/50 rounded backdrop-blur-md">
            <div className="flex flex-col gap-1 xs:gap-1.5 sm:gap-2">
              <input
                type="text"
                ref={replyTextareaRef}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="w-full bg-gray-900/60 border-2 border-green-500 rounded-md xs:rounded-lg sm:rounded-xl px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-3 text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/50 focus:outline-none text-xs sm:text-sm backdrop-blur-md transition-none hover:bg-gray-900/80"
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
                  className="px-2 py-1 xs:px-3 xs:py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md sm:rounded-lg hover:from-green-500 hover:to-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-1 xs:gap-1.5 sm:gap-2 cursor-pointer text-xs sm:text-sm hover:scale-105 shadow-lg"
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
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-slate-800/90 to-gray-800/90 backdrop-blur-md border-b border-gray-600/30 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600/20 rounded-full border border-green-500/30">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Comments</h1>
                <p className="text-sm text-gray-300">{comments.length} {comments.length === 1 ? 'comment' : 'comments'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {/* Comments Section */}
        <div className="mb-6">
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            </div>
          ) : comments.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              {isAuthenticated ? 'No comments yet. Be the first to comment!' : 'No comments yet. Login to comment!'}
            </p>
          ) : (
            <div className="space-y-3">
              {comments.map((comment, index) => (
                <CommentItem key={comment.id || index} comment={comment} depth={0} />
              ))}
            </div>
          )}
        </div>

        {/* Comment Input */}
        <div className="sticky bottom-0 bg-gradient-to-r from-slate-800/90 to-gray-800/90 backdrop-blur-md border-t border-gray-600/30 p-4 rounded-t-xl">
          {isAuthenticated ? (
            <div className="space-y-4">
              <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-600/30 backdrop-blur-md">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows="4"
                  className="w-full bg-gray-900/60 border-2 border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-base outline-none resize-none leading-relaxed focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all duration-200 backdrop-blur-sm"
                />
                <div className="flex justify-between items-center mt-3">
                  <span className={`text-sm ${
                    newComment.length > 450 ? 'text-orange-400' : 
                    newComment.length > 500 ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {newComment.length}/500 characters
                  </span>
                  <button
                    onClick={submitComment}
                    disabled={!newComment.trim() || submitting || newComment.length > 500}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        <span>Posting...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span>Post Comment</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-800/60 rounded-xl border border-gray-600/30 backdrop-blur-md">
              <div className="mb-4">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="text-white mb-4 text-lg font-medium">Join the conversation!</p>
                <p className="text-gray-300 mb-6">Please login to share your thoughts.</p>
              </div>
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                Login to Comment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;