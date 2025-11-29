import React, { useState, useEffect } from 'react';

const IslamicCalendar = () => {
  const [islamicDate, setIslamicDate] = useState('');
  const [gregorianDate, setGregorianDate] = useState('');

  useEffect(() => {
    const updateDates = () => {
      const today = new Date();
      
      // Get Islamic date
      const hijriDate = new Intl.DateTimeFormat('en-US-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(today);
      
      // Get Gregorian date
      const gregDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(today);
      
      setIslamicDate(hijriDate);
      setGregorianDate(gregDate);
    };

    updateDates();
    
    // Update every hour to ensure accuracy
    const interval = setInterval(updateDates, 3600000);
    
    // Update at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    
    const midnightTimeout = setTimeout(() => {
      updateDates();
      // Set up daily updates
      const dailyInterval = setInterval(updateDates, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyInterval);
    }, msUntilMidnight);

    return () => {
      clearInterval(interval);
      clearTimeout(midnightTimeout);
    };
  }, []);

  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-600/20">
      <div className="text-center space-y-2">
        <h3 className="text-sm sm:text-base font-medium text-white flex items-center justify-center gap-2">
          <span>📅</span>
          <span>Islamic Calendar</span>
        </h3>
        
        <div className="space-y-1">
          <p className="text-xs sm:text-sm text-gray-300 font-medium">
            {islamicDate}
          </p>
          <p className="text-xs text-gray-400">
            {gregorianDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IslamicCalendar;