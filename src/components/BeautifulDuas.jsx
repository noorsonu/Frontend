import React, { useState, useEffect } from 'react';

const BeautifulDuas = () => {
  const [currentDua, setCurrentDua] = useState(0);

  const duaList = [
    "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",
    "رَبِّ اشْرَحْ لِي صَدْرِي",
    "رَبَّنَا لَا تُزِغْ قُلُوبَنَا",
    "رَبِّ زِدْنِي عِلْمًا",
    "رَبَّنَا تَقَبَّلْ مِنَّا"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDua(prev => (prev + 1) % duaList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 sm:p-4">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-lg border-2 border-blue-400/50 flex items-center justify-center">
          <div className="text-center px-1">
            <p className="text-white text-xs sm:text-sm font-medium transition-all duration-500 leading-tight">
              {duaList[currentDua]}
            </p>
          </div>
        </div>
        <h3 className="text-white font-medium mt-2 text-xs sm:text-sm text-center">Beautiful Duas</h3>
      </div>
    </div>
  );
};

export default BeautifulDuas;