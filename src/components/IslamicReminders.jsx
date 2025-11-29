import React, { useState, useEffect } from 'react';

const IslamicReminders = () => {
  const [currentReminder, setCurrentReminder] = useState(0);

  const reminders = [
    {
      title: "Make Dua",
      message: "Remember to make dua between Maghrib and Isha",
      icon: "🤲",
      color: "from-rose-900/50 to-pink-900/50",
      border: "border-rose-600/30"
    },
    {
      title: "Seek Forgiveness",
      message: "Say 'Astaghfirullah' 100 times daily",
      icon: "💫",
      color: "from-violet-900/50 to-purple-900/50",
      border: "border-violet-600/30"
    },
    {
      title: "Read Quran",
      message: "Try to read at least one page of Quran today",
      icon: "📚",
      color: "from-cyan-900/50 to-blue-900/50",
      border: "border-cyan-600/30"
    },
    {
      title: "Remember Death",
      message: "Remember often the destroyer of pleasures: death",
      icon: "⏳",
      color: "from-amber-900/50 to-orange-900/50",
      border: "border-amber-600/30"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReminder(prev => (prev + 1) % reminders.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const reminder = reminders[currentReminder];

  return (
    <div className={`bg-gradient-to-br ${reminder.color} backdrop-blur-md rounded-xl shadow-xl p-3 sm:p-4 border ${reminder.border} transition-all duration-1000`}>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl mb-3">{reminder.icon}</div>
        <h3 className="text-white font-bold text-base sm:text-lg mb-2">{reminder.title}</h3>
        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">{reminder.message}</p>
        

      </div>
    </div>
  );
};

export default IslamicReminders;