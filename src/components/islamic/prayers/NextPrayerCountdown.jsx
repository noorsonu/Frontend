import React from 'react';

const NextPrayerCountdown = ({ timeRemaining }) => {
  return (
    <div className="mt-3 p-2 sm:p-3 bg-green-900/20 rounded-lg border border-green-600/30">
      <div className="text-center">
        <p className="text-green-400 font-medium text-xs sm:text-sm mb-1">
          Next: {timeRemaining.name}
        </p>
        <p className="text-white text-sm sm:text-base font-bold">
          {timeRemaining.hours}h {timeRemaining.minutes}m remaining
        </p>
      </div>
    </div>
  );
};

export default NextPrayerCountdown;