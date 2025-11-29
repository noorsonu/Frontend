import React, { useEffect } from 'react';

const ActionPopup = ({ show, onHide, message, position }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  if (!show) return null;

  return (
    <div className={`absolute ${position} z-50 pointer-events-none`}>
      <div className="bg-black/90 text-white px-1.5 py-0.5 rounded text-[10px] font-medium animate-pulse whitespace-nowrap">
        {message}
      </div>
    </div>
  );
};

export default ActionPopup;