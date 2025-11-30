import { handleImageError } from '../utils/imageUtils';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import ActionPopup from './LikePopup';

const PostCard = ({ id, title, image, description, dateAndTime, timeAgo, author, onCommentClick, liked = false, likeCount = 0, commentCount = 0, onStatsUpdate }) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [loading, setLoading] = useState(false);
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);
  const [showLikePopup, setShowLikePopup] = useState(false);
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const navigate = useNavigate();
  // Truncate description to 10 words
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
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

  // Update state when props change
  useEffect(() => {
    setIsLiked(liked);
    setCurrentLikeCount(likeCount);
  }, [liked, likeCount]);

  // Handle like toggle
  const handleLikeToggle = async () => {
    // Check authentication
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Prevent multiple rapid clicks
    if (isProcessing) return;
    setIsProcessing(true);

    try {
      // Toggle the like state immediately for instant feedback
      const newLikedState = !isLiked;
      const newCount = newLikedState ? currentLikeCount + 1 : currentLikeCount - 1;

      // Update UI immediately
      setIsLiked(newLikedState);
      setCurrentLikeCount(newCount);
      setRenderKey(prev => prev + 1);

      // Show popup when liking
      if (newLikedState) {
        setShowLikePopup(true);
      }

      // Update parent stats
      if (onStatsUpdate) {
        onStatsUpdate(id, newCount, commentCount);
      }

      // Make API call
      setLoading(true);
      const response = await api.post(`/api/posts/${id}/like`);

      // If server response differs from our optimistic update, correct it
      if (response.isLiked !== newLikedState) {
        setIsLiked(response.isLiked);
        const correctedCount = response.isLiked ? likeCount + 1 : likeCount;
        setCurrentLikeCount(correctedCount);

        if (onStatsUpdate) {
          onStatsUpdate(id, correctedCount, commentCount);
        }
      }

    } catch (error) {
      console.error('Error toggling like:', error);

      // Revert to original state on error
      setIsLiked(liked);
      setCurrentLikeCount(likeCount);

      if (onStatsUpdate) {
        onStatsUpdate(id, likeCount, commentCount);
      }

      if (error.response?.status === 401) {
        navigate('/login');
      }
    } finally {
      setLoading(false);
      // Add small delay to prevent rapid clicking
      setTimeout(() => setIsProcessing(false), 300);
    }
  };

  const handleReadMore = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="bg-gray-800/60 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden w-full border border-gray-600/30">
      {/* Fully Responsive Image */}
      <div className="relative w-full h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44">
        <img
          key={image}
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
          onError={handleImageError}
        />
      </div>

      {/* Content Container */}
      <div className="p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5">
        {/* Title with Time */}
        <div className="flex items-start justify-between mb-1 gap-1">
          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl font-bold text-white line-clamp-2 leading-tight flex-1">
            {title}
          </h3>
          <span className="text-gray-400 text-[10px] xs:text-xs sm:text-xs font-medium flex-shrink-0 mt-0.5">
            {timeAgo}
          </span>
        </div>

        {/* 10 words description */}
        <p className="text-gray-400 text-xs xs:text-xs sm:text-sm md:text-sm mb-1.5 xs:mb-2 leading-tight">
          {truncateText(description, 10)}
        </p>

        {/* Actions Row */}
        <div className="flex justify-between items-center">
          {/* Like & Comment buttons with counts and time */}
          <div className="flex items-center gap-1.5 xs:gap-2">
            <div className="relative">
              <button
                key={`like-${renderKey}`}
                onClick={handleLikeToggle}
                disabled={loading || isProcessing}
                className={`flex items-center space-x-1 cursor-pointer hover:scale-110 ${(loading || isProcessing) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLiked ? (
                  <svg
                    key="liked-heart"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#ef4444"
                    className="h-4 w-4 xs:h-5 xs:w-5 sm:h-5 sm:w-5 md:h-5 md:w-5"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                ) : (
                  <svg
                    key="unliked-heart"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    className="h-4 w-4 xs:h-5 xs:w-5 sm:h-5 sm:w-5 md:h-5 md:w-5"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                )}
                {currentLikeCount > 0 && (
                  <span className="font-medium text-xs xs:text-xs sm:text-sm text-gray-300">
                    {formatCount(currentLikeCount)}
                  </span>
                )}
              </button>
              <ActionPopup
                show={showLikePopup}
                onHide={() => setShowLikePopup(false)}
                message="Liked"
                position="-top-6 -right-2"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  const token = localStorage.getItem('token');
                  if (!token) {
                    navigate('/login');
                    return;
                  }
                  onCommentClick(id, title);
                  setShowCommentPopup(true);
                }}
                className="flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 xs:h-5 xs:w-5 sm:h-5 sm:w-5 md:h-5 md:w-5">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {commentCount > 0 && (
                  <span className="font-medium text-xs xs:text-xs sm:text-sm text-gray-300">
                    {formatCount(commentCount)}
                  </span>
                )}
              </button>
              <ActionPopup
                show={showCommentPopup}
                onHide={() => setShowCommentPopup(false)}
                message="Comments"
                position="-top-6 -right-4"
              />
            </div>


          </div>

          {/* Read More Button - Always visible */}
          <button
            onClick={handleReadMore}
            className="text-blue-400 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm cursor-pointer hover:text-blue-300 transition-colors"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;