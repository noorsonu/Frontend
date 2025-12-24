import React, { useState, useEffect } from 'react';

const IslamicToast = ({ message, type = 'info', duration = 4000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeaving(true);
      setTimeout(() => {
        setIsVisible(false);
        onClose && onClose();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-gradient-to-r from-emerald-600 to-teal-600',
          border: 'border-emerald-500',
          icon: '✅'
        };
      case 'error':
        return {
          bg: 'bg-gradient-to-r from-red-600 to-pink-600',
          border: 'border-red-500',
          icon: '❌'
        };
      case 'warning':
        return {
          bg: 'bg-gradient-to-r from-amber-600 to-orange-600',
          border: 'border-amber-500',
          icon: '⚠️'
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-blue-600 to-indigo-600',
          border: 'border-blue-500',
          icon: 'ℹ️'
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <div className={`fixed top-20 right-4 z-50 transform transition-all duration-300 ${
      isLeaving ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
    }`}>
      <div className={`${styles.bg} ${styles.border} border-l-4 rounded-lg shadow-lg backdrop-blur-md p-4 max-w-sm`}>
        <div className="flex items-center">
          <span className="text-xl mr-3">{styles.icon}</span>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">{message}</p>
          </div>
          <button
            onClick={() => {
              setIsLeaving(true);
              setTimeout(() => {
                setIsVisible(false);
                onClose && onClose();
              }, 300);
            }}
            className="ml-3 text-white hover:text-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="mt-2 w-full bg-white/20 rounded-full h-1">
          <div 
            className="bg-white h-1 rounded-full transition-all ease-linear"
            style={{ 
              width: '100%',
              animation: `shrink ${duration}ms linear forwards`
            }}
          ></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default IslamicToast;