import React, { useState, useEffect } from 'react';

const QuranDuaBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      type: 'quran',
      icon: '📖',
      title: 'Read Quran',
      subtitle: 'Holy Quran with translations',
      action: 'Open Quran'
    },
    {
      type: 'hadith',
      icon: '📜',
      title: 'Hadith Collection',
      subtitle: 'Sahih Bukhari & Muslim',
      action: 'Read Hadith'
    },
    {
      type: 'tasbih',
      icon: '📿',
      title: 'Digital Tasbih',
      subtitle: 'Count your dhikr and tasbeeh',
      action: 'Start Tasbih'
    },
    {
      type: 'qibla',
      icon: '🧭',
      title: 'Qibla Direction',
      subtitle: 'Find direction to Makkah',
      action: 'Find Qibla'
    },
    {
      type: 'names',
      icon: '✨',
      title: '99 Names of Allah',
      subtitle: 'Asma ul Husna with meanings',
      action: 'View Names'
    },
    {
      type: 'dua',
      icon: '🤲',
      title: 'Daily Duas',
      subtitle: 'Morning & evening supplications',
      action: 'View Duas'
    },
    {
      type: 'calendar',
      icon: '🌙',
      title: 'Islamic Events',
      subtitle: 'Ramadan, Hajj & holy days',
      action: 'View Events'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = items[currentIndex];

  return (
    <div className="bg-gradient-to-br from-purple-900/40 to-pink-800/40 backdrop-blur-md rounded-2xl p-4 border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
      <div className="text-center">
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {currentItem.icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{currentItem.title}</h3>
        <p className="text-purple-200 text-sm mb-3">{currentItem.subtitle}</p>
        
        <div className="space-y-2">
          <button className="bg-purple-600/80 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer w-full">
            {currentItem.action}
          </button>
          

          
          <div className="flex justify-center gap-1 mt-2">
            {items.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-400' : 'bg-purple-700/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranDuaBox;