import React from 'react';

const IslamicDivider = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex items-center space-x-3">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-green-500"></div>
        <span className="text-green-400 text-lg">☪️</span>
        <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-green-500"></div>
      </div>
    </div>
  );
};

export default IslamicDivider;