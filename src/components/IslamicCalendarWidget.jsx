import React, { useState, useEffect } from 'react';

const IslamicCalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [islamicEvents, setIslamicEvents] = useState([]);

  const islamicMonths = [
    'محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأول', 'جمادى الثاني',
    'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
  ];

  const importantEvents = [
    { date: '10 محرم', event: 'Day of Ashura', color: 'text-red-400' },
    { date: '12 ربيع الأول', event: 'Mawlid an-Nabi', color: 'text-green-400' },
    { date: '27 رجب', event: 'Isra and Mi\'raj', color: 'text-blue-400' },
    { date: '15 شعبان', event: 'Laylat al-Bara\'at', color: 'text-purple-400' },
    { date: '1 رمضان', event: 'Start of Ramadan', color: 'text-emerald-400' },
    { date: '27 رمضان', event: 'Laylat al-Qadr', color: 'text-yellow-400' },
    { date: '1 شوال', event: 'Eid al-Fitr', color: 'text-pink-400' },
    { date: '10 ذو الحجة', event: 'Eid al-Adha', color: 'text-orange-400' }
  ];

  useEffect(() => {
    // Simulate getting current Islamic events
    const currentMonth = Math.floor(Math.random() * 12);
    const eventsThisMonth = importantEvents.filter(event => 
      event.date.includes(islamicMonths[currentMonth])
    );
    setIslamicEvents(eventsThisMonth);
  }, []);

  const getHijriDate = () => {
    // Simplified Hijri date calculation (for display purposes)
    const hijriYear = 1445;
    const hijriMonth = Math.floor(Math.random() * 12);
    const hijriDay = Math.floor(Math.random() * 29) + 1;
    
    return {
      day: hijriDay,
      month: islamicMonths[hijriMonth],
      year: hijriYear
    };
  };

  const hijriDate = getHijriDate();

  return (
    <div className="bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-xl p-4 border border-indigo-500/20">
      <div className="text-center mb-4">
        <h3 className="text-indigo-400 font-semibold text-sm mb-2">Islamic Calendar</h3>
        
        {/* Current Hijri Date */}
        <div className="bg-gray-800/40 rounded-lg p-3 mb-3">
          <div className="text-white text-lg font-bold">
            {hijriDate.day} {hijriDate.month}
          </div>
          <div className="text-indigo-300 text-sm">{hijriDate.year}ھ</div>
        </div>

        {/* Gregorian Date */}
        <div className="text-gray-300 text-xs mb-3">
          {currentDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h4 className="text-indigo-400 text-xs font-semibold mb-2">Upcoming Events</h4>
        <div className="space-y-2">
          {importantEvents.slice(0, 3).map((event, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-800/30 rounded-lg p-2">
              <div>
                <div className={`text-xs font-semibold ${event.color}`}>
                  {event.event}
                </div>
                <div className="text-gray-400 text-xs">{event.date}</div>
              </div>
              <div className="text-lg">🌙</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
        <div className="text-indigo-400 text-sm">☪️</div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default IslamicCalendarWidget;