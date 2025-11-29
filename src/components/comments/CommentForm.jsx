import React from 'react';

const CommentForm = ({ newComment, setNewComment, onSubmit, submitting }) => {
  return (
    <div className="relative p-4 sm:p-6 border-t border-white/20 bg-gradient-to-br from-slate-800/80 via-gray-800/80 to-slate-700/80 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-10 flex flex-col gap-3">
        <div className="relative group">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="🔥 TEST: Write your comment here!"
            rows="3"
            className="w-full bg-red-500/50 border-4 border-yellow-400 rounded-xl px-4 py-3 text-white placeholder-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 focus:outline-none resize-none text-lg backdrop-blur-md transition-all duration-300 hover:bg-red-600/50 focus:bg-red-700/50"
            style={{ direction: 'ltr' }}
            dir="ltr"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <button
          onClick={onSubmit}
          disabled={!newComment.trim() || submitting}
          className="self-end px-6 py-3 bg-gradient-to-r from-slate-600 via-gray-600 to-slate-500 text-white rounded-xl hover:from-slate-500 hover:via-gray-500 hover:to-slate-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm hover:scale-105 shadow-xl font-medium border border-white/20"
        >
          {submitting ? (
            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
          ) : (
            <svg className="w-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          )}
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentForm;