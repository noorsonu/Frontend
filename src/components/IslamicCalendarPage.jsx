import React, { useState, useEffect } from 'react';

const IslamicCalendarPage = () => {
  const [currentHijriDate, setCurrentHijriDate] = useState('');
  const [currentGregorianDate, setCurrentGregorianDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const islamicEvents = [
    { name: 'Ramadan', date: '2025-02-28', description: 'Holy month of fasting', icon: '🌙' },
    { name: 'Eid ul-Fitr', date: '2025-03-30', description: 'Festival of breaking the fast', icon: '🎉' },
    { name: 'Hajj', date: '2025-06-06', description: 'Pilgrimage to Mecca', icon: '🕋' },
    { name: 'Eid ul-Adha', date: '2025-06-16', description: 'Festival of sacrifice', icon: '🐑' },
    { name: 'Muharram', date: '2025-07-07', description: 'Islamic New Year', icon: '🌟' },
    { name: 'Ashura', date: '2025-07-16', description: 'Day of remembrance', icon: '💫' }
  ];

  const islamicMonths = [
    'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
    'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Shaban',
    'Ramadan', 'Shawwal', 'Dhu al-Qidah', 'Dhu al-Hijjah'
  ];

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

      const timeString = today.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
      });
      
      setCurrentHijriDate(hijriDate);
      setCurrentGregorianDate(gregDate);
      setCurrentTime(timeString);
    };

    updateDates();
    const interval = setInterval(updateDates, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          Islamic Calendar
        </h1>

        {/* Current Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-md rounded-xl p-6 border border-blue-500/30">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>🌙</span> Hijri Date
            </h2>
            <p className="text-2xl font-bold text-blue-200 mb-2">{currentHijriDate}</p>
            <p className="text-blue-300 text-sm">1446 AH</p>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-md rounded-xl p-6 border border-green-500/30">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>📅</span> Gregorian Date
            </h2>
            <p className="text-2xl font-bold text-green-200 mb-2">{currentGregorianDate}</p>
            <p className="text-green-300 text-sm">Current Time: {currentTime}</p>
          </div>
        </div>

        {/* Islamic Events */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Upcoming Islamic Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {islamicEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 backdrop-blur-md rounded-xl p-4 border border-purple-500/30">
                <div className="text-center">
                  <div className="text-3xl mb-2">{event.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{event.name}</h3>
                  <p className="text-purple-200 text-sm mb-2">{event.description}</p>
                  <p className="text-purple-300 text-xs">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Islamic Months */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Islamic Months</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {islamicMonths.map((month, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-md rounded-lg p-3 border border-amber-500/30 text-center">
                <p className="text-white font-medium text-sm">{month}</p>
                <p className="text-amber-300 text-xs">{index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicCalendarPage;