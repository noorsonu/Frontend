import React, { useState, useEffect } from 'react';

const IslamicFeatures = () => {
  const [currentDhikr, setCurrentDhikr] = useState(0);
  const [currentDua, setCurrentDua] = useState(0);
  const [currentName, setCurrentName] = useState(0);

  const dhikrList = [
    "سُبْحَانَ اللَّهِ",
    "الْحَمْدُ لِلَّهِ", 
    "اللَّهُ أَكْبَرُ",
    "لَا إِلَٰهَ إِلَّا اللَّهُ",
    "أَسْتَغْفِرُ اللَّهَ"
  ];

  const duaList = [
    "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",
    "رَبِّ اشْرَحْ لِي صَدْرِي",
    "رَبَّنَا لَا تُزِغْ قُلُوبَنَا",
    "رَبِّ زِدْنِي عِلْمًا",
    "رَبَّنَا تَقَبَّلْ مِنَّا"
  ];

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
    const dhikrInterval = setInterval(() => {
      setCurrentDhikr(prev => (prev + 1) % dhikrList.length);
    }, 3000);

    const duaInterval = setInterval(() => {
      setCurrentDua(prev => (prev + 1) % duaList.length);
    }, 4000);

    const nameInterval = setInterval(() => {
      setCurrentName(prev => (prev + 1) % asmaUlHusna.length);
    }, 2500);

    return () => {
      clearInterval(dhikrInterval);
      clearInterval(duaInterval);
      clearInterval(nameInterval);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-4 sm:py-6 px-2 sm:px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Dhikr Circle */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-green-600 to-green-800 rounded-full shadow-2xl border-4 border-green-400 flex items-center justify-center">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-700 to-green-900 opacity-50"></div>
            <div className="text-center z-10">
              <p className="text-white text-lg sm:text-xl font-bold mb-1 transition-all duration-500">
                {dhikrList[currentDhikr]}
              </p>
            </div>
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-spin" style={{animationDuration: '10s'}}></div>
          </div>
          <h3 className="text-white font-semibold mt-3 text-sm sm:text-base">Daily Dhikr</h3>
        </div>

        {/* Dua Circle */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-2xl border-4 border-blue-400 flex items-center justify-center">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 opacity-50"></div>
            <div className="text-center z-10 px-2">
              <p className="text-white text-sm sm:text-base font-bold transition-all duration-500">
                {duaList[currentDua]}
              </p>
            </div>
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-pulse"></div>
          </div>
          <h3 className="text-white font-semibold mt-3 text-sm sm:text-base">Beautiful Duas</h3>
        </div>

        {/* Asma Ul Husna Circle */}
        <div className="flex flex-col items-center md:col-span-1 col-span-1 mx-auto">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full shadow-2xl border-4 border-purple-400 flex items-center justify-center">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 opacity-50"></div>
            <div className="text-center z-10">
              <p className="text-white text-xl sm:text-2xl font-bold mb-1 transition-all duration-500">
                {asmaUlHusna[currentName]}
              </p>
            </div>
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-300" style={{
              animation: 'spin 8s linear infinite reverse'
            }}></div>
          </div>
          <h3 className="text-white font-semibold mt-3 text-sm sm:text-base">99 Names of Allah</h3>
        </div>

      </div>
    </div>
  );
};

export default IslamicFeatures;