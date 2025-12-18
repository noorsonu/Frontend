import React, { useState } from 'react';

const SurahIkhlas = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'परिचय', icon: '📖' },
    { id: 'surah', title: 'सूरह इखलास', icon: '🕌' },
    { id: 'tafseer', title: 'तफसीर', icon: '📚' },
    { id: 'fazilat', title: 'फ़ज़ीलत', icon: '⭐' },
    { id: 'roman', title: 'Roman English', icon: '🔤' }
  ];

  const surahVerses = [
    {
      number: 1,
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      hindi: "क़ुल हुवल्लाहू अहद",
      translation: "आप कह दीजिये कि अल्लाह एक है",
      roman: "Qul huwallahu ahad"
    },
    {
      number: 2,
      arabic: "اللَّهُ الصَّمَدُ",
      hindi: "अल्लाहुस-समद",
      translation: "अल्लाह बेनियाज़ है",
      roman: "Allahus-samad"
    },
    {
      number: 3,
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      hindi: "लम यलिद वलम यू-लद",
      translation: "वो न किसी का बाप है न किसी का बेटा",
      roman: "Lam yalid wa lam yulad"
    },
    {
      number: 4,
      arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
      hindi: "व-लम य-कुंल्लहू कुफु-वन अ-'हद",
      translation: "और न कोई उस के बराबर है",
      roman: "Wa lam yakun lahu kufuwan ahad"
    }
  ];

  const renderIntroduction = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-green-500 mr-3">🕌</span>
          Surah Ikhlas in Hindi | सूरह इख़लास हिंदी में
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            सूरह इखलास (Surah Ikhlas In Hindi+Tafseer+Tarjuma+Hadees) हिंदी में पढ़ते है। जो क़ुरआन पाक की छोटी सूरतों में से एक सूरत है। नबी करीम ﷺ फरमाते है, सूरह इखलास की मुहब्बत जन्नत ले जायेगी। सूरह इखलास को सूरह तौहीद (Surah Tauheed) भी कहते है। इसकी एक-एक आयत तौहीद की तफसीर बयाँ करती है।
          </p>
        </div>
      </div>

      <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center">
          <span className="text-blue-400 mr-2">💎</span>
          Surah Ikhlas Kya Hai | सूरह इखलास क्या है?
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>
            इखलास का मतलब है, खालिस (pure)। जिसमें किसी तरह की कोई मिलावट नही है। जो हर थकावट, कमज़ोरी, मिलावट, गंदगी से पाक है। सूरातुल इखलास ने बता दिया के रब क्या है, और क्या नही?
          </p>
          <p>
            सूरह इखलास ऐसी सूरह है, जिसने अल्लाह त'आला की सिफ़त साफ लफ़्ज़ों में बयाँ करदी है। साफ-साफ बता दिया है, के अल्लाह पाक से कौन पैदा हुआ?, और किसने अल्लाह पाक को पैदा किया?
          </p>
          <p>
            सूरह इखलास के असल माइने जानने और ईमान लाने वाला ही सच्चा ईमान वाला है। इस छोटी सी सूरत ने गवाही दी है, के अल्लाह त'आला इस पूरे क़ायनात का अकेला मालिक है। इसलिए इस सूरह को रोज़ाना मुहब्बत से पढ़ने वालों पर जन्नत वाजिब कर दी गयी है। सुभान अल्लाह
          </p>
        </div>
      </div>
    </div>
  );

  const renderSurah = () => (
    <div className="space-y-6">
      {/* Bismillah */}
      <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-md rounded-xl p-6 border border-green-600/30 text-center">
        <p className="text-sm text-gray-400 mb-2 font-arabic">أعُوْذُ بِاللّٰهِ مِنَ الشَّيْطٰانِ الرَّجِيْمِ</p>
        <p className="text-2xl text-white mb-4 font-quran" dir="rtl">
          بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
        </p>
        <p className="text-gray-300 text-sm mb-2">
          "अ 'ऊजु बिल्लाहि मिनश शैतानिर रजीम, बिस्मिल्ला-हिर्रहमा-निर्रहीम"
        </p>
        <p className="text-gray-400 text-sm">
          "मैं अल्लाह त'आला की पनाह में आता हूँ शैतान ने मरदूद से, अल्लाह के नाम से शुरू जो निहायत मेहरबान व रहम वाला है।"
        </p>
      </div>

      {/* Surah Header */}
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">सूरह इखलास अरबी और हिंदी तर्जुमा में</h2>
        <p className="text-xl text-gray-300 mb-4">(سورة- الْإِخْلَاص)</p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <span>सूरह 112</span>
          <span>4 आयतें</span>
          <span>मक्की</span>
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
                  <p className="text-2xl md:text-3xl text-white font-quran" dir="rtl">
                    ﴿{verse.number}﴾ {verse.arabic}
                  </p>
                </div>
                
                {/* Hindi Pronunciation */}
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-yellow-300 text-lg font-semibold">
                    {verse.number}. {verse.hindi}
                  </p>
                </div>
                
                {/* Translation */}
                <div className="border-t border-gray-600/30 pt-4">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {verse.number}. {verse.translation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTafseer = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-purple-500 mr-3">📚</span>
          Surah Ikhlas Ki Tafseer in Hindi | सूरह इख़लास की तफसीर हिंदी में
        </h2>
      </div>

      {/* Verse 1 Tafseer */}
      <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
        <div className="text-right mb-4">
          <p className="text-2xl text-white font-quran" dir="rtl">﴿١﴾ قُلْ هُوَ اللَّهُ أَحَدٌ</p>
        </div>
        <div className="space-y-3">
          <p className="text-yellow-300 text-lg font-semibold">1. क़ुल हुवल्लाहू अहद</p>
          <p className="text-gray-300 text-lg">1. आप कह दीजिये कि अल्लाह एक है</p>
          <div className="bg-blue-900/30 rounded-lg p-4 mt-4">
            <h4 className="text-blue-400 font-semibold mb-2">पहली आयत की तफ़्सीर:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              पहली आयत में अल्लाह पाक नबी करीम ﷺ से फरमाते हुए, तमाम इंसानों को अपने एक और तन्हा होने की दलील दे रहे है। इस आयत से मालूम होता है के अल्लाह पाक एक है। ना कोई अल्लाह त'आला के आगे है, और ना कोई पीछे है। अल्लाह त'आला किसी के मशवरे का मोहताज नही है। वो एक ही है जो हर चीज़ का फैसला करता है। वो तन्हा है, अकेला है।
            </p>
          </div>
        </div>
      </div>

      {/* Verse 2 Tafseer */}
      <div className="bg-green-900/20 backdrop-blur-md rounded-xl p-6 border border-green-600/30">
        <div className="text-right mb-4">
          <p className="text-2xl text-white font-quran" dir="rtl">﴿٢﴾ اللَّهُ الصَّمَدُ</p>
        </div>
        <div className="space-y-3">
          <p className="text-yellow-300 text-lg font-semibold">2. अल्लाहुस-समद</p>
          <p className="text-gray-300 text-lg">2. अल्लाह बेनियाज़ है</p>
          <div className="bg-green-900/30 rounded-lg p-4 mt-4">
            <h4 className="text-green-400 font-semibold mb-2">दूसरी आयत की तफ़्सीर:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              दूसरी आयत में अल्लाह पाक फरमाते है के अल्लाह त'आला बेनियाज़ है। बेनियाज़ का मतलब जो हर फायदे नुकसान से पाक है। अल्लाह त'आला को किसी चीज़ का खौफ नही। वो जब, जो चाहे वो कर देता है। यानी अल्लाह त'आला को किसी चीज़ की ज़रूरत नही है और ना ही होगी।
            </p>
          </div>
        </div>
      </div>

      {/* Verse 3 Tafseer */}
      <div className="bg-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-purple-600/30">
        <div className="text-right mb-4">
          <p className="text-2xl text-white font-quran" dir="rtl">﴿٣﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ</p>
        </div>
        <div className="space-y-3">
          <p className="text-yellow-300 text-lg font-semibold">3. लम यलिद वलम यू-लद</p>
          <p className="text-gray-300 text-lg">3. वो न किसी का बाप है न किसी का बेटा</p>
          <div className="bg-purple-900/30 rounded-lg p-4 mt-4">
            <h4 className="text-purple-400 font-semibold mb-2">तीसरी आयत की तफ़्सीर:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              अल्लाह त'आला अपनी वो सिफ़त बयाँ कर रहे है। जिस बात का वस्वसा शैतान ज़्यादातर इंसानो के दिलों में डालता है। अल्लाह त'आला फरमाते है ना अल्लाह त'आला किसी का बाप है और उसका कोई बेटा। यानी अल्लाह पाक ऐसी ज़ात है, जिसका ना कोई बाप है और न बेटा। वो सारे रिश्तों से पाक है, और हमारा मालिक है।
            </p>
          </div>
        </div>
      </div>

      {/* Verse 4 Tafseer */}
      <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-6 border border-yellow-600/30">
        <div className="text-right mb-4">
          <p className="text-2xl text-white font-quran" dir="rtl">﴿٤﴾ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ</p>
        </div>
        <div className="space-y-3">
          <p className="text-yellow-300 text-lg font-semibold">4. व-लम य-कुंल्लहू कुफु-वन अ-'हद</p>
          <p className="text-gray-300 text-lg">4. और न कोई उस के बराबर है</p>
          <div className="bg-yellow-900/30 rounded-lg p-4 mt-4">
            <h4 className="text-yellow-400 font-semibold mb-2">चौथी आयत की तफ़्सीर:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              आखरी आयत में अल्लाह त'अल्लाह ने इस बात को भी साफ कर दिया के अल्लाह करीम के बराबर कोई नही है। वो सब से बड़ा है।
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFazilat = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-yellow-500 mr-3">⭐</span>
          Surah Ikhlaas Ki Fazilat Aur Hadees Hindi Mein | सूरह इखलास की फ़ज़ीलत और हदीस हिंदी में
        </h2>
      </div>

      {/* Hadith 1 */}
      <div className="bg-green-900/20 backdrop-blur-md rounded-xl p-6 border border-green-600/30">
        <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
          <h4 className="text-green-400 font-semibold mb-2">हदीस</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            हज़रत अबू हरैराह र.अ. से रिवायत है के, रसूल अल्लाह ﷺ ने फजर की दो रक'अतों में सूरह अल-काफिरून और अल-इख़लास पढ़ी। - सहीह मुस्लिम
          </p>
        </div>
      </div>

      {/* Hadith 2 */}
      <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <h4 className="text-blue-400 font-semibold mb-2">हदीस</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            इब्न अब्बास र.अ. से रिवायत है के, रसूल अल्लाह ﷺ ने फरमाया: "इधा ज़ुलज़िलात क़ुरआन के आधे हिस्से के बराबर है, सूरह अल-इखलास तिहाई क़ुरआन के बराबर है और अल-काफिरून चौथाई क़ुरआन के बराबर है।" - जमी'अ अत-तिर्मिज़ी न. 2894
          </p>
        </div>
      </div>

      {/* Hadith 3 */}
      <div className="bg-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-purple-600/30">
        <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
          <h4 className="text-purple-400 font-semibold mb-2">हदीस</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            'आईशा र.अ. ने बयाँ किया के, "नबी करीम ﷺ जब भी रात को सोने के लिए जाते अपने दोनो हाथ मल कर उसपर सूरह अल-इखलास, सूरह अल-फ़लक़ और सूरह अन-नास पढ़ कर फूंक मारते फिर अपने जिस्म के जिस हिस्से पर भी हाथ फेरते, अपने सर, चेहरे और जिस्म के सामने से शुरू करते हुए रगड़ने के क़ाबिल वो तीन बार ऐसा करते थे।" - सहीह अल-बुखारी, न. 5017
          </p>
        </div>
      </div>

      {/* Hadith 4 */}
      <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-6 border border-yellow-600/30">
        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <h4 className="text-yellow-400 font-semibold mb-2">हदीस</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            अबू स'ईद ख़ुदरी र.अ. रिवायत करते है के, नबी ए करीम ﷺ ने अपने सहाबी से फरमाया के, "क्या तुममें से किसी के लिए एक रात में क़ुरअन पाक का एक तिहाई हिस्सा पढ़ना मुमकिन है? ये अमल उनके (सहाबी) के मुश्किल थी तो उन्होंने (सहाबी) कहा के, या रसूल अल्लाह ﷺ, हममें से कौन ऐसा करने की ताक़त रखता है? रसूल अल्लाह ﷺ ने जवाब दिया: "अल्लाह बे-नियाज़ मालिक जिस की तमाम मखलूकात को ज़रूरत है। (सूरह इखलास) एक तिहाई क़ुरआन के बराबर है।" - सहीह अल बुखारी न. 5015
          </p>
        </div>
      </div>

      {/* Hadith 5 */}
      <div className="bg-rose-900/20 backdrop-blur-md rounded-xl p-6 border border-rose-600/30">
        <div className="bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg">
          <h4 className="text-rose-400 font-semibold mb-2">हदीस</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            अनस र.अ. ने बयान किया के एक आदमी ने अर्ज़ किया: या रसूल अल्लाह ﷺ, मुझे सूरह अल-इखलास से मुहब्बत है। फिर आप ﷺ ने फरमाया: "तुम्हारी इस सूरह से मुहब्बत तुम्हे जन्नत में दाखिल करेगी।" - जमी अत तिर्मिज़ी, रियाज़ अस सालिहीन न. 1013
          </p>
        </div>
      </div>

      {/* Hadith 6 */}
      <div className="bg-teal-900/20 backdrop-blur-md rounded-xl p-6 border border-teal-600/30">
        <div className="bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded-r-lg">
          <h4 className="text-teal-400 font-semibold mb-2">हदीस</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            हज़रत आइशा र.अ. फ़रमाती हैं कि रसूल अल्लाह ﷺ हर रात जब बिस्तर पर आराम के लिये लेटते तो अपनी दोनो हथेलियों को एक साथ करके "क़ुल हु अल्लाहु अहद" (सूरह इखलास), "क़ुल 'अ'ऊज़ु बिरब्बिल फ़लक़" (सूरह फ़लक़) और "क़ुल 'अ'ऊज़ु बि रब्बिलनास" (सूरह नास) पढ़ कर उनपर फूंकते थे और फ़िर दोनो हथेलियों को जहां तक मुमकिन होता अपने जिस्म पर फेरते थे। सर, चेहरा और जिस्म के आगे के हिस्से से शुरू करते। यह अमल आप तीन मरतबा करते थे। - बुख़ारी
          </p>
        </div>
      </div>

      {/* Hadith 7 */}
      <div className="bg-indigo-900/20 backdrop-blur-md rounded-xl p-6 border border-indigo-600/30">
        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg">
          <h4 className="text-indigo-400 font-semibold mb-2">हदीस</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            हज़रत अब्दुल्लाह बिन ख़ुबैब र.अ. से रिवायत है कि एक रात में बारिश और सख़्त अंधेरा था, हम रसूल अल्लाह ﷺ को तलाश करने के लिए निकले। जब हमने आप ﷺ को पा लिया तो आप ﷺ ने फ़रमाया कि कहो। मैंने अर्ज़ किया: क्या कहूं? रसूल अल्लाह ने फ़रमाया: "क़ुल हु अल्लाहु अहद (सूरह इखलास) और मुअव्वज़तैन (सूरह फ़लक़ और सूरह नास) तीन-तीन बार पढ़ो, जब सुबह और शाम हो, तीन मरतबा ये पढ़ना तुम्हारे लिए हर तकलीफ़ से अमान होगा। - तिर्मिज़ी
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
          Surah Ikhlas Roman English Translation
        </h2>
      </div>

      {/* Bismillah */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-xl p-6 border border-blue-600/30 text-center">
        <p className="text-lg text-white mb-2">
          "A'oozu billahi minash-shaitaanir rajeem, Bismillaahir Rahmaanir Raheem."
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
      case 'tafseer': return renderTafseer();
      case 'fazilat': return renderFazilat();
      case 'roman': return renderRoman();
      default: return renderIntroduction();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">सूरह इखलास</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Surah Al-Ikhlas - The Sincerity</p>
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

export default SurahIkhlas;