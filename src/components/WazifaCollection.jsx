import React, { useState } from 'react';

const WazifaCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState('protection');

  const categories = [
    { id: 'protection', name: 'Protection & Safety', icon: '🛡️' },
    { id: 'success', name: 'Success & Prosperity', icon: '🌟' },
    { id: 'health', name: 'Health & Healing', icon: '💚' },
    { id: 'marriage', name: 'Marriage & Relationships', icon: '💕' },
    { id: 'forgiveness', name: 'Forgiveness & Repentance', icon: '🤲' },
    { id: 'knowledge', name: 'Knowledge & Wisdom', icon: '📚' }
  ];

  const wazifas = {
    protection: [
      {
        title: 'Ayat al-Kursi for Protection',
        arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
        translation: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.',
        method: 'Recite after every prayer and before sleeping',
        count: '1 time',
        benefits: 'Protection from evil, safety during travel, peace of mind'
      },
      {
        title: 'Surah Al-Falaq & An-Nas',
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        translation: 'Say: I seek refuge in the Lord of daybreak',
        method: 'Recite both surahs together',
        count: '3 times each',
        benefits: 'Protection from black magic, evil eye, and harm'
      }
    ],
    success: [
      {
        title: 'Istighfar for Success',
        arabic: 'أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ',
        translation: 'I seek forgiveness from Allah, there is no god but Him, the Ever-Living, the Sustainer, and I repent to Him',
        method: 'Recite daily after Fajr prayer',
        count: '100 times',
        benefits: 'Opens doors of success, removes obstacles, brings prosperity'
      }
    ],
    health: [
      {
        title: 'Surah Al-Fatihah for Healing',
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        translation: 'All praise is due to Allah, Lord of the worlds',
        method: 'Recite and blow on water, then drink',
        count: '7 times',
        benefits: 'Healing from illness, physical and spiritual wellness'
      }
    ]
  };

  const currentWazifas = wazifas[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Wazifa Collection</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Authentic Islamic supplications for various needs</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30 sticky top-4">
              <h2 className="text-xl font-bold text-white mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer ${
                      selectedCategory === category.id ? 'bg-green-600 text-white' : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{category.icon}</span>
                      <span className="font-semibold text-sm">{category.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Wazifas */}
          <div className="lg:col-span-3 space-y-6">
            {currentWazifas.map((wazifa, index) => (
              <div key={index} className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
                <h2 className="text-2xl font-bold text-white mb-6">{wazifa.title}</h2>
                
                {/* Arabic Text */}
                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-600/30 mb-6">
                  <p className="text-2xl md:text-3xl text-white leading-relaxed font-arabic text-center" dir="rtl">
                    {wazifa.arabic}
                  </p>
                </div>

                {/* Translation */}
                <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 mb-6">
                  <h3 className="font-semibold text-blue-400 mb-2">Translation:</h3>
                  <p className="text-gray-300 leading-relaxed italic">{wazifa.translation}</p>
                </div>

                {/* Method and Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-600/30">
                    <h4 className="font-semibold text-purple-400 mb-2">📋 Method</h4>
                    <p className="text-gray-300 text-sm">{wazifa.method}</p>
                  </div>
                  <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-600/30">
                    <h4 className="font-semibold text-yellow-400 mb-2">🔢 Count</h4>
                    <p className="text-gray-300 text-sm">{wazifa.count}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-600/30">
                  <h4 className="font-semibold text-green-400 mb-2">✨ Benefits</h4>
                  <p className="text-gray-300 text-sm">{wazifa.benefits}</p>
                </div>
              </div>
            ))}

            {/* Important Note */}
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-md rounded-2xl p-8 border border-yellow-600/30">
              <h2 className="text-2xl font-bold text-white mb-4">⚠️ Important Guidelines</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Always be in a state of Wudu (ablution)</li>
                <li>• Face the Qibla direction when possible</li>
                <li>• Recite with sincerity and focus</li>
                <li>• Be consistent in your practice</li>
                <li>• Have complete faith in Allah's wisdom</li>
                <li>• Combine with good deeds and charity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WazifaCollection;