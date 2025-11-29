import React from 'react';

const ToolDetail = ({ tool, onBack }) => {
  return (
    <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-gray-600/30 max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm cursor-pointer transition-colors"
      >
        ← Back to Tools
      </button>

      <div className="text-center mb-6">
        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl sm:text-3xl mb-4 mx-auto shadow-lg`}>
          {tool.icon}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{tool.name}</h2>
        <p className="text-gray-300 text-sm sm:text-base">{tool.description}</p>
      </div>

      <div className="text-gray-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">
        {tool.content}
      </div>
    </div>
  );
};

export default ToolDetail;