import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white hover:from-purple-500 hover:via-blue-500 hover:to-indigo-500 shadow-xl hover:shadow-purple-500/25',
    secondary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500',
    ghost: 'text-gray-400 hover:text-gray-300',
    danger: 'text-red-400 hover:text-red-600 bg-red-900/20'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-6 py-3 text-sm'
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
    ${className}
  `.trim();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;