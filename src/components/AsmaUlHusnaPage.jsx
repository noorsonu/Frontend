import React from 'react';

const AsmaUlHusnaPage = () => {
  const asmaUlHusna = [
    { arabic: "الرَّحْمَٰنُ", transliteration: "Ar-Rahman", meaning: "The Most Merciful" },
    { arabic: "الرَّحِيمُ", transliteration: "Ar-Raheem", meaning: "The Most Compassionate" },
    { arabic: "الْمَلِكُ", transliteration: "Al-Malik", meaning: "The King" },
    { arabic: "الْقُدُّوسُ", transliteration: "Al-Quddus", meaning: "The Most Holy" },
    { arabic: "السَّلَامُ", transliteration: "As-Salaam", meaning: "The Source of Peace" },
    { arabic: "الْمُؤْمِنُ", transliteration: "Al-Mu'min", meaning: "The Guardian of Faith" },
    { arabic: "الْمُهَيْمِنُ", transliteration: "Al-Muhaymin", meaning: "The Protector" },
    { arabic: "الْعَزِيزُ", transliteration: "Al-Aziz", meaning: "The Mighty" },
    { arabic: "الْجَبَّارُ", transliteration: "Al-Jabbar", meaning: "The Compeller" },
    { arabic: "الْمُتَكَبِّرُ", transliteration: "Al-Mutakabbir", meaning: "The Supreme" },
    { arabic: "الْخَالِقُ", transliteration: "Al-Khaliq", meaning: "The Creator" },
    { arabic: "الْبَارِئُ", transliteration: "Al-Bari", meaning: "The Maker" },
    { arabic: "الْمُصَوِّرُ", transliteration: "Al-Musawwir", meaning: "The Fashioner" },
    { arabic: "الْغَفَّارُ", transliteration: "Al-Ghaffar", meaning: "The Forgiver" },
    { arabic: "الْقَهَّارُ", transliteration: "Al-Qahhar", meaning: "The Subduer" },
    { arabic: "الْوَهَّابُ", transliteration: "Al-Wahhab", meaning: "The Bestower" },
    { arabic: "الرَّزَّاقُ", transliteration: "Ar-Razzaq", meaning: "The Provider" },
    { arabic: "الْفَتَّاحُ", transliteration: "Al-Fattah", meaning: "The Opener" },
    { arabic: "الْعَلِيمُ", transliteration: "Al-Aleem", meaning: "The All-Knowing" },
    { arabic: "الْقَابِضُ", transliteration: "Al-Qabid", meaning: "The Constrictor" },
    { arabic: "الْبَاسِطُ", transliteration: "Al-Basit", meaning: "The Expander" },
    { arabic: "الْخَافِضُ", transliteration: "Al-Khafid", meaning: "The Abaser" },
    { arabic: "الرَّافِعُ", transliteration: "Ar-Rafi", meaning: "The Exalter" },
    { arabic: "الْمُعِزُّ", transliteration: "Al-Mu'izz", meaning: "The Honorer" },
    { arabic: "الْمُذِلُّ", transliteration: "Al-Mudhill", meaning: "The Humiliator" },
    { arabic: "السَّمِيعُ", transliteration: "As-Samee", meaning: "The All-Hearing" },
    { arabic: "الْبَصِيرُ", transliteration: "Al-Baseer", meaning: "The All-Seeing" },
    { arabic: "الْحَكَمُ", transliteration: "Al-Hakam", meaning: "The Judge" },
    { arabic: "الْعَدْلُ", transliteration: "Al-Adl", meaning: "The Just" },
    { arabic: "اللَّطِيفُ", transliteration: "Al-Lateef", meaning: "The Gentle" },
    { arabic: "الْخَبِيرُ", transliteration: "Al-Khabeer", meaning: "The Aware" },
    { arabic: "الْحَلِيمُ", transliteration: "Al-Haleem", meaning: "The Forbearing" },
    { arabic: "الْعَظِيمُ", transliteration: "Al-Azeem", meaning: "The Magnificent" },
    { arabic: "الْغَفُورُ", transliteration: "Al-Ghafoor", meaning: "The Forgiving" },
    { arabic: "الشَّكُورُ", transliteration: "Ash-Shakoor", meaning: "The Appreciative" },
    { arabic: "الْعَلِيُّ", transliteration: "Al-Ali", meaning: "The Most High" },
    { arabic: "الْكَبِيرُ", transliteration: "Al-Kabeer", meaning: "The Most Great" },
    { arabic: "الْحَفِيظُ", transliteration: "Al-Hafeez", meaning: "The Preserver" },
    { arabic: "الْمُقِيتُ", transliteration: "Al-Muqeet", meaning: "The Nourisher" },
    { arabic: "الْحَسِيبُ", transliteration: "Al-Haseeb", meaning: "The Reckoner" },
    { arabic: "الْجَلِيلُ", transliteration: "Al-Jaleel", meaning: "The Majestic" },
    { arabic: "الْكَرِيمُ", transliteration: "Al-Kareem", meaning: "The Generous" },
    { arabic: "الرَّقِيبُ", transliteration: "Ar-Raqeeb", meaning: "The Watchful" },
    { arabic: "الْمُجِيبُ", transliteration: "Al-Mujeeb", meaning: "The Responsive" },
    { arabic: "الْوَاسِعُ", transliteration: "Al-Wasi", meaning: "The All-Encompassing" },
    { arabic: "الْحَكِيمُ", transliteration: "Al-Hakeem", meaning: "The Wise" },
    { arabic: "الْوَدُودُ", transliteration: "Al-Wadood", meaning: "The Loving" },
    { arabic: "الْمَجِيدُ", transliteration: "Al-Majeed", meaning: "The Glorious" },
    { arabic: "الْبَاعِثُ", transliteration: "Al-Ba'ith", meaning: "The Resurrector" },
    { arabic: "الشَّهِيدُ", transliteration: "Ash-Shaheed", meaning: "The Witness" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          Asma ul Husna - 99 Beautiful Names of Allah
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {asmaUlHusna.map((name, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 backdrop-blur-md rounded-xl p-4 border border-purple-500/30 hover:scale-105 transition-all duration-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2 font-arabic" dir="rtl">
                  {name.arabic}
                </div>
                <div className="text-purple-200 font-semibold mb-1">
                  {name.transliteration}
                </div>
                <div className="text-purple-300 text-sm italic">
                  {name.meaning}
                </div>
                <div className="text-purple-400 text-xs mt-2">
                  #{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-br from-gold-600/20 to-yellow-600/20 backdrop-blur-md rounded-xl p-6 border border-yellow-500/30">
            <p className="text-white text-lg mb-2">
              "And to Allah belong the best names, so invoke Him by them."
            </p>
            <p className="text-yellow-300 text-sm">
              - Quran 7:180
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsmaUlHusnaPage;