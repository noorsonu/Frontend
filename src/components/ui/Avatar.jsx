import React from 'react';

const Avatar = ({ name = 'U', size = 'md', className = '' }) => {
  const sizes = {
    xs: 'w-4 h-4 text-xs',
    sm: 'w-5 h-5 text-xs', 
    md: 'w-6 h-6 text-xs',
    lg: 'w-7 h-7 text-sm',
    xl: 'w-8 h-8 text-sm'
  };

  return (
    <div className={`
      ${sizes[size]} 
      bg-blue-500 rounded-full flex items-center justify-center 
      text-white font-semibold flex-shrink-0 ${className}
    `}>
      {name[0].toUpperCase()}
    </div>
  );
};

export default Avatar;