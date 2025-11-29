import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'blue' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  };

  const colors = {
    blue: 'border-blue-500',
    white: 'border-white',
    purple: 'border-purple-500'
  };

  return (
    <div className={`animate-spin rounded-full ${sizes[size]} border-b-2 ${colors[color]}`}></div>
  );
};

export default LoadingSpinner;