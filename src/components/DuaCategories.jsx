import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const DuaCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('daily');

  const categories = [
    { id: 'daily', name: 'Daily Duas', icon: '🌅' },
    { id: 'travel', name: 'Travel Duas', icon: '✈️' },
    { id: 'protection', name: 'Protection Duas', icon: '🛡️' },
    { id: 'forgiveness', name: 'Forgiveness Duas', icon: '🤲' },
    { id: 'health', name: 'Health & Healing', icon: '💚' },
    { id: 'success', name: 'Success & Guidance', icon: '🌟' },
    { id: 'family', name: 'Family & Relationships', icon: '👨👩👧👦' },
    { id: 'gratitude', name: 'Gratitude & Praise', icon: '🙏' }
  ];

  const duas = {
    daily: [
      {
        title: "Morning Dua",
        arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ",
        translation: "We have reached the morning and at this very time unto Allah belongs all sovereignty, and all praise is for Allah",
        method: "Recite upon waking up",
        count: "1 time",
        benefits: "Starts the day with Allah's remembrance and blessings"
      },
      {
        title: "Before Eating",
        arabic: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
        translation: "In the name of Allah and with the blessings of Allah",
        method: "Recite before every meal",
        count: "1 time",
        benefits: "Brings blessings to food and protects from harm"
      },
      {
        title: "After Eating",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
        translation: "All praise is due to Allah who fed me this and provided it for me without any might or power on my part",
        method: "Recite after finishing meals",
        count: "1 time",
        benefits: "Expresses gratitude and brings continued sustenance"
      },
      {
        title: "Before Sleep",
        arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
        translation: "In Your name, O Allah, I die and I live",
        method: "Recite before going to sleep",
        count: "1 time",
        benefits: "Protection during sleep and peaceful rest"
      }
    ],
    travel: [
      {
        title: "Travel Dua",
        arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
        translation: "Exalted is He who has subjected this to us, and we could not have [otherwise] subdued it. And indeed we, to our Lord, will [surely] return",
        method: "Recite when starting journey",
        count: "1 time",
        benefits: "Safe travel and protection during journey"
      },
      {
        title: "Entering Vehicle",
        arabic: "بِسْمِ اللَّهِ وَالْحَمْدُ لِلَّهِ",
        translation: "In the name of Allah, and all praise is for Allah",
        method: "Recite when entering any vehicle",
        count: "1 time",
        benefits: "Safety and blessings during travel"
      }
    ],
    protection: [
      {
        title: "Seeking Protection",
        arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        translation: "I seek refuge in Allah from Satan, the accursed",
        method: "Recite when feeling fear or anxiety",
        count: "3 times",
        benefits: "Protection from evil and negative influences"
      },
      {
        title: "Ayat al-Kursi",
        arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
        translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep",
        method: "Recite after each prayer and before sleep",
        count: "1 time",
        benefits: "Ultimate protection and blessings from Allah"
      }
    ],
    forgiveness: [
      {
        title: "Seeking Forgiveness",
        arabic: "رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي",
        translation: "My Lord, forgive me my sin, my error, and my ignorance",
        method: "Recite during prayer or anytime",
        count: "Multiple times",
        benefits: "Forgiveness of sins and purification of heart"
      },
      {
        title: "Sayyid al-Istighfar",
        arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ",
        translation: "O Allah, You are my Lord, there is no god but You. You created me and I am Your servant",
        method: "Recite morning and evening",
        count: "1 time",
        benefits: "Master supplication for seeking forgiveness"
      }
    ],
    health: [
      {
        title: "For Healing",
        arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ وَاشْفِ أَنْتَ الشَّافِي",
        translation: "O Allah, Lord of mankind, remove the hardship and heal, You are the Healer",
        method: "Recite when sick or for someone ill",
        count: "3 times",
        benefits: "Healing from illness and restoration of health"
      },
      {
        title: "General Health Dua",
        arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي اللَّهُمَّ عَافِنِي فِي سَمْعِي اللَّهُمَّ عَافِنِي فِي بَصَرِي",
        translation: "O Allah, grant me health in my body. O Allah, grant me health in my hearing. O Allah, grant me health in my sight",
        method: "Recite daily after morning prayer",
        count: "1 time",
        benefits: "Maintaining good health and well-being"
      }
    ],
    success: [
      {
        title: "For Guidance",
        arabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ",
        translation: "O Allah, guide me among those You have guided",
        method: "Recite when making important decisions",
        count: "Multiple times",
        benefits: "Divine guidance in all matters"
      },
      {
        title: "For Success",
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translation: "Our Lord, give us good in this world and good in the next world and save us from the punishment of the Fire",
        method: "Recite after prayers",
        count: "Multiple times",
        benefits: "Success in this life and hereafter"
      }
    ],
    family: [
      {
        title: "For Parents",
        arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        translation: "My Lord, forgive me and my parents. My Lord, have mercy upon them as they brought me up when I was small",
        method: "Recite daily for parents",
        count: "Multiple times",
        benefits: "Blessings for parents and family harmony"
      },
      {
        title: "For Righteous Offspring",
        arabic: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
        translation: "My Lord, grant me righteous offspring",
        method: "Recite when desiring children",
        count: "Multiple times",
        benefits: "Blessed and righteous children"
      }
    ],
    gratitude: [
      {
        title: "General Praise",
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        translation: "All praise is due to Allah, Lord of the worlds",
        method: "Recite frequently throughout the day",
        count: "Multiple times",
        benefits: "Increased blessings and gratitude"
      },
      {
        title: "Subhan Allah",
        arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
        translation: "Glory be to Allah and praise Him, Glory be to Allah the Mighty",
        method: "Recite as dhikr",
        count: "33 times after each prayer",
        benefits: "Spiritual purification and closeness to Allah"
      }
    ]
  };

  const currentDuas = duas[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🤲 Dua Collection</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Authentic Islamic supplications for daily life</p>
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

            {/* Duas */}
            <div className="lg:col-span-3 space-y-6">
              {currentDuas.map((dua, index) => (
                <div key={index} className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
                  <h2 className="text-2xl font-bold text-white mb-6">{dua.title}</h2>
                  
                  {/* Arabic Text */}
                  <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-600/30 mb-6">
                    <p className="text-2xl md:text-3xl text-white leading-relaxed font-arabic text-center" dir="rtl">
                      {dua.arabic}
                    </p>
                  </div>

                  {/* Translation */}
                  <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 mb-6">
                    <h3 className="font-semibold text-blue-400 mb-2">Translation:</h3>
                    <p className="text-gray-300 leading-relaxed italic">"{dua.translation}"</p>
                  </div>

                  {/* Method and Details */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-600/30">
                      <h4 className="font-semibold text-purple-400 mb-2">📋 Method</h4>
                      <p className="text-gray-300 text-sm">{dua.method}</p>
                    </div>
                    <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-600/30">
                      <h4 className="font-semibold text-yellow-400 mb-2">🔢 Count</h4>
                      <p className="text-gray-300 text-sm">{dua.count}</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-600/30">
                    <h4 className="font-semibold text-green-400 mb-2">✨ Benefits</h4>
                    <p className="text-gray-300 text-sm">{dua.benefits}</p>
                  </div>
                </div>
              ))}

              {/* Important Note */}
              <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-md rounded-2xl p-8 border border-yellow-600/30">
                <h2 className="text-2xl font-bold text-white mb-4">⚠️ Important Guidelines</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• Always be in a state of Wudu (ablution) when possible</li>
                  <li>• Face the Qibla direction when reciting</li>
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
      <Footer />
    </div>
  );
};

export default DuaCategories;