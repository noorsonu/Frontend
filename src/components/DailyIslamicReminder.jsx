import React, { useState, useEffect } from 'react';

const DailyIslamicReminder = () => {
  const [currentReminder, setCurrentReminder] = useState(0);
  
  const reminders = [
    {
      title: 'सुबह की दुआ',
      content: 'उठने के बाद अल्हम्दुलिल्लाहि रब्बिल आलमीन कहें',
      icon: '🌅',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'इस्तिगफार',
      content: 'दिन में 100 बार अस्तगफिरुल्लाह पढ़ें',
      icon: '🤲',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'दुरूद शरीफ',
      content: 'नबी (ﷺ) पर दुरूद भेजना न भूलें',
      icon: '💚',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'कुरान तिलावत',
      content: 'रोज़ाना कम से कम एक आयत पढ़ें',
      icon: '📖',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'शुक्र अदा करें',
      content: 'अल्लाह के नेमतों का शुक्र अदा करें',
      icon: '🙏',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReminder((prev) => (prev + 1) % reminders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reminders.length]);

  const reminder = reminders[currentReminder];

  return (
    <div className="relative bg-gradient-to-br from-slate-800/60 via-gray-800/60 to-slate-800/60 backdrop-blur-md rounded-xl p-4 border border-gray-600/30 overflow-hidden">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${reminder.color} opacity-10 transition-all duration-1000`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-3">{reminder.icon}</span>
          <h3 className="text-white font-semibold text-sm">Daily Reminder</h3>
        </div>
        
        <div className="transition-all duration-500">
          <h4 className="text-emerald-400 font-semibold mb-2">{reminder.title}</h4>
          <p className="text-gray-300 text-sm leading-relaxed">{reminder.content}</p>
        </div>
        
        {/* Progress Dots */}
        <div className="flex justify-center space-x-1 mt-4">
          {reminders.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentReminder ? 'bg-emerald-400 w-4' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-2 right-2 w-8 h-8 border border-emerald-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border border-teal-400/20 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
    </div>
  );
};

export default DailyIslamicReminder;