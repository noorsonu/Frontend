import React, { useState } from 'react';

const TasbihCounter = () => {
  const [count, setCount] = useState(0);
  const [selectedDhikr, setSelectedDhikr] = useState(0);
  const [target, setTarget] = useState(33);
  const [customTarget, setCustomTarget] = useState('');
  const [useCustom, setUseCustom] = useState(false);

  const dhikrList = [
    { text: "سُبْحَانَ اللهِ", translation: "SubhanAllah", meaning: "Glory be to Allah" },
    { text: "الْحَمْدُ لِلَّهِ", translation: "Alhamdulillah", meaning: "Praise be to Allah" },
    { text: "اللهُ أَكْبَرُ", translation: "Allahu Akbar", meaning: "Allah is Greatest" },
    { text: "لَا إِلَٰهَ إِلَّا اللهُ", translation: "La ilaha illa Allah", meaning: "There is no god but Allah" },
    { text: "أَسْتَغْفِرُ اللهَ", translation: "Astaghfirullah", meaning: "I seek forgiveness from Allah" }
  ];

  const targetOptions = [33, 99, 100, 500, 1000];

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const currentDhikr = dhikrList[selectedDhikr];
  const progress = (count / target) * 100;

  return (
    <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-600/30">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center space-x-2">
          <span className="text-2xl">📿</span>
          <span>Digital Tasbih</span>
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
      </div>
      
      {/* Dhikr Selection */}
      <div className="mb-6 space-y-3">
        <select 
          value={selectedDhikr} 
          onChange={(e) => {
            setSelectedDhikr(Number(e.target.value));
            setCount(0);
          }}
          className="w-full p-3 border border-gray-600/50 rounded-xl text-sm cursor-pointer bg-gray-800/80 text-white backdrop-blur-sm shadow-inner"
        >
          {dhikrList.map((dhikr, index) => (
            <option key={index} value={index}>
              {dhikr.translation} - {dhikr.meaning}
            </option>
          ))}
        </select>
        
        {/* Target Selection */}
        <div className="space-y-2">
          <select
            value={useCustom ? 'custom' : target}
            onChange={(e) => {
              if (e.target.value === 'custom') {
                setUseCustom(true);
              } else {
                setUseCustom(false);
                setTarget(Number(e.target.value));
                setCount(0);
              }
            }}
            className="w-full p-3 border border-gray-600/50 rounded-xl text-sm cursor-pointer bg-gray-800/80 text-white backdrop-blur-sm shadow-inner"
          >
            {targetOptions.map((option) => (
              <option key={option} value={option}>
                Target: {option}
              </option>
            ))}
            <option value="custom">Custom Target</option>
          </select>
          
          {useCustom && (
            <div className="flex gap-2">
              <input
                type="number"
                value={customTarget}
                onChange={(e) => setCustomTarget(e.target.value)}
                placeholder="Enter target"
                className="flex-1 p-3 border border-gray-600/50 rounded-xl text-sm bg-gray-800/80 text-white backdrop-blur-sm shadow-inner"
                min="1"
                max="10000"
              />
              <button
                onClick={() => {
                  if (customTarget && Number(customTarget) > 0) {
                    setTarget(Number(customTarget));
                    setCount(0);
                  }
                }}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-3 rounded-xl text-sm cursor-pointer shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Set
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Arabic Text */}
      <div className="text-center mb-6 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-600/30">
        <p className="text-3xl text-white mb-2 font-arabic" dir="rtl">
          {currentDhikr.text}
        </p>
        <p className="text-sm text-blue-300 font-semibold">{currentDhikr.translation}</p>
        <p className="text-xs text-gray-400 italic mt-1">{currentDhikr.meaning}</p>
      </div>

      {/* Realistic Tasbih Design */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          {/* Tasbih String */}
          <div className="relative w-48 h-48">
            {/* Main Circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-amber-800 to-amber-900 shadow-2xl border-4 border-amber-700">
              
              {/* Progress Ring */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgb(180 83 9 / 0.3)"
                  strokeWidth="3"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgb(34 197 94)"
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                  className="transition-all duration-500 drop-shadow-lg"
                />
              </svg>
              
              {/* Center Display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-green-400 mb-1 drop-shadow-lg">{count}</div>
                <div className="text-xs text-amber-200 font-semibold">of {target}</div>
              </div>
            </div>
            
            {/* Tasbih Beads around circle */}
            {Array.from({length: 33}, (_, i) => {
              const angle = (i * (360 / 33)) - 90;
              const radian = (angle * Math.PI) / 180;
              const x = 50 + 45 * Math.cos(radian);
              const y = 50 + 45 * Math.sin(radian);
              const isActive = i < (count % 33);
              
              return (
                <div
                  key={i}
                  className={`absolute w-3 h-3 rounded-full transition-all duration-300 shadow-lg ${
                    isActive 
                      ? 'bg-gradient-to-br from-green-400 to-green-600 shadow-green-400/50' 
                      : 'bg-gradient-to-br from-amber-600 to-amber-800 shadow-amber-800/50'
                  }`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Tap Button */}
      <div className="text-center mb-6">
        <button
          onClick={handleIncrement}
          className="w-24 h-24 bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white rounded-full text-lg font-bold shadow-2xl transform hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border-4 border-green-400/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full"></div>
          <span className="relative z-10">TAP</span>
        </button>
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleReset}
          className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-2 px-6 rounded-xl font-semibold transition-all duration-200 cursor-pointer border border-gray-500/50 shadow-lg"
        >
          Reset
        </button>
      </div>

      {count >= target && (
        <div className="mt-6 p-4 bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-600/50 rounded-xl text-center backdrop-blur-sm">
          <p className="text-green-400 font-bold text-lg mb-2">🎉 Masha'Allah!</p>
          <p className="text-white text-sm">Target completed! May Allah accept your dhikr.</p>
        </div>
      )}
    </div>
  );
};

export default TasbihCounter;