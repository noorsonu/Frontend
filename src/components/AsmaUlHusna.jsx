import React, { useState, useEffect } from 'react';

const AsmaUlHusna = () => {
  const [currentName, setCurrentName] = useState(0);

  const asmaUlHusna = [
    "الرَّحْمَٰنُ",
    "الرَّحِيمُ",
    "الْمَلِكُ", 
    "الْقُدُّوسُ",
    "السَّلَامُ",
    "الْمُؤْمِنُ",
    "الْمُهَيْمِنُ",
    "الْعَزِيزُ"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentName(prev => (prev + 1) % asmaUlHusna.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 sm:p-4">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full shadow-lg border-2 border-purple-400/50 flex items-center justify-center">
          <div className="text-center px-1">
            <p className="text-white text-xs sm:text-sm font-medium transition-all duration-500 leading-tight">
              {asmaUlHusna[currentName]}
            </p>
          </div>
        </div>
        <h3 className="text-white font-medium mt-2 text-xs sm:text-sm text-center">99 Names</h3>
      </div>
    </div>
  );
};

export default AsmaUlHusna;