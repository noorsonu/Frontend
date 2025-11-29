import React from 'react';

const ToolCard = ({ tool, onClick }) => {
  return (
    <div
      onClick={() => onClick(tool)}
      className="flex-shrink-0 cursor-pointer group relative z-50 p-2"
      style={{ width: 'calc(15vw)', minWidth: '70px', maxWidth: '90px' }}
    >
      <div className="text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-lg sm:text-xl mb-2 mx-auto transform group-hover:scale-110 transition-all duration-300 shadow-lg">
          {tool.icon}
        </div>
        <h3 className="font-medium text-white text-xs sm:text-sm group-hover:text-green-400 transition-colors leading-tight">
          {tool.name}
        </h3>
      </div>
    </div>
  );
};

export default ToolCard;