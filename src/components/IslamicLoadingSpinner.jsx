import React from 'react';

const IslamicLoadingSpinner = ({ size = 'md', message = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className={`${sizeClasses[size]} border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin`}></div>
        
        {/* Inner pulsing circle */}
        <div className={`absolute inset-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse opacity-20`}></div>
        
        {/* Center mosque icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-emerald-500 text-lg">🕌</span>
        </div>
        
        {/* Decorative dots */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {message && (
        <p className="mt-4 text-emerald-400 text-sm font-medium animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};

export default IslamicLoadingSpinner;