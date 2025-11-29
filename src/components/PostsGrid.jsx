import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { usePostContext } from '../contexts/PostContext';
import { getImageUrl } from '../utils/imageUtils';
import PostCard from './PostCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import CommentModal from './CommentModal';

const PostsGrid = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [commentModal, setCommentModal] = useState({ isOpen: false, postId: null, postTitle: '' });
  const { refreshTrigger } = usePostContext();

  const handleCommentClick = (postId, postTitle) => {
    setCommentModal({ isOpen: true, postId, postTitle });
  };

  const closeCommentModal = () => {
    setCommentModal({ isOpen: false, postId: null, postTitle: '' });
  };
  
  const handleCommentCountUpdate = (postId) => {
    // Refresh posts to get updated comment count
    fetchPosts();
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      month: 'short',
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

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/api/posts?t=${Date.now()}`);

      const transformedPosts = response
        .filter(post => {
          const title = (post.title || '').toLowerCase();
          const content = (post.content || '').toLowerCase();
          return !title.includes('htis') && !content.includes('htis');
        })
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(post => {
          const imageUrl = getImageUrl(post.imageUrl || post.image || post.imagePath || post.imageFile);
          return {
            id: post.id,
            title: post.title,
            description: post.content,
            author: post.authorName || 'Unknown Author',
            dateAndTime: formatDate(post.createdAt),
            timeAgo: getTimeAgo(post.createdAt),
            image: imageUrl,
            liked: post.liked || false,
            likeCount: post.likeCount || 0,
            commentCount: post.commentCount || 0
          };
        });

      setPosts(transformedPosts);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [refreshTrigger]);
  
  // Real-time update for individual post stats
  const updatePostStats = (postId, newLikeCount, newCommentCount) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, likeCount: newLikeCount, commentCount: newCommentCount }
          : post
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-4 sm:py-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-black text-white tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
          Latest Posts
        </h1>
      </div>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage error={error} onRetry={fetchPosts} />}

      {!loading && !error && posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No posts available</p>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 auto-rows-fr">
            {currentPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                image={post.image}
                description={post.description}
                dateAndTime={post.dateAndTime}
                timeAgo={post.timeAgo}
                author={post.author}
                liked={post.liked}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                onCommentClick={handleCommentClick}
                onStatsUpdate={updatePostStats}
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center mt-6 gap-1 sm:gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="px-2 py-1 sm:px-3 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm rounded-md hover:from-blue-700 hover:to-purple-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 shadow-lg"
            >
              ‹
            </button>

            {[...Array(Math.max(3, totalPages))].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                disabled={index + 1 > totalPages}
                className={`w-6 h-6 sm:w-8 sm:h-8 text-xs sm:text-sm rounded-md cursor-pointer transition-all duration-200 shadow-sm ${currentPage === index + 1
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-110'
                  : index + 1 > totalPages
                    ? 'bg-gray-600/30 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/70 hover:text-white'
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-2 py-1 sm:px-3 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm rounded-md hover:from-blue-700 hover:to-purple-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 shadow-lg"
            >
              ›
            </button>
          </div>
        </>
      )}

      <CommentModal
        isOpen={commentModal.isOpen}
        onClose={closeCommentModal}
        postId={commentModal.postId}
        postTitle={commentModal.postTitle}
        onCommentCountUpdate={handleCommentCountUpdate}
      />
    </div>
  );
};

export default PostsGrid;