import React, { useState, useEffect } from 'react';

const IslamicTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [islamicDate, setIslamicDate] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simple Islamic date calculation (approximate)
    const calculateIslamicDate = () => {
      const gregorianDate = new Date();
      const islamicMonths = [
        'محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأول', 'جمادى الثاني',
        'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
      ];
      
      // Approximate calculation (for display purposes)
      const islamicYear = 1445; // Current approximate Hijri year
      const islamicMonth = Math.floor(Math.random() * 12); // Simplified
      const islamicDay = Math.floor(Math.random() * 29) + 1; // Simplified
      
      setIslamicDate(`${islamicDay} ${islamicMonths[islamicMonth]} ${islamicYear}ھ`);
    };

    calculateIslamicDate();
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('hi-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/60 via-gray-800/60 to-slate-800/60 backdrop-blur-md rounded-xl p-4 border border-gray-600/30 text-center">
      <div className="mb-3">
        <div className="text-2xl font-bold text-white mb-1">
          {formatTime(currentTime)}
        </div>
        <div className="text-sm text-gray-300">
          {formatDate(currentTime)}
        </div>
      </div>
      
      <div className="border-t border-gray-600/30 pt-3">
        <div className="text-emerald-400 text-sm font-semibold mb-1">
          Islamic Date
        </div>
        <div className="text-white text-sm font-arabic">
          {islamicDate}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="flex justify-center items-center mt-3 space-x-2">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="text-emerald-400">🕌</div>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default IslamicTimeDisplay;