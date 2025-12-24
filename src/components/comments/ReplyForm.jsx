import React from 'react';

const ReplyForm = ({ replyText, setReplyText, onSubmit, onCancel }) => {
  return (
    <div className="mt-2 sm:mt-3 p-3 sm:p-4 bg-gradient-to-r from-slate-800/80 via-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/30 backdrop-blur-sm">
      <div className="flex flex-col gap-2 sm:gap-3">
        <div className="w-full">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            rows="2"
            className="w-full min-h-[60px] sm:min-h-[70px] bg-gray-800 border-2 border-gray-500 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-white placeholder-gray-400 text-sm sm:text-base outline-none resize-none leading-relaxed"
            style={{
              borderColor: '#6b7280',
              transition: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#60a5fa'}
            onBlur={(e) => e.target.style.borderColor = '#6b7280'}
            autoFocus
          />
        </div>
        <div className="flex justify-between items-center gap-2 sm:gap-3">
          <span className="text-xs text-gray-400 hidden sm:block">
            {replyText.length}/200 characters
          </span>
          <div className="flex gap-2">
            <button
              onClick={onCancel}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-gray-400 hover:text-gray-300 text-xs sm:text-sm rounded border border-gray-600 hover:border-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              disabled={!replyText.trim() || replyText.length > 200}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="hidden sm:inline">Reply</span>
              <span className="sm:hidden">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;