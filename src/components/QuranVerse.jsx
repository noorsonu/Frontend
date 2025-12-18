import React, { useState, useEffect } from 'react';

const QuranVerse = () => {
  const [currentVerse, setCurrentVerse] = useState(0);

  const verses = [
    {
      arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
      translation: "And whoever fears Allah - He will make for him a way out",
      reference: "Surah At-Talaq 65:2"
    },
    {
      arabic: "وَاللَّهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
      translation: "But Allah is the best guardian, and He is the most merciful of the merciful",
      reference: "Surah Yusuf 12:64"
    },
    {
      arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
      translation: "And my success is not but through Allah",
      reference: "Surah Hud 11:88"
    },
    {
      arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
      translation: "Sufficient for us is Allah, and [He is] the best Disposer of affairs",
      reference: "Surah Al-Imran 3:173"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse(prev => (prev + 1) % verses.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const verse = verses[currentVerse];

  return (
    <div className="bg-gradient-to-br from-emerald-900/50 to-teal-800/50 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-emerald-600/30 hover:border-emerald-500/50 transition-all duration-300">
      <h3 className="text-base sm:text-lg font-semibold text-white mb-3 text-center flex items-center justify-center gap-2">
        <span className="text-lg sm:text-xl">📖</span>
        <span>Quran Verse</span>
      </h3>
      
      <div className="text-center space-y-3">
        <div className="p-3 bg-emerald-800/30 rounded-lg border border-emerald-700/20">
          <p className="arabic-text text-emerald-100 mb-2">
            {verse.arabic}
          </p>
          <p className="text-emerald-200 text-xs sm:text-sm italic leading-relaxed">
            "{verse.translation}"
          </p>
        </div>
        
        <p className="text-emerald-300 text-xs font-medium bg-emerald-900/20 px-2 py-1 rounded">
          {verse.reference}
        </p>
        

        

      </div>
    </div>
  );
};

export default QuranVerse;