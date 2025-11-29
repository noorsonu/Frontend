import React, { useState } from 'react';

const PrayerGuide = () => {
  const [selectedPrayer, setSelectedPrayer] = useState('fajr');

  const prayers = [
    { id: 'fajr', name: 'Fajr', arabic: 'الفجر', rakats: 2, time: 'Before sunrise' },
    { id: 'dhuhr', name: 'Dhuhr', arabic: 'الظهر', rakats: 4, time: 'After midday' },
    { id: 'asr', name: 'Asr', arabic: 'العصر', rakats: 4, time: 'Afternoon' },
    { id: 'maghrib', name: 'Maghrib', arabic: 'المغرب', rakats: 3, time: 'After sunset' },
    { id: 'isha', name: 'Isha', arabic: 'العشاء', rakats: 4, time: 'Night' }
  ];

  const prayerSteps = {
    fajr: [
      { step: 1, title: 'Make Intention (Niyyah)', description: 'Intend to pray Fajr for Allah', icon: '🤲' },
      { step: 2, title: 'Takbir (Allahu Akbar)', description: 'Raise hands and say Allahu Akbar', icon: '🙌' },
      { step: 3, title: 'Recite Al-Fatihah', description: 'Recite the opening chapter', icon: '📖' },
      { step: 4, title: 'Recite Surah', description: 'Recite any chapter from Quran', icon: '📚' },
      { step: 5, title: 'Ruku (Bowing)', description: 'Bow down saying Subhana Rabbiyal Azeem', icon: '🙇‍♂️' },
      { step: 6, title: 'Sujud (Prostration)', description: 'Prostrate saying Subhana Rabbiyal A\'la', icon: '🤲' },
      { step: 7, title: 'Tashahhud', description: 'Sit and recite Tashahhud', icon: '🪑' },
      { step: 8, title: 'Salam', description: 'End prayer with Assalamu Alaikum', icon: '👋' }
    ]
  };

  const duas = [
    { title: 'Opening Dua', arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ', translation: 'Glory be to You, O Allah, and praise be to You' },
    { title: 'Ruku Dua', arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ', translation: 'Glory be to my Lord, the Most Great' },
    { title: 'Sujud Dua', arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى', translation: 'Glory be to my Lord, the Most High' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Prayer Guide</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Learn how to perform Islamic prayers (Salah)</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Prayer Selection */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30 sticky top-4">
              <h2 className="text-xl font-bold text-white mb-4">🕌 Five Daily Prayers</h2>
              <div className="space-y-2">
                {prayers.map((prayer) => (
                  <button
                    key={prayer.id}
                    onClick={() => setSelectedPrayer(prayer.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer ${
                      selectedPrayer === prayer.id ? 'bg-green-600 text-white' : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <div className="font-semibold">{prayer.name}</div>
                    <div className="text-sm opacity-75" dir="rtl">{prayer.arabic}</div>
                    <div className="text-xs opacity-75">{prayer.rakats} Rakats • {prayer.time}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Prayer Steps */}
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
              <h2 className="text-2xl font-bold text-white mb-6">How to Perform {prayers.find(p => p.id === selectedPrayer)?.name} Prayer</h2>
              <div className="grid gap-4">
                {prayerSteps.fajr.map((step, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full text-sm font-bold mr-4 flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xl">{step.icon}</span>
                        <h3 className="font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Essential Duas */}
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
              <h2 className="text-2xl font-bold text-white mb-6">📿 Essential Duas in Prayer</h2>
              <div className="space-y-4">
                {duas.map((dua, index) => (
                  <div key={index} className="p-4 bg-blue-900/20 rounded-lg border border-blue-600/30">
                    <h3 className="font-semibold text-blue-400 mb-2">{dua.title}</h3>
                    <p className="text-white text-xl mb-2 font-arabic" dir="rtl">{dua.arabic}</p>
                    <p className="text-gray-300 text-sm italic">{dua.translation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer Requirements */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
                <h3 className="text-xl font-bold text-white mb-4">✅ Before Prayer</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Perform Wudu (ablution)</li>
                  <li>• Face the Qibla direction</li>
                  <li>• Wear clean clothes</li>
                  <li>• Pray in a clean place</li>
                  <li>• Check prayer time</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
                <h3 className="text-xl font-bold text-white mb-4">🚫 Prayer Invalidators</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Breaking Wudu</li>
                  <li>• Talking during prayer</li>
                  <li>• Eating or drinking</li>
                  <li>• Turning away from Qibla</li>
                  <li>• Excessive movement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerGuide;