import { useState, useEffect } from 'react';
import api from '../services/api';

export const useComments = (postId, isOpen) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hiddenComments, setHiddenComments] = useState({});

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
    if (!postId) return;
    
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

  const toggleCommentVisibility = (commentId) => {
    setHiddenComments(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  useEffect(() => {
    if (isOpen && postId) {
      fetchComments();
    }
  }, [isOpen, postId]);

  return {
    comments,
    loading,
    hiddenComments,
    fetchComments,
    toggleCommentVisibility
  };
};