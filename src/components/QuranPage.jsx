import React, { useState } from 'react';

const QuranPage = () => {
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [selectedTranslation, setSelectedTranslation] = useState('english');

  // Sample Surahs (first few for demonstration)
  const surahs = [
    { number: 1, name: "Al-Fatihah", arabicName: "الفاتحة", verses: 7, revelation: "Meccan" },
    { number: 2, name: "Al-Baqarah", arabicName: "البقرة", verses: 286, revelation: "Medinan" },
    { number: 3, name: "Ali 'Imran", arabicName: "آل عمران", verses: 200, revelation: "Medinan" },
    { number: 4, name: "An-Nisa", arabicName: "النساء", verses: 176, revelation: "Medinan" },
    { number: 5, name: "Al-Ma'idah", arabicName: "المائدة", verses: 120, revelation: "Medinan" }
  ];

  // Sample verses for Al-Fatihah
  const verses = {
    1: [
      {
        number: 1,
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        english: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        urdu: "اللہ کے نام سے جو بہت مہربان، نہایت رحم والا ہے۔"
      },
      {
        number: 2,
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        english: "[All] praise is [due] to Allah, Lord of the worlds -",
        urdu: "تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا پالنے والا ہے۔"
      },
      {
        number: 3,
        arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
        english: "The Entirely Merciful, the Especially Merciful,",
        urdu: "بہت مہربان، نہایت رحم والا۔"
      },
      {
        number: 4,
        arabic: "مَالِكِ يَوْمِ الدِّينِ",
        english: "Sovereign of the Day of Recompense.",
        urdu: "انصاف کے دن کا مالک۔"
      },
      {
        number: 5,
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        english: "It is You we worship and You we ask for help.",
        urdu: "ہم تیری ہی عبادت کرتے ہیں اور تجھی سے مدد مانگتے ہیں۔"
      },
      {
        number: 6,
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        english: "Guide us to the straight path -",
        urdu: "ہمیں سیدھا راستہ دکھا۔"
      },
      {
        number: 7,
        arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        english: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
        urdu: "ان لوگوں کا راستہ جن پر تو نے انعام کیا، نہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا۔"
      }
    ]
  };

  const translations = [
    { code: 'english', name: 'English' },
    { code: 'urdu', name: 'اردو' }
  ];

  const currentVerses = verses[selectedSurah] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Holy Quran</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Read the Quran with translations</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Surah List */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30 sticky top-4">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-green-500 mr-2">📖</span>
                Surahs
              </h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {surahs.map((surah) => (
                  <button
                    key={surah.number}
                    onClick={() => setSelectedSurah(surah.number)}
                    className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer ${
                      selectedSurah === surah.number
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{surah.number}. {surah.name}</div>
                        <div className="text-sm opacity-75" dir="rtl">{surah.arabicName}</div>
                      </div>
                      <div className="text-xs opacity-75">
                        {surah.verses} verses
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Surah Header */}
              <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Surah {surahs.find(s => s.number === selectedSurah)?.name}
                  </h2>
                  <p className="text-2xl text-gray-300 mb-4" dir="rtl">
                    {surahs.find(s => s.number === selectedSurah)?.arabicName}
                  </p>
                  <div className="flex justify-center space-x-6 text-sm text-gray-400">
                    <span>Surah {selectedSurah}</span>
                    <span>{surahs.find(s => s.number === selectedSurah)?.verses} Verses</span>
                    <span>{surahs.find(s => s.number === selectedSurah)?.revelation}</span>
                  </div>
                </div>
              </div>

              {/* Translation Selector */}
              <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-4 border border-gray-600/30">
                <div className="flex items-center space-x-4">
                  <span className="text-white font-semibold">Translation:</span>
                  <select
                    value={selectedTranslation}
                    onChange={(e) => setSelectedTranslation(e.target.value)}
                    className="bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-2 text-white cursor-pointer"
                  >
                    {translations.map((trans) => (
                      <option key={trans.code} value={trans.code}>
                        {trans.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Bismillah */}
              {selectedSurah !== 1 && (
                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-md rounded-xl p-6 border border-green-600/30 text-center">
                  <p className="text-2xl text-white mb-2" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </p>
                  <p className="text-gray-300 text-sm">
                    In the name of Allah, the Entirely Merciful, the Especially Merciful.
                  </p>
                </div>
              )}

              {/* Verses */}
              <div className="space-y-6">
                {currentVerses.map((verse) => (
                  <div key={verse.number} className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {verse.number}
                      </div>
                      <div className="flex-1 space-y-4">
                        {/* Arabic Text */}
                        <div className="text-right">
                          <p className="text-2xl md:text-3xl text-white leading-relaxed font-arabic" dir="rtl">
                            {verse.arabic}
                          </p>
                        </div>
                        
                        {/* Translation */}
                        <div className="border-t border-gray-600/30 pt-4">
                          <p className="text-gray-300 leading-relaxed text-lg">
                            {selectedTranslation === 'english' ? verse.english : verse.urdu}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center bg-gray-800/60 backdrop-blur-md rounded-xl p-4 border border-gray-600/30">
                <button
                  onClick={() => setSelectedSurah(Math.max(1, selectedSurah - 1))}
                  disabled={selectedSurah === 1}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-all cursor-pointer"
                >
                  ← Previous Surah
                </button>
                <span className="text-gray-300">
                  Surah {selectedSurah} of 114
                </span>
                <button
                  onClick={() => setSelectedSurah(Math.min(114, selectedSurah + 1))}
                  disabled={selectedSurah === 5} // Limited to 5 for demo
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-all cursor-pointer"
                >
                  Next Surah →
                </button>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-4 border border-yellow-600/30 text-center">
                  <span className="text-2xl mb-2 block">🔍</span>
                  <h3 className="font-semibold text-white mb-1">Search</h3>
                  <p className="text-gray-400 text-sm">Search verses and topics</p>
                </div>
                <div className="bg-purple-900/20 backdrop-blur-md rounded-xl p-4 border border-purple-600/30 text-center">
                  <span className="text-2xl mb-2 block">🔖</span>
                  <h3 className="font-semibold text-white mb-1">Bookmarks</h3>
                  <p className="text-gray-400 text-sm">Save favorite verses</p>
                </div>
                <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-4 border border-blue-600/30 text-center">
                  <span className="text-2xl mb-2 block">🎧</span>
                  <h3 className="font-semibold text-white mb-1">Audio</h3>
                  <p className="text-gray-400 text-sm">Listen to recitation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranPage;