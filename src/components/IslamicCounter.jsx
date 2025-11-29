import React, { useState } from 'react';

const IslamicCounter = () => {
  const [count, setCount] = useState(0);
  const [currentDhikr, setCurrentDhikr] = useState(0);

  const dhikrList = [
    { text: "سُبْحَانَ اللهِ", translation: "SubhanAllah", meaning: "Glory to Allah" },
    { text: "الْحَمْدُ لِلَّهِ", translation: "Alhamdulillah", meaning: "Praise to Allah" },
    { text: "اللهُ أَكْبَرُ", translation: "Allahu Akbar", meaning: "Allah is Greatest" },
    { text: "لَا إِلَهَ إِلَّا اللهُ", translation: "La ilaha illa Allah", meaning: "No god but Allah" }
  ];

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const changeDhikr = () => {
    setCurrentDhikr((prev) => (prev + 1) % dhikrList.length);
    setCount(0);
  };

  const current = dhikrList[currentDhikr];

  return (
    <div className="bg-gradient-to-br from-rose-900/50 to-pink-800/50 backdrop-blur-md rounded-2xl p-4 border border-rose-600/30 hover:border-rose-500/50 transition-all duration-300">
      <h3 className="text-lg font-semibold text-white mb-3 text-center flex items-center justify-center gap-2">
        <span className="text-xl">📿</span>
        <span>Digital Tasbih</span>
      </h3>
      
      <div className="text-center space-y-3">
        {/* Dhikr Display */}
        <div className="p-3 bg-rose-800/30 rounded-lg border border-rose-700/20">
          <div className="text-lg text-rose-100 mb-1 font-arabic" dir="rtl">{current.text}</div>
          <div className="text-rose-300 text-sm">{current.translation}</div>
          <div className="text-rose-400 text-xs italic">"{current.meaning}"</div>
        </div>
        
        {/* Counter */}
        <div className="p-3 bg-pink-800/30 rounded-lg">
          <div className="text-3xl font-bold text-pink-100 mb-2">{count}</div>
          <div className="text-pink-300 text-xs">Count</div>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={handleIncrement}
            className="flex-1 bg-rose-600/80 hover:bg-rose-600 text-white py-2 px-3 rounded-lg text-sm font-semibold transition-all cursor-pointer"
          >
            +1
          </button>
          <button 
            onClick={handleReset}
            className="bg-pink-600/80 hover:bg-pink-600 text-white py-2 px-3 rounded-lg text-sm cursor-pointer"
          >
            Reset
          </button>
        </div>
        
        <button 
          onClick={changeDhikr}
          className="w-full bg-gradient-to-r from-rose-700/80 to-pink-700/80 hover:from-rose-700 hover:to-pink-700 text-white py-2 px-3 rounded-lg text-xs cursor-pointer"
        >
          Change Dhikr
        </button>
      </div>
    </div>
  );
};

export default IslamicCounter;