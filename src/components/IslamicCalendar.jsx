import React, { useState, useEffect } from 'react';

const IslamicCalendar = () => {
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getNextIslamicEvent = () => {
    const events = [
      { name: 'Ramadan', date: '2025-02-28', icon: '🌙', days: Math.ceil((new Date('2025-02-28') - new Date()) / (1000 * 60 * 60 * 24)) },
      { name: 'Eid ul-Fitr', date: '2025-03-30', icon: '🎉', days: Math.ceil((new Date('2025-03-30') - new Date()) / (1000 * 60 * 60 * 24)) },
      { name: 'Hajj', date: '2025-06-06', icon: '🕋', days: Math.ceil((new Date('2025-06-06') - new Date()) / (1000 * 60 * 60 * 24)) },
      { name: 'Eid ul-Adha', date: '2025-06-16', icon: '🐑', days: Math.ceil((new Date('2025-06-16') - new Date()) / (1000 * 60 * 60 * 24)) }
    ];
    
    const upcomingEvents = events.filter(event => event.days > 0).sort((a, b) => a.days - b.days);
    return upcomingEvents[0] || events[0];
  };

  const [islamicDate, setIslamicDate] = useState('');
  const [gregorianDate, setGregorianDate] = useState('');
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [nextEvent, setNextEvent] = useState(getNextIslamicEvent());

  useEffect(() => {
    const updateDates = () => {
      const today = new Date();
      
      const hijriDate = new Intl.DateTimeFormat('en-US-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(today);
      
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
    
    const interval = setInterval(updateDates, 3600000);
    const timeInterval = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setNextEvent(getNextIslamicEvent());
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-900/50 to-cyan-800/50 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300">
      <h3 className="text-base sm:text-lg font-semibold text-white mb-3 text-center flex items-center justify-center space-x-2">
        <span className="text-lg sm:text-xl">🌙</span>
        <span>Islamic Calendar</span>
      </h3>
      
      <div className="text-center space-y-3">
        <div className="p-3 bg-blue-800/30 rounded-lg border border-blue-700/20">
          <p className="text-blue-100 text-sm font-bold">{islamicDate}</p>
          <p className="text-blue-200 text-xs mt-1">{gregorianDate}</p>
        </div>
        
        <div className="bg-cyan-800/30 p-2 rounded-lg border border-cyan-700/20">
          <div className="text-cyan-100 text-lg font-mono">{currentTime}</div>
          <div className="text-cyan-300 text-xs">Current Time</div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 p-2 rounded-lg border border-purple-700/20">
          <div className="text-purple-100 text-xs font-semibold flex items-center justify-center gap-1">
            <span>{nextEvent.icon}</span>
            <span>Next: {nextEvent.name}</span>
          </div>
          <div className="text-purple-300 text-xs text-center mt-1">
            {nextEvent.days > 0 ? `${nextEvent.days} days left` : 'Today!'}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-blue-900/30 p-2 rounded text-blue-200">
            <div className="font-semibold">🕰️ Hijri</div>
            <div className="text-blue-300">1446 AH</div>
          </div>
          <div className="bg-cyan-900/30 p-2 rounded text-cyan-200">
            <div className="font-semibold">🌍 Makkah</div>
            <div className="text-cyan-300">Time Zone</div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-2 text-xs text-blue-300">
          <span>📅 Events</span>
          <span>⏰ Live</span>
          <span>🎯 Next</span>
        </div>
      </div>
    </div>
  );
};

export default IslamicCalendar;