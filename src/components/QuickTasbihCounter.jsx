import React, { useState, useEffect } from 'react';

const QuickTasbihCounter = () => {
  const [count, setCount] = useState(0);
  const [selectedDhikr, setSelectedDhikr] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const dhikrList = [
    { text: 'سُبْحَانَ اللهِ', translation: 'सुब्हानल्लाह', target: 33 },
    { text: 'الْحَمْدُ لِلَّهِ', translation: 'अल्हम्दुलिल्लाह', target: 33 },
    { text: 'اللهُ أَكْبَرُ', translation: 'अल्लाहु अकबर', target: 34 },
    { text: 'أَسْتَغْفِرُ اللهَ', translation: 'अस्तगफिरुल्लाह', target: 100 }
  ];

  const currentDhikr = dhikrList[selectedDhikr];

  const handleIncrement = () => {
    setIsAnimating(true);
    setCount(prev => prev + 1);
    setTimeout(() => setIsAnimating(false), 200);
  };

  const handleReset = () => {
    setCount(0);
  };

  const getProgressPercentage = () => {
    return Math.min((count / currentDhikr.target) * 100, 100);
  };

  return (
    <div className="bg-gradient-to-br from-emerald-900/30 via-teal-900/30 to-green-900/30 backdrop-blur-md rounded-xl p-4 border border-emerald-500/20">
      <div className="text-center mb-4">
        <h3 className="text-emerald-400 font-semibold text-sm mb-2">Quick Tasbih</h3>
        
        {/* Dhikr Selector */}
        <select 
          value={selectedDhikr}
          onChange={(e) => {
            setSelectedDhikr(Number(e.target.value));
            setCount(0);
          }}
          className="bg-gray-800/60 text-white text-xs rounded-lg px-2 py-1 border border-emerald-500/30 focus:outline-none focus:border-emerald-400"
        >
          {dhikrList.map((dhikr, index) => (
            <option key={index} value={index}>{dhikr.translation}</option>
          ))}
        </select>
      </div>

      <div className="text-center mb-4">
        <div className="text-emerald-300 text-lg font-arabic mb-1">{currentDhikr.text}</div>
        <div className="text-gray-300 text-xs">{currentDhikr.translation}</div>
      </div>

      {/* Counter Display */}
      <div className="text-center mb-4">
        <div className={`text-3xl font-bold text-white transition-transform duration-200 ${
          isAnimating ? 'scale-110' : 'scale-100'
        }`}>
          {count}
        </div>
        <div className="text-emerald-400 text-xs">/ {currentDhikr.target}</div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-700/50 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={handleIncrement}
          className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          Count
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-3 rounded-lg transition-all duration-200"
        >
          Reset
        </button>
      </div>

      {/* Completion Message */}
      {count >= currentDhikr.target && (
        <div className="mt-3 text-center">
          <div className="text-emerald-400 text-sm font-semibold animate-pulse">
            🎉 Completed! May Allah accept your dhikr
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickTasbihCounter;