import React from 'react';

const PrayerNotification = ({ timeRemaining }) => {
  if (Math.abs(timeRemaining.hours * 60 + timeRemaining.minutes) > 15) {
    return null;
  }

  return (
    <div className="mt-2 p-2 bg-yellow-900/20 rounded-lg border border-yellow-600/30 animate-pulse">
      <p className="text-yellow-400 text-xs text-center font-medium">
        ⏰ {timeRemaining.name} prayer in {timeRemaining.minutes} minutes!
      </p>
    </div>
  );
};

export default PrayerNotification;