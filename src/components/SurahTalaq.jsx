import React, { useState } from 'react';

const SurahTalaq = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'परिचय', icon: '📖' },
    { id: 'surah', title: 'सूरह तलाक', icon: '🕌' },
    { id: 'benefits', title: 'फ़ज़ीलत', icon: '⭐' },
    { id: 'hadith', title: 'हदीस', icon: '📚' },
    { id: 'roman', title: 'Roman English', icon: '🔤' }
  ];

  const surahVerses = [
    {
      number: 1,
      arabic: "يَـٰٓأَيُّهَا ٱلنَّبِيُّ إِذَا طَلَّقۡتُمُ ٱلنِّسَآءَ فَطَلِّقُوهُنَّ لِعِدَّتِهِنَّ وَأَحۡصُواْ ٱلۡعِدَّةَۖ وَٱتَّقُواْ ٱللَّهَ رَبَّكُمۡۖ لَا تُخۡرِجُوهُنَّ مِنۢ بُيُوتِهِنَّ وَلَا يَخۡرُجۡنَ إِلَّآ أَن يَأۡتِينَ بِفَٰحِشَةٖ مُّبَيِّنَةٖۚ وَتِلۡكَ حُدُودُ ٱللَّهِۚ وَمَن يَتَعَدَّ حُدُودَ ٱللَّهِ فَقَدۡ ظَلَمَ نَفۡسَهُۥۚ لَا تَدۡرِي لَعَلَّ ٱللَّهَ يُحۡدِثُ بَعۡدَ ذَٰلِكَ أَمۡرٗا",
      roman: "Yaaa ayyuhan nabiyyu izaa tallaqtummun nisaaa'a fatalliqoohunna li'iddatihinna wa ahsul'iddata wattaqul laaha rabbakum",
      translation: "O Prophet, when you (Muslims) divorce women, divorce them for (the commencement of) their waiting period and keep count of the waiting period, and fear ALLAH, your Lord."
    },
    {
      number: 2,
      arabic: "فَإِذَا بَلَغۡنَ أَجَلَهُنَّ فَأَمۡسِكُوهُنَّ بِمَعۡرُوفٍ أَوۡ فَارِقُوهُنَّ بِمَعۡرُوفٖ وَأَشۡهِدُواْ ذَوَيۡ عَدۡلٖ مِّنكُمۡ وَأَقِيمُواْ ٱلشَّهَٰدَةَ لِلَّهِۚ ذَٰلِكُمۡ يُوعَظُ بِهِۦ مَن كَانَ يُؤۡمِنُ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِۚ وَمَن يَتَّقِ ٱللَّهَ يَجۡعَل لَّهُۥ مَخۡرَجٗا",
      roman: "Fa izaa balaghna ajalahunna fa amsikoohunna bim'aroofin aw faariqoohunna bim'aroofinw wa ash-hidoo zawai 'adlim minkum",
      translation: "And when they have (nearly) fulfilled their term, either retain them according to acceptable terms or part with them according to acceptable terms."
    },
    {
      number: 3,
      arabic: "وَيَرۡزُقۡهُ مِنۡ حَيۡثُ لَا يَحۡتَسِبُۚ وَمَن يَتَوَكَّلۡ عَلَى ٱللَّهِ فَهُوَ حَسۡبُهُۥٓۚ إِنَّ ٱللَّهَ بَٰلِغُ أَمۡرِهِۦۚ قَدۡ جَعَلَ ٱللَّهُ لِكُلِّ شَيۡءٖ قَدۡرٗا",
      roman: "Wa yarzuqhu min haisu laa yahtasib; wa mai yatawakkal 'alal laahi fahuwa hasbuh",
      translation: "And will provide for him from where he does not expect. And whoever relies upon ALLAH – then He is sufficient for him."
    },
    {
      number: 4,
      arabic: "وَٱلَّـٰٓـِٔي يَئِسۡنَ مِنَ ٱلۡمَحِيضِ مِن نِّسَآئِكُمۡ إِنِ ٱرۡتَبۡتُمۡ فَعِدَّتُهُنَّ ثَلَٰثَةُ أَشۡهُرٖ وَٱلَّـٰٓـِٔي لَمۡ يَحِضۡنَۚ وَأُوْلَٰتُ ٱلۡأَحۡمَالِ أَجَلُهُنَّ أَن يَضَعۡنَ حَمۡلَهُنَّۚ وَمَن يَتَّقِ ٱللَّهَ يَجۡعَل لَّهُۥ مِنۡ أَمۡرِهِۦ يُسۡرٗا",
      roman: "Wallaaa'ee ya'isna minal maheezi min nisaaa 'ikum inir tabtum fa'iddatuhunna salaasatu ashhurinw",
      translation: "And those who no longer expect menstruation among your women - if you doubt, then their period is three months."
    },
    {
      number: 5,
      arabic: "ذَٰلِكَ أَمۡرُ ٱللَّهِ أَنزَلَهُۥٓ إِلَيۡكُمۡۚ وَمَن يَتَّقِ ٱللَّهَ يُكَفِّرۡ عَنۡهُ سَيِّـَٔاتِهِۦ وَيُعۡظِمۡ لَهُۥٓ أَجۡرًا",
      roman: "Zaalika amrul laahi anzalahoo ilaikum; wa mai-yattaqil laaha yukaffir 'anhu saiyi aatihee",
      translation: "That is the command of ALLAH, which He has sent down to you; and whoever fears ALLAH - He will remove for him his misdeeds."
    }
  ];

  const renderIntroduction = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-green-500 mr-3">🕌</span>
          Surah At Talaq In English
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Surah At Talaq (The Divorce) is Chapter 65 Of the Holy Quran. Which is blessed with commandment of ALLAH Swt. Revealation of the Surah was preceding in Medina Manauwara. Surah At Talaq comprehend into 12 verses and it has 2 ruku'at.
          </p>
        </div>
      </div>

      <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center">
          <span className="text-blue-400 mr-2">📜</span>
          Surah At Talaq In English
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>
            Surah At Talaq titled in English means "The Divorce". In the first seven verses ALLAH SWT disclose the topic of divorce and it's rulings. Specifically the prescribed period of iddah after divorce. Before leaving the house of the husband, women should wait to finished the periods called "iddah" at husband's house as ordered in the Quran. After that she is free to marry another man. Hence, this is the designation of the Surah Al Talaq.
          </p>
          <p>
            The second part of talaq surah comprehend with the future of the people who disobeyed the command and guidance of ALLAH SWT. As the result of their disobedient they will taste the punishment.
          </p>
          <p>
            Surah also talks about the people who obeying the order of ALLAH SWT and the true followers of the Prophet Muhammad, peace be upon him (ﷺ). They are the believers. So the believers, the obedient who do goods deeds and follow the commands of ALLAH SWT and his Messenger (ﷺ) peace be upon him, will enter paradise hereafter.
          </p>
        </div>
      </div>
    </div>
  );

  const renderSurah = () => (
    <div className="space-y-6">
      {/* Bismillah */}
      <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-md rounded-xl p-6 border border-green-600/30 text-center">
        <p className="text-sm text-gray-400 mb-2 font-arabic">أَعُوْذُ بِاللّٰهِ مِنَ الشَّيْطٰانِ الرَّجِيْمِ</p>
        <p className="text-2xl text-white mb-4 font-quran" dir="rtl">
          بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
        </p>
        <p className="text-gray-300 text-sm mb-2">
          "Aa'oozoobillahi Minash-shaitaanir Rajeem, Bismillaahir Rahmaanir Raheem."
        </p>
        <p className="text-gray-400 text-sm">
          "I seek refuge in Allah from the Shaitan, the accursed. In The Name Of Allah, Most Gracious, Most Most Merciful."
        </p>
      </div>

      {/* Surah Header */}
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Surah At Talaq In English Translation, Arabic And English Transliteration</h2>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <span>Chapter 65</span>
          <span>12 Verses</span>
          <span>Madani</span>
        </div>
      </div>

      {/* Verses */}
      <div className="space-y-4">
        {surahVerses.map((verse) => (
          <div key={verse.number} className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {verse.number}
              </div>
              <div className="flex-1 space-y-4">
                {/* Arabic Text */}
                <div className="text-right">
                  <p className="text-xl md:text-2xl text-white font-quran" dir="rtl">
                    ﴿{verse.number}﴾ {verse.arabic}
                  </p>
                </div>
                
                {/* Roman Transliteration */}
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-yellow-300 text-lg font-semibold">
                    {verse.number}. {verse.roman}
                  </p>
                </div>
                
                {/* English Translation */}
                <div className="border-t border-gray-600/30 pt-4">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {verse.number}. {verse.translation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Note for remaining verses */}
        <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30 text-center">
          <p className="text-blue-300 text-lg">
            📖 Complete Surah contains 12 verses with detailed guidance on divorce laws and Allah's mercy
          </p>
        </div>
      </div>
    </div>
  );

  const renderBenefits = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-yellow-500 mr-3">⭐</span>
          Benefits Of The Reading Surah At Talaq
        </h2>
      </div>

      <div className="bg-green-900/20 backdrop-blur-md rounded-xl p-6 border border-green-600/30">
        <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
          <h4 className="text-green-400 font-semibold mb-2">Benefit 1</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Imam Jafar Sadiq R.A. said: Whoever recite Surah At Talaq and Surah At Tahrim in the fardh, it will enter him Jannah and it will protect the reciter by the mercy of ALLAH SWT from the fear of the day of judgment (Akhirah).
          </p>
        </div>
      </div>

      <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <h4 className="text-blue-400 font-semibold mb-2">Benefit 2</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Whoever recites Surah At Talaq it will inspire him or make hidayah for him to do Tawbatan Nasuha (the true sincerely repentance to ALLAH SWT).
          </p>
        </div>
      </div>
    </div>
  );

  const renderHadith = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-purple-500 mr-3">📚</span>
          Some Hadith About Talaq In Islam
        </h2>
      </div>

      {/* Hadith 1 */}
      <div className="bg-green-900/20 backdrop-blur-md rounded-xl p-6 border border-green-600/30">
        <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
          <h4 className="text-green-400 font-semibold mb-2">Hadith</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Narrated Ibn 'Umar: (Divorcing my wife during her menses) was counted as one legal divorce. - Sahih al-Bukhari 5253
          </p>
        </div>
      </div>

      {/* Hadith 2 */}
      <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <h4 className="text-blue-400 font-semibold mb-2">Hadith</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Narrated Aisha: The wife of Rifaa Al-Qurazi came to Allah's Messenger (ﷺ) and said, "O Allah's Messenger (ﷺ)! Rifaa divorced me irrevocably. After him I married Abdur-Rahman bin Az-Zubair Al-Qurazi who proved to be impotent." Allah's Messenger (ﷺ) said to her, "Perhaps you want to return to Rifaa? Nay (you cannot return to Rifaa) until you and Abdur-Rahman consummate your marriage." - Sahih al-Bukhari 5260
          </p>
        </div>
      </div>

      {/* Hadith 3 */}
      <div className="bg-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-purple-600/30">
        <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
          <h4 className="text-purple-400 font-semibold mb-2">Hadith</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Nafi' said: When Ibn 'Umar was asked about person who had given three divorces, he said, "Would that you gave one or two divorces, for the Prophet (ﷺ) ordered me to do so. If you give three divorces then she cannot be lawful for you until she has married another husband (and is divorced by him)." - Sahih al-Bukhari 5264
          </p>
        </div>
      </div>

      {/* Hadith 4 */}
      <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-6 border border-yellow-600/30">
        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <h4 className="text-yellow-400 font-semibold mb-2">Hadith</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Narrated Abu Huraira: The Prophet (ﷺ) said, "Allah has forgiven my followers the evil thoughts that occur to their minds, as long as such thoughts are not put into action or uttered." And Qatada said, "If someone divorces his wife just in his mind, such an unuttered divorce has no effect." - Sahih al-Bukhari 5269
          </p>
        </div>
      </div>

      {/* Hadith 5 */}
      <div className="bg-rose-900/20 backdrop-blur-md rounded-xl p-6 border border-rose-600/30">
        <div className="bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg">
          <h4 className="text-rose-400 font-semibold mb-2">Hadith</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Sayyidna Ibn 'Umar R.A. divorced his wife while she was menstruating. When Sayyidna Umar R.A. mentioned this to the Messenger of ALLAH ﷺ he became very indignant and said: "He must take her back and keep her till she is purified, then has another menstrual cycle and is purified. If it then seems proper for him to pronounce another divorce to her, he may do so when she is pure from the menstrual discharge before having conjugal relations with her, for that is the 'iddah that ALLAH has commanded for the divorce of women." - Sahih Bukhari and Muslim
          </p>
        </div>
      </div>

      {/* Hadith 6 */}
      <div className="bg-teal-900/20 backdrop-blur-md rounded-xl p-6 border border-teal-600/30">
        <div className="bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded-r-lg">
          <h4 className="text-teal-400 font-semibold mb-2">Hadith</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Sayyidna Mua' dh Ibn Jabal R.A. narrates that the Messenger of ALLAH ﷺ said: "ALLAH has created nothing on the face of the earth dearer to Him than emancipation of slaves, and ALLAH has created nothing on the face of earth more hateful to Him than divorce." - Qurtubi
          </p>
        </div>
      </div>

      {/* Hadith Mafhoom */}
      <div className="bg-indigo-900/20 backdrop-blur-md rounded-xl p-6 border border-indigo-600/30">
        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg">
          <h4 className="text-indigo-400 font-semibold mb-2">Hadith's Mafhoom</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Sayyidna 'Ali R.A. has narrated that the Messenger of ALLAH ﷺ said, do not divorce because divorce causes the Throne of the All-Merciful to shudder.
          </p>
        </div>
      </div>

      {/* Final Hadith */}
      <div className="bg-orange-900/20 backdrop-blur-md rounded-xl p-6 border border-orange-600/30">
        <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
          <h4 className="text-orange-400 font-semibold mb-2">Hadith's Mafhoom</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Sayyidna Abu Musa Ash'ari R.A. narrates that the Messenger of ALLAH ﷺ said: "Do not divorce women without their committing the evil act, because ALLAH does not love men who merely wish to experience the taste of sex, nor does He loves women who merely wish to experience the taste of sex." - Qurtubi vide Thalabi
          </p>
        </div>
      </div>
    </div>
  );

  const renderRoman = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-blue-500 mr-3">🔤</span>
          Surah At Talaq Roman English Translation
        </h2>
      </div>

      {/* Bismillah */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-xl p-6 border border-blue-600/30 text-center">
        <p className="text-lg text-white mb-2">
          "Aa'oozoobillahi Minash-shaitaanir Rajeem, Bismillaahir Rahmaanir Raheem."
        </p>
        <p className="text-gray-300 text-sm">
          "I seek refuge in Allah from Satan the accursed, In the name of Allah, the Most Gracious, the Most Merciful."
        </p>
      </div>

      {/* Roman Verses */}
      <div className="space-y-4">
        {surahVerses.map((verse) => (
          <div key={verse.number} className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {verse.number}
              </div>
              <div className="flex-1 space-y-3">
                {/* Arabic */}
                <p className="text-xl text-white" dir="rtl">{verse.arabic}</p>
                
                {/* Roman */}
                <div className="bg-blue-900/20 rounded-lg p-3">
                  <p className="text-blue-300 text-lg font-semibold">
                    {verse.number}. {verse.roman}
                  </p>
                </div>
                
                {/* Translation */}
                <p className="text-gray-300 leading-relaxed">
                  {verse.number}. {verse.translation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction': return renderIntroduction();
      case 'surah': return renderSurah();
      case 'benefits': return renderBenefits();
      case 'hadith': return renderHadith();
      case 'roman': return renderRoman();
      default: return renderIntroduction();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">सूरह तलाक</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Surah At-Talaq - The Divorce</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30 sticky top-4">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-green-500 mr-2">📋</span>
                विषय सूची
              </h2>
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer ${
                      activeSection === section.id
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{section.icon}</span>
                      <span className="font-semibold">{section.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurahTalaq;