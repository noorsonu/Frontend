import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Dua = () => {
  const duaList = [
    {
      id: 1,
      title: "Dua for Guidance",
      arabic: "رَبَّنَا اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: "Our Lord, guide us to the straight path",
      gradient: "from-blue-600/20 to-indigo-600/20",
      border: "border-blue-500/30"
    },
    {
      id: 2,
      title: "Dua for Forgiveness",
      arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا",
      translation: "Our Lord, forgive us our sins and our transgressions in our affairs",
      gradient: "from-green-600/20 to-emerald-600/20",
      border: "border-green-500/30"
    },
    {
      id: 3,
      title: "Dua for Protection",
      arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
      translation: "I seek refuge in Allah from Satan, the accursed",
      gradient: "from-purple-600/20 to-violet-600/20",
      border: "border-purple-500/30"
    },
    {
      id: 4,
      title: "Dua for Knowledge",
      arabic: "رَبِّ زِدْنِي عِلْمًا",
      translation: "My Lord, increase me in knowledge",
      gradient: "from-amber-600/20 to-orange-600/20",
      border: "border-amber-500/30"
    },
    {
      id: 5,
      title: "Dua for Parents",
      arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ",
      translation: "My Lord, forgive me and my parents",
      gradient: "from-rose-600/20 to-pink-600/20",
      border: "border-rose-500/30"
    },
    {
      id: 6,
      title: "Dua for Success",
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
      translation: "Our Lord, give us good in this world and good in the next world",
      gradient: "from-teal-600/20 to-cyan-600/20",
      border: "border-teal-500/30"
    },
    {
      id: 7,
      title: "Dua for Patience",
      arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
      translation: "Our Lord, pour upon us patience and let us die as Muslims",
      gradient: "from-slate-600/20 to-gray-600/20",
      border: "border-slate-500/30"
    },
    {
      id: 8,
      title: "Dua for Health",
      arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي وَعَافِنِي فِي سَمْعِي وَعَافِنِي فِي بَصَرِي",
      translation: "O Allah, grant me health in my body, health in my hearing, and health in my sight",
      gradient: "from-lime-600/20 to-green-600/20",
      border: "border-lime-500/30"
    }
  ];

  return (
    <div className="relative w-full">
      <Navbar />
      <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-20 sm:pt-24 pb-4 sm:pb-6 lg:pb-8 px-2 sm:px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          Islamic Duas
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {duaList.map((dua) => (
            <div key={dua.id} className={`bg-gradient-to-br ${dua.gradient} backdrop-blur-md rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 border ${dua.border} hover:shadow-xl hover:scale-102 transition-all duration-200`}>
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3">{dua.title}</h2>
              
              <div className="mb-2 sm:mb-3">
                <p className="text-lg sm:text-xl lg:text-2xl text-right leading-relaxed text-white font-arabic mb-2" dir="rtl">
                  {dua.arabic}
                </p>
              </div>
              
              <div className="border-t border-white/20 pt-2 sm:pt-3">
                <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed italic">
                  {dua.translation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dua;