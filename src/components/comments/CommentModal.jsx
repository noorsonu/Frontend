import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import '../CommentModal.css';

const CommentModal = ({ isOpen, onClose, postId, postTitle }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [hiddenComments, setHiddenComments] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setCurrentUser({ name: payload.name || payload.sub || 'User' });
      } catch (error) {
        console.error('Error parsing token:', error);
        setCurrentUser({ name: 'User' });
      }
    } else {
      setCurrentUser({ name: 'Guest' });
    }
  }, []);

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
      setComments(nestedComments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    } catch (error) {
      console.error('Error fetching comments:', error);
      setComments([]);
    } finally {
      setLoading(false);
    }
  };

  const submitComment = async () => {
    if (!newComment.trim()) return;

    try {
      setSubmitting(true);
      await api.post(`/api/posts/${postId}/comments`, {
        content: newComment.trim(),
        authorName: currentUser?.name || 'Guest'
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
    if (!replyText.trim()) return;

    try {
      await api.post(`/api/posts/${postId}/comments`, {
        content: replyText.trim(),
        parentCommentId: parentCommentId,
        replyToUser: replyToUser,
        authorName: currentUser?.name || 'Guest'
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

  useEffect(() => {
    if (isOpen) {
      fetchComments();
    }
  }, [isOpen, postId]);

  if (!isOpen) return null;

  return (
    <div className="fixed comment-modal-overlay  inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>
      <div className="comment-modal-content bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-700/90 rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg h-full overflow-hidden border border-white/10 backdrop-blur-md animate-fadeIn flex flex-col">
        <div className="relative flex items-center justify-between p-6 border-b border-white/20 bg-gradient-to-r from-slate-800/80 via-gray-800/80 to-slate-700/80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse"></div>
          <h3 className="relative z-10 text-xl font-bold text-red-500 truncate bg-yellow-300 p-2 rounded">
            🔥 UPDATED: {postTitle}
          </h3>
          <button
            onClick={onClose}
            className="relative z-10 text-purple-300 hover:text-white transition-all duration-300 hover:rotate-90 transform hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gradient-to-b from-transparent to-black/10" style={{ scrollBehavior: 'smooth' }}>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : comments.length === 0 ? (
            <p className="text-gray-400 text-center py-6 text-sm">No comments yet. Be the first to comment!</p>
          ) : (
            <div className="space-y-3">
              {comments.map((comment, index) => (
                <CommentItem
                  key={comment.id || index}
                  comment={comment}
                  depth={0}
                  replyingTo={replyingTo}
                  setReplyingTo={setReplyingTo}
                  replyText={replyText}
                  setReplyText={setReplyText}
                  submitReply={submitReply}
                  hiddenComments={hiddenComments}
                  toggleCommentVisibility={toggleCommentVisibility}
                />
              ))}
            </div>
          )}
        </div>

        <CommentForm
          newComment={newComment}
          setNewComment={setNewComment}
          onSubmit={submitComment}
          submitting={submitting}
        />
      </div>
    </div>
  );
};

export default CommentModal;