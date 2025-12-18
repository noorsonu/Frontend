import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Surah = () => {
  const [selectedSurah, setSelectedSurah] = useState(null);
  const navigate = useNavigate();

  const surahs = [
    {
      id: 1,
      title: "Surah Al Kafirun",
      icon: "📖",
      description: "Complete Surah with translation and tafseer in Hindi",
      details: "सूरह काफिरून क़ुरआन मजीद की 109वीं सूरह है। इसमें 6 आयतें हैं और यह मक्की सूरह है। इस सूरह में कुफ्र से अलगाव और तौहीद की बात कही गई है।",
      route: "/surah-kafirun",
      verses: 6,
      type: "मक्की"
    },
    {
      id: 2,
      title: "Surah Qadr",
      icon: "🌙",
      description: "The Night of Power - Laylatul Qadr",
      details: "सूरह क़द्र क़ुरआन मजीद की 97वीं सूरह है। इसमें 5 आयतें हैं और यह मक्की सूरह है। इस सूरह में लैलतुल क़द्र की महानता का वर्णन है।",
      route: "/surah-qadr",
      verses: 5,
      type: "मक्की"
    },
    {
      id: 3,
      title: "Surah Ikhlas",
      icon: "💎",
      description: "The Sincerity - Declaration of Allah's Oneness",
      details: "सूरह इखलास क़ुरआन मजीद की 112वीं सूरह है। इसमें 4 आयतें हैं और यह मक्की सूरह है। इस सूरह में अल्लाह की तौहीद और एकता का वर्णन है।",
      route: "/surah-ikhlas",
      verses: 4,
      type: "मक्की"
    },
    {
      id: 4,
      title: "Surah Maun",
      icon: "🤲",
      description: "The Small Kindnesses - Social Responsibilities",
      details: "सूरह मौन क़ुरआन मजीद की 107वीं सूरह है। इसमें 7 आयतें हैं और यह मक्की सूरह है। इस सूरह में सामाजिक जिम्मेदारियों और यतीमों के हकों का वर्णन है।",
      route: "/surah-maun",
      verses: 7,
      type: "मक्की"
    },
    {
      id: 5,
      title: "Surah Talaq",
      icon: "📜",
      description: "The Divorce - Islamic Family Laws",
      details: "सूरह तलाक क़ुरआन मजीद की 65वीं सूरह है। इसमें 12 आयतें हैं और यह मदनी सूरह है। इस सूरह में तलाक के नियम, इद्दत और पारिवारिक कानूनों का वर्णन है।",
      route: "/surah-talaq",
      verses: 12,
      type: "मदनी"
    },
    {
      id: 6,
      title: "Surah Al-Kahf",
      icon: "🕌",
      description: "The Cave - Friday Special Surah with Hindi Translation",
      details: "सूरह कहफ़ क़ुरआन मजीद की 18वीं सूरह है। जुमाह के दिन इसकी तिलावत करना बहुत अफ़ज़ल है। इससे दो जुमाह के बीच नूर मिलता है।",
      route: "/surah-kahf",
      verses: 110,
      type: "मक्की"
    },
    {
      id: 7,
      title: "Surah Al-Waqiah",
      icon: "⚖️",
      description: "The Inevitable - Complete Hindi Translation with Meaning",
      details: "सूरह अल वाक़िया क़ुरआन मजीद की 56वीं सूरह है। इसमें 96 आयतें हैं और यह मक्की सूरह है। इस सूरह में क़यामत के दिन का वर्णन है।",
      route: "/surah-waqiah",
      verses: 96,
      type: "मक्की"
    }
  ];

  const handleSurahClick = (surah) => {
    if (surah.route) {
      navigate(surah.route);
    } else {
      setSelectedSurah(surah);
    }
  };

  return (
    <div className="relative w-full">
      <Navbar />
      <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-20 sm:pt-24 pb-4 sm:pb-6 lg:pb-8 px-2 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Holy Quran - Surahs
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Read and understand the Quran with translation</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {surahs.map((surah) => (
              <div 
                key={surah.id} 
                onClick={() => handleSurahClick(surah)}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-xl shadow-xl p-4 sm:p-6 border border-gray-600/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer hover:from-gray-700/90 hover:to-gray-800/90"
              >
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-4">{surah.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{surah.title}</h3>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{surah.description}</p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                    <span className="bg-blue-900/30 px-2 py-1 rounded-full">{surah.verses} आयतें</span>
                    <span className="bg-green-900/30 px-2 py-1 rounded-full">{surah.type}</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200">
                    Read Now →
                  </div>
                </div>
              </div>
            ))}
            
            {/* Coming Soon Cards */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl shadow-xl p-4 sm:p-6 border border-gray-600/20 opacity-60">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl mb-4">🔄</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">More Surahs</h3>
                <p className="text-sm text-gray-300 mb-4">Coming Soon...</p>
                <div className="bg-gray-600/50 text-gray-300 px-4 py-2 rounded-lg text-sm">
                  Under Development
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-6 border border-yellow-600/30 text-center">
              <span className="text-3xl mb-4 block">📚</span>
              <h3 className="font-bold text-white mb-2">Complete Translation</h3>
              <p className="text-gray-300 text-sm">Hindi translation with detailed explanation</p>
            </div>
            <div className="bg-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-purple-600/30 text-center">
              <span className="text-3xl mb-4 block">🎯</span>
              <h3 className="font-bold text-white mb-2">Tafseer Included</h3>
              <p className="text-gray-300 text-sm">Verse-by-verse detailed commentary</p>
            </div>
            <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30 text-center">
              <span className="text-3xl mb-4 block">⭐</span>
              <h3 className="font-bold text-white mb-2">Benefits & Hadith</h3>
              <p className="text-gray-300 text-sm">Fazilat and authentic Hadith references</p>
            </div>
          </div>
        </div>

        {/* Modal for surah details */}
        {selectedSurah && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedSurah(null)}>
            <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl p-4 sm:p-6 max-w-md w-full border border-gray-600/30" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{selectedSurah.icon}</span>
                  <h2 className="text-lg sm:text-xl font-bold text-white">{selectedSurah.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedSurah(null)}
                  className="text-gray-400 hover:text-gray-200 text-xl font-bold cursor-pointer"
                >
                  ×
                </button>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">{selectedSurah.description}</p>
              <div className="border-t border-gray-600/30 pt-4">
                <h3 className="font-semibold text-white mb-2">Details:</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{selectedSurah.details}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Surah;