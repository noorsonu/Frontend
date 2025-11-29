import React from 'react';

const ReplyForm = ({ replyText, setReplyText, onSubmit, onCancel }) => {
  return (
    <div className="mt-2 p-3 bg-gradient-to-r from-slate-800/80 via-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/30 backdrop-blur-sm">
      <div className="flex flex-col gap-2">
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Write a reply..."
          rows="2"
          className="w-full bg-red-500/50 border-4 border-yellow-400 rounded-xl px-4 py-3 text-white placeholder-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 focus:outline-none resize-none text-lg backdrop-blur-md transition-all duration-300 hover:bg-red-600/50 focus:bg-red-700/50"
          style={{ direction: 'ltr' }}
          dir="ltr"
          autoFocus
        />
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="px-2 py-1 text-gray-400 text-xs"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm hover:scale-105 shadow-lg"
          >
            <svg className="w-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;