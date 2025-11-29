import React, { useState, useEffect } from 'react';

const DailyDhikr = () => {
  const [currentDhikr, setCurrentDhikr] = useState(0);

  const dhikrList = [
    "سُبْحَانَ اللَّهِ",
    "الْحَمْدُ لِلَّهِ", 
    "اللَّهُ أَكْبَرُ",
    "لَا إِلَٰهَ إِلَّا اللَّهُ",
    "أَسْتَغْفِرُ اللَّهَ"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDhikr(prev => (prev + 1) % dhikrList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 sm:p-4">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-600 to-green-800 rounded-full shadow-lg border-2 border-green-400/50 flex items-center justify-center">
          <div className="text-center px-1">
            <p className="text-white text-xs sm:text-sm font-medium transition-all duration-500 leading-tight">
              {dhikrList[currentDhikr]}
            </p>
          </div>
        </div>
        <h3 className="text-white font-medium mt-2 text-xs sm:text-sm text-center">Daily Dhikr</h3>
      </div>
    </div>
  );
};

export default DailyDhikr;