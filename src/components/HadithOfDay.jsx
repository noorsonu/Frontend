import React, { useState, useEffect } from 'react';

const HadithOfDay = () => {
  const [currentHadith, setCurrentHadith] = useState(0);

  const hadiths = [
    {
      arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",
      english: "Actions are but by intention",
      narrator: "Bukhari & Muslim",
      reference: "Hadith 1"
    },
    {
      arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
      english: "A Muslim is one from whose tongue and hand Muslims are safe",
      narrator: "Bukhari & Muslim", 
      reference: "Hadith 10"
    },
    {
      arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
      english: "None of you believes until he loves for his brother what he loves for himself",
      narrator: "Bukhari & Muslim",
      reference: "Hadith 13"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHadith(prev => (prev + 1) % hadiths.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const hadith = hadiths[currentHadith];

  return (
    <div className="bg-gradient-to-br from-yellow-900/50 to-amber-800/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-yellow-600/30 hover:border-yellow-500/50 transition-all duration-300">
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 text-center flex items-center justify-center gap-2">
        <span className="text-xl sm:text-2xl">📜</span>
        <span>Hadith of the Day</span>
      </h3>
      
      <div className="space-y-4">
        {/* Arabic Text */}
        <div className="text-center p-3 sm:p-4 bg-yellow-800/30 rounded-lg border border-yellow-700/20">
          <p className="text-base sm:text-lg text-yellow-100 mb-3 leading-relaxed font-arabic" dir="rtl">
            {hadith.arabic}
          </p>
          <p className="text-yellow-200 text-sm sm:text-base italic leading-relaxed">
            "{hadith.english}"
          </p>
        </div>
        
        {/* Reference */}
        <div className="text-center">
          <p className="text-yellow-300 text-xs sm:text-sm font-medium bg-yellow-900/20 px-3 py-2 rounded-lg">
            <span className="font-semibold">{hadith.narrator}</span> - {hadith.reference}
          </p>
        </div>
        
        {/* Features */}
        <div className="flex justify-center space-x-3 sm:space-x-4 text-xs text-yellow-300">
          <span>📚 Authentic</span>
          <span>🔄 Daily</span>
          <span>⭐ Sahih</span>
        </div>
      </div>
    </div>
  );
};

export default HadithOfDay;