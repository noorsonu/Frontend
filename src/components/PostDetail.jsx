import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { getImageUrl, handleImageError } from '../utils/imageUtils';
import LoadingSpinner from './LoadingSpinner';
import CommentModal from './CommentModal';
import Navbar from './Navbar';
import Footer from './Footer';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [commentModal, setCommentModal] = useState({ isOpen: false, postId: null, postTitle: '' });

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/api/posts`);
      const foundPost = response.find(p => p.id === parseInt(id));

      if (!foundPost) {
        setError('Post not found');
        return;
      }

      setPost({
        ...foundPost,
        image: getImageUrl(foundPost.imageUrl || foundPost.image)
      });
      setIsLiked(foundPost.liked || false);
      setLikeCount(foundPost.likeCount || 0);
      setCommentCount(foundPost.commentCount || 0);
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const handleLikeToggle = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login to like posts');
        return;
      }

      const response = await api.post(`/api/posts/${id}/like`);
      setIsLiked(response.isLiked);
      setLikeCount(prev => response.isLiked ? prev + 1 : prev - 1);
    } catch (error) {
      console.error('Error toggling like:', error);
      if (error.response?.status === 401) {
        alert('Please login to like posts');
      }
    }
  };

  const handleCommentClick = () => {
    setCommentModal({ isOpen: true, postId: parseInt(id), postTitle: post?.title || '' });
  };

  const closeCommentModal = () => {
    setCommentModal({ isOpen: false, postId: null, postTitle: '' });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

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

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1).replace('.0', '') + 'M';
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1).replace('.0', '') + 'k';
    }
    return count.toString();
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;
  if (!post) return <div className="text-center py-12">Post not found</div>;

  return (
    <div className="relative w-full">
      <Navbar />
      <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-20 sm:pt-24 pb-4 sm:pb-6 lg:pb-8 px-2 sm:px-4 lg:px-6">
      <div className="flex justify-center">
        <div className="inline-block w-auto max-w-[95%] sm:max-w-[90%] md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 sm:mb-6 flex items-center text-white hover:text-blue-400 transition-colors text-sm sm:text-base cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Post Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl overflow-hidden">
          {/* Image */}
          <div className="relative w-full bg-gray-100 flex justify-center">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto max-h-[45vh] sm:max-h-[50vh] lg:max-h-[55vh] object-contain"
              onError={handleImageError}
            />
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Title with Time */}
            <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight flex-1">{post.title}</h1>
              <span className="text-gray-400 text-sm sm:text-base font-medium flex-shrink-0 mt-1">
                {getTimeAgo(post.createdAt)}
              </span>
            </div>



            {/* Content */}
            <div className="prose max-w-none mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed whitespace-pre-wrap">{post.content}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between border-t pt-4 sm:pt-6">
              <div className="flex items-center space-x-4 sm:space-x-6">
                {/* Like Button */}
                <button
                  onClick={handleLikeToggle}
                  className={`flex items-center space-x-1 sm:space-x-2 transition-all duration-200 hover:scale-110 cursor-pointer ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                    }`}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span className="font-medium text-sm sm:text-base text-gray-600">{formatCount(likeCount)}</span>
                </button>

                {/* Comment Button */}
                <button
                  onClick={handleCommentClick}
                  className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-blue-500 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-medium text-sm sm:text-base">{formatCount(commentCount)}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <CommentModal
          isOpen={commentModal.isOpen}
          onClose={closeCommentModal}
          postId={commentModal.postId}
          postTitle={commentModal.postTitle}
        />
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostDetail;