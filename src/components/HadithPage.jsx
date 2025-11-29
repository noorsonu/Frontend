import React, { useState } from 'react';

const HadithPage = () => {
  const [selectedCollection, setSelectedCollection] = useState('bukhari');
  const [selectedCategory, setSelectedCategory] = useState('faith');

  const collections = [
    { id: 'bukhari', name: 'Sahih al-Bukhari', arabic: 'صحيح البخاري', hadiths: 7563 },
    { id: 'muslim', name: 'Sahih Muslim', arabic: 'صحيح مسلم', hadiths: 7470 },
    { id: 'abudawud', name: 'Sunan Abu Dawud', arabic: 'سنن أبي داود', hadiths: 5274 },
    { id: 'tirmidhi', name: 'Jami at-Tirmidhi', arabic: 'جامع الترمذي', hadiths: 3956 },
    { id: 'nasai', name: 'Sunan an-Nasai', arabic: 'سنن النسائي', hadiths: 5761 },
    { id: 'ibnmajah', name: 'Sunan Ibn Majah', arabic: 'سنن ابن ماجه', hadiths: 4341 }
  ];

  const categories = [
    { id: 'faith', name: 'Faith (Iman)', arabic: 'الإيمان' },
    { id: 'prayer', name: 'Prayer (Salah)', arabic: 'الصلاة' },
    { id: 'charity', name: 'Charity (Zakat)', arabic: 'الزكاة' },
    { id: 'fasting', name: 'Fasting (Sawm)', arabic: 'الصوم' },
    { id: 'hajj', name: 'Pilgrimage (Hajj)', arabic: 'الحج' },
    { id: 'manners', name: 'Good Manners', arabic: 'الآداب' },
    { id: 'knowledge', name: 'Knowledge', arabic: 'العلم' },
    { id: 'marriage', name: 'Marriage', arabic: 'النكاح' }
  ];

  const sampleHadiths = {
    faith: [
      {
        number: 1,
        arabic: "عن عمر بن الخطاب رضي الله عنه قال: سمعت رسول الله صلى الله عليه وسلم يقول: إنما الأعمال بالنيات",
        english: "On the authority of Umar ibn al-Khattab (ra), who said: I heard the Messenger of Allah (ﷺ) say: 'Actions are but by intention...'",
        narrator: "Umar ibn al-Khattab (RA)",
        reference: "Sahih al-Bukhari 1",
        grade: "Sahih (Authentic)"
      },
      {
        number: 2,
        arabic: "عن عبد الله بن عمر رضي الله عنهما أن رسول الله صلى الله عليه وسلم قال: بني الإسلام على خمس",
        english: "On the authority of Abdullah ibn Umar (ra), that the Messenger of Allah (ﷺ) said: 'Islam is built upon five pillars...'",
        narrator: "Abdullah ibn Umar (RA)",
        reference: "Sahih al-Bukhari 8",
        grade: "Sahih (Authentic)"
      }
    ],
    prayer: [
      {
        number: 3,
        arabic: "عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: الصلاة خير موضوع",
        english: "On the authority of Abu Huraira (ra), that the Messenger of Allah (ﷺ) said: 'Prayer is the best thing that has been established...'",
        narrator: "Abu Huraira (RA)",
        reference: "Sahih al-Bukhari 528",
        grade: "Sahih (Authentic)"
      }
    ]
  };

  const currentHadiths = sampleHadiths[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hadith Collection</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Authentic sayings and traditions of Prophet Muhammad (ﷺ)</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Collections */}
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-green-500 mr-2">📚</span>
                Collections
              </h2>
              <div className="space-y-2">
                {collections.map((collection) => (
                  <button
                    key={collection.id}
                    onClick={() => setSelectedCollection(collection.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer ${
                      selectedCollection === collection.id
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <div className="font-semibold text-sm">{collection.name}</div>
                    <div className="text-xs opacity-75" dir="rtl">{collection.arabic}</div>
                    <div className="text-xs opacity-75">{collection.hadiths} hadiths</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-2">📋</span>
                Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <div className="font-semibold text-sm">{category.name}</div>
                    <div className="text-xs opacity-75" dir="rtl">{category.arabic}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Header */}
              <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {collections.find(c => c.id === selectedCollection)?.name}
                  </h2>
                  <p className="text-2xl text-gray-300 mb-4" dir="rtl">
                    {collections.find(c => c.id === selectedCollection)?.arabic}
                  </p>
                  <div className="flex justify-center space-x-6 text-sm text-gray-400">
                    <span>Category: {categories.find(c => c.id === selectedCategory)?.name}</span>
                    <span>{collections.find(c => c.id === selectedCollection)?.hadiths} Total Hadiths</span>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-4 border border-gray-600/30">
                <div className="flex items-center space-x-4">
                  <span className="text-white font-semibold">🔍</span>
                  <input
                    type="text"
                    placeholder="Search hadiths by keyword, narrator, or topic..."
                    className="flex-1 bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-2 text-white placeholder-gray-400"
                  />
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all cursor-pointer">
                    Search
                  </button>
                </div>
              </div>

              {/* Hadiths */}
              <div className="space-y-6">
                {currentHadiths.map((hadith) => (
                  <div key={hadith.number} className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
                    <div className="space-y-6">
                      {/* Hadith Number and Grade */}
                      <div className="flex justify-between items-center">
                        <div className="bg-green-600 text-white rounded-full px-4 py-2 text-sm font-bold">
                          Hadith #{hadith.number}
                        </div>
                        <div className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold">
                          {hadith.grade}
                        </div>
                      </div>

                      {/* Arabic Text */}
                      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-600/30">
                        <p className="text-2xl md:text-3xl text-white leading-relaxed font-arabic text-right" dir="rtl">
                          {hadith.arabic}
                        </p>
                      </div>

                      {/* English Translation */}
                      <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {hadith.english}
                        </p>
                      </div>

                      {/* Hadith Details */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-600/30">
                          <h4 className="font-semibold text-purple-400 mb-2">📝 Narrator</h4>
                          <p className="text-gray-300">{hadith.narrator}</p>
                        </div>
                        <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-600/30">
                          <h4 className="font-semibold text-yellow-400 mb-2">📖 Reference</h4>
                          <p className="text-gray-300">{hadith.reference}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex justify-between items-center pt-4 border-t border-gray-600/30">
                        <div className="flex space-x-4">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer">
                            🔖 Bookmark
                          </button>
                          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer">
                            📤 Share
                          </button>
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer">
                          📚 View Commentary
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all cursor-pointer">
                  Load More Hadiths
                </button>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-4 border border-yellow-600/30 text-center">
                  <span className="text-2xl mb-2 block">🔍</span>
                  <h3 className="font-semibold text-white mb-1">Advanced Search</h3>
                  <p className="text-gray-400 text-sm">Search by keywords</p>
                </div>
                <div className="bg-purple-900/20 backdrop-blur-md rounded-xl p-4 border border-purple-600/30 text-center">
                  <span className="text-2xl mb-2 block">🔖</span>
                  <h3 className="font-semibold text-white mb-1">Bookmarks</h3>
                  <p className="text-gray-400 text-sm">Save favorite hadiths</p>
                </div>
                <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-4 border border-blue-600/30 text-center">
                  <span className="text-2xl mb-2 block">📚</span>
                  <h3 className="font-semibold text-white mb-1">Commentary</h3>
                  <p className="text-gray-400 text-sm">Scholarly explanations</p>
                </div>
                <div className="bg-green-900/20 backdrop-blur-md rounded-xl p-4 border border-green-600/30 text-center">
                  <span className="text-2xl mb-2 block">📱</span>
                  <h3 className="font-semibold text-white mb-1">Daily Hadith</h3>
                  <p className="text-gray-400 text-sm">Get daily notifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HadithPage;