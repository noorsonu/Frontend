import React, { useState, useEffect } from 'react';

const IslamicWeather = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [greeting, setGreeting] = useState('');
  const [islamicQuote, setIslamicQuote] = useState('');

  const islamicQuotes = [
    "Allah is with those who are patient.",
    "Trust in Allah's plan for you.",
    "Every difficulty contains ease.",
    "Remember Allah in times of ease.",
    "Gratitude turns what we have into enough.",
    "Seek knowledge from cradle to grave.",
    "The best of people benefit others."
  ];

  const getIslamicGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "صباح الخير"; // Good Morning
    if (hour < 18) return "مساء الخير"; // Good Afternoon  
    return "مساء النور"; // Good Evening
  };

  const updateTimeAndGreeting = () => {
    const now = new Date();
    
    // Format time
    const timeString = now.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // Format date
    const dateString = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
    
    setCurrentTime(timeString);
    setCurrentDate(dateString);
    setGreeting(getIslamicGreeting());
    
    // Random quote
    const randomQuote = islamicQuotes[Math.floor(Math.random() * islamicQuotes.length)];
    setIslamicQuote(randomQuote);
  };

  useEffect(() => {
    updateTimeAndGreeting();
    const interval = setInterval(updateTimeAndGreeting, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-900/50 to-purple-800/50 backdrop-blur-md rounded-2xl p-4 border border-indigo-600/30 hover:border-indigo-500/50 transition-all duration-300">
      <h3 className="text-lg font-semibold text-white mb-3 text-center flex items-center justify-center gap-2">
        <span className="text-xl">🌙</span>
        <span>Islamic Time</span>
      </h3>
      
      <div className="text-center space-y-3">
        {/* Time Display */}
        <div className="p-3 bg-indigo-800/30 rounded-lg border border-indigo-700/20">
          <div className="text-2xl font-bold text-indigo-100 mb-1">{currentTime}</div>
          <div className="text-indigo-300 text-sm">{currentDate}</div>
        </div>
        
        {/* Islamic Greeting */}
        <div className="p-2 bg-purple-800/30 rounded-lg">
          <div className="text-purple-200 text-lg font-arabic" dir="rtl">{greeting}</div>
          <div className="text-purple-300 text-xs">Islamic Greeting</div>
        </div>
        
        {/* Islamic Quote */}
        <div className="p-2 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg">
          <div className="text-indigo-200 text-xs italic">"{islamicQuote}"</div>
        </div>
        
        {/* Features */}
        <div className="flex justify-center space-x-3 text-xs text-indigo-300">
          <span>⏰ Live</span>
          <span>🌙 Islamic</span>
          <span>💭 Quotes</span>
        </div>
      </div>
    </div>
  );
};

export default IslamicWeather;