import React from 'react';

const CommentForm = ({ newComment, setNewComment, onSubmit, submitting }) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 border-t-2 border-blue-500/30 bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
          Share Your Thoughts
        </h3>
        
        <div className="bg-gray-700/50 rounded-xl p-4 sm:p-6 border border-gray-600/50 backdrop-blur-sm">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="w-full">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="What's on your mind? Share your thoughts, ask questions, or start a discussion..."
                rows="5"
                className="w-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px] bg-gray-800/80 border-2 border-gray-500/50 rounded-xl px-4 py-4 sm:px-6 sm:py-5 text-white placeholder-gray-400 text-base sm:text-lg leading-relaxed shadow-inner focus:shadow-lg"
                style={{
                  borderColor: '#6b7280',
                  transition: 'none',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#6b7280';
                  e.target.style.boxShadow = 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)';
                }}
              />
            </div>
            
            <div className="flex justify-between items-center flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className={`${newComment.length > 450 ? 'text-yellow-400' : newComment.length > 500 ? 'text-red-400' : 'text-gray-400'}`}>
                  {newComment.length}/500 characters
                </span>
                <span className="hidden sm:block text-xs bg-gray-600/50 px-2 py-1 rounded-full">
                  💡 Be respectful and constructive
                </span>
              </div>
              
              <button
                onClick={onSubmit}
                disabled={!newComment.trim() || submitting || newComment.length > 500}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-w-[120px] justify-center"
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
      </div>
    </div>
  );
};

export default CommentForm;