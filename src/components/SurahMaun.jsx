import React, { useState } from 'react';

const SurahMaun = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'परिचय', icon: '📖' },
    { id: 'surah', title: 'सूरह मौन', icon: '🕌' },
    { id: 'tafseer', title: 'तफसीर', icon: '📚' },
    { id: 'roman', title: 'Roman English', icon: '🔤' }
  ];

  const surahVerses = [
    {
      number: 1,
      arabic: "أَرَءَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ",
      hindi: "अरा-अईतल-लज़ी यु-कज़-ज़िबू बिद-दीन",
      translation: "क्या तुमने उस शख़्स को भी देखा है जो रोज़ जज़ा को झुठलाता है",
      roman: "Ara-aital-lazi yu-kazzib bid-deen"
    },
    {
      number: 2,
      arabic: "فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ",
      hindi: "फज़ा लिकल-लज़ी या दु'अ-'उल यतीम",
      translation: "ये तो वही (कम्बख़्त) है जो यतीम को धक्के देता है",
      roman: "Fazalika-llazi yadu'ul yateem"
    },
    {
      number: 3,
      arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ",
      hindi: "वला या हुज़-ज़ु 'अला ता-'आमिल मिसकीन",
      translation: "और मोहताजों को खिलाने के लिए (लोगों को) आमादा नहीं करता",
      roman: "Wa la yahuddu ala ta'amil miskeen"
    },
    {
      number: 4,
      arabic: "فَوَيْلٌ لِّلْمُصَلِّينَ",
      hindi: "फ वई लुललिल मु सल्लीन",
      translation: "तो उन नमाजि़यों की तबाही है",
      roman: "Fa waylul-lil musalleen"
    },
    {
      number: 5,
      arabic: "ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
      hindi: "अल लज़ीना हुम-'अन सलातिहीम साहून",
      translation: "जो अपनी नमाज़ से ग़ाफिल रहते हैं",
      roman: "Allazina hum 'an salatihim sahoon"
    },
    {
      number: 6,
      arabic: "ٱلَّذِينَ هُمْ يُرَآءُونَ",
      hindi: "अल लज़ीना हुम युरा-ऊन",
      translation: "जो दिखाने के वास्ते करते हैं",
      roman: "Allazina hum yura'oon"
    },
    {
      number: 7,
      arabic: "وَيَمْنَعُونَ ٱلْمَاعُونَ",
      hindi: "व यम ना ऊनल-मा-'ऊन",
      translation: "और रोज़ मर्रा की मालूली चीज़ें भी आरियत नहीं देते",
      roman: "Wa yamna'oon al-ma'oon"
    }
  ];

  const renderIntroduction = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-green-500 mr-3">🕌</span>
          Surah Maun In Hindi | सूरह मौन इन हिंदी
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            अल्लाह त'आला ने सूरह अल मौन में क़यामत के दिन को झुठलाने वाले उन मुसलमानों की छोटी छोटी सिफ़तों को बयाँ किया है। जिन्हे हमलोग आम जिंदगी में मामोली समझते है। लेकिन हम उनके अज़ाब से बेखबर है। इस पोस्ट में सूरह अल मौन (Surah Al Maun In Hindi+Tarjuma+Tafseer+Hadees) हिंदी तर्जुमा के साथ तफ़्सीर और हदीस के हवाले से पढ़ते है।
          </p>
        </div>
      </div>

      <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center">
          <span className="text-blue-400 mr-2">📜</span>
          Surah Al Maun In Hindi | सूरह अल मौन हिंदी में
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>
            सूरह मौन क़ुरआन मजीद की अहम और छोटी सूरतों में शामिल है। ये सूरह उन सूरतों में शुमार है जो मक्का मुअज़्ज़मा में नाज़िल हुई। मक्का मुअज़्ज़मा में नाज़िल होने वाली सूरतें छोटी-छोटी हुआ करती है।
          </p>
          <p>
            लेकिन इनमें बहुत अहं और मज़बूत पैग़ाम हुआ करती है। जितनी भी मक्की सूरतें है उन्हे अल्लाह त'आला ने इंसानियत की हिदायत और इस्लाह के लिए सबसे पहले नाज़िल फरमाई।
          </p>
          <p>
            यानी शुरूआती दौर पर जब नबी करीम ﷺ मुशरीकीन-ए-मक्का को जब अल्लाह त'आला की तरफ बोला रहे थे। तो अल्लाह रब्बुल इज़्ज़त ने उस इब्तिदायि मरहले के लिए इन सूरतों का इंतेखाब किया।
          </p>
          <p>
            यकीनन ये सूरतें अपने-आप में बडी एहमियत की हामिल है। इन सूरतों के अंदर जो पैग़ामात दिये गये है। वो देखने में हमारी रोज़ मर्रा की जिंदगी में बहुत छोटे और कम एहमियत वाली लगती है।
          </p>
          <p>
            लेकिन क़ुरआन मजीद के एतबार से ये बड़ी एहमियत की हामिल होती है। मिसाल के तौर पर हमारे लिए कुछ ऐसे गुनाह है जिन्हे हम छोटे गुनाह मान कर कर लेते है।
          </p>
          <p>
            जब की वो गुनाह भी अल्लाह रब्बुल इज़्ज़त के नज़दीक सख़्त और ना-पसंदीदा है। और ये हमारे लिए बड़े अज़ाब का बाइस भी बनता है।
          </p>
          <p>
            इसलिए क़ुरआन मजीद में जिन चीजों को ना करने का हुक्म दिया है। उन कामों से हमें परहेज़ करना चाहिए। ठीक उसी तरह फ़ुर्क़ान-ए-हमीद में जिन चीजों को करने का हुक्म दिया गया है, उनहें संजीदगी से अमल में लाना चाहिए
          </p>
        </div>
      </div>

      <div className="bg-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-purple-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-purple-400 mr-2">📋</span>
          Surah Al Maun In Hindi Aur Surah Al Maun Ka Tarjuma Hindi Mein
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>
            जो लोग अरबी पढ़ना नही जानते या थोड़ा बहुत जानते है। उनके लिए हमने सूरह अल-मौन अरबी (Surah Al Maun In Arabic) ज़वान में दिया है।
          </p>
          <p>
            जिन लोगों को अरबी बिल्कुल नही आति उनके लिए सूरह अल मौन के हुर्फ़ हिंदी में नक़ल कर के दिया गया है।
          </p>
          <p>
            जिन्हे सूरह मौन का तर्जुमा जानना है। उनके लिए सूरह-मौन का हिंदी तर्जुमा के साथ दिया गया है। ताकि सीखने वालों, पढ़ने वालों और मालूमात इखट्टा करने वालों को आसानी हो।
          </p>
        </div>
      </div>

      <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-6 border border-yellow-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-yellow-400 mr-2">🌟</span>
          Surah Maun In Hindi | सूरह मौन इन हिंदी
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>
            सूरह मौन और अमूमन मक्की सूरतों में इंसानी समाज के लिए ऐसे ऐसे संदेश मिलेगी। जिनका करना बहुत ज़रूरी भी है और कुछ ऐसी भी चीजें है। जिनका करना बहुत खतरनाक और खौफनाक है।
          </p>
          <p>
            नमाज़, रोज़ा, हज, ज़कात ये सारी चीज़े बाद में आईं। सब से पहले उन चीज़ों को नाज़िल किया जो हमारी रोज़ मर्रा की जिंदगी को सही ढंग से हमें जिने की सिख देती है।
          </p>
          <p>
            सूरह अल मौन भी एक ऐसी सूरत है।इसमें अल्लाह रब्बुल इज़्ज़त का हुक्म और इशारा है। उन लोगों के लिए जो अल्लाह त'आला से नही डरते है। आखि़रत, क़ब्र के अज़ाब और जहन्नम के अज़ाब से नही डरते है। क़यामत के दिन का झूठ मान कर गुनाह करते रहते है।
          </p>
          <p>
            इन सारी बातों को तफ़्सीर से जानने के लिए क़ुरआन का तर्जुमा तफ़्सीर के साथ पढ़ना बहुत ज़रूरी है। इसलिए अल्लाह त'आला ने क़ुरआन मजीद में क़ुरआन मजीद को पढ़ने का हुक्म दिया। ता की पढ़ कर समझे और उसी तरह अपनी ज़िदगी बिताए।
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
        <h2 className="text-3xl font-bold text-white mb-2">सूरह अल मौन अरबी और हिंदी तर्जुमा में</h2>
        <p className="text-xl text-gray-300 mb-4">(سورة الماعون)</p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <span>सूरह 107</span>
          <span>7 आयतें</span>
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
          Surah Al Maun Ki Tafseer Hindi Mein | सूरह अल मौन की तफ़्सीर हिंदी में
        </h2>
      </div>

      {/* Verse 1 Tafseer */}
      <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
        <div className="text-right mb-4">
          <p className="text-2xl text-white" dir="rtl">﴿١﴾ أَرَءَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ</p>
        </div>
        <div className="space-y-3">
          <p className="text-yellow-300 text-lg font-semibold">1. अरा-अईतल-लज़ी यु-कज़-ज़िबू बिद-दीन</p>
          <p className="text-gray-300 text-lg">1. क्या तुमने उस शख़्स को भी देखा है जो रोज़ जज़ा को झुठलाता है</p>
          <div className="bg-blue-900/30 rounded-lg p-4 mt-4">
            <h4 className="text-blue-400 font-semibold mb-2">पहली आयत की तफ़्सीर:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              इस आयत में अल्लाह त'आला क़यामत के दिन को झुठलाने वाले लोगों बारे बता रहे है। इस आयत में, आगे की आने वाली आयतों की तरफ इशारा करते हुए बताया गया है, के नीचे जितनी आयतें आयेंगीं। वो उनलोगो की आदतें या निशानियाँ है। जो क़यामत के दिन को झुठला रहे है। जिन मुसलमानों में वो बातें पाई जायेंगीं। वो लोग भी रोज़-ए-जज़ा यानी क़यामत के दिन झुठला रहे है। जिस शख्स को ये यक़ीन ना हो के उसे क़यामत के दिन अल्लाह त'आला के सामने अपनी बितायी हुई सारी ज़िंदगी का हिसाब देना है। वो ही शख्स क़यामत को झुठलाता है।
            </p>
          </div>
        </div>
      </div>

      {/* Verse 2 Tafseer */}
      <div className="bg-green-900/20 backdrop-blur-md rounded-xl p-6 border border-green-600/30">
        <div className="text-right mb-4">
          <p className="text-2xl text-white" dir="rtl">﴿٢﴾ فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ</p>
        </div>
        <div className="space-y-3">
          <p className="text-yellow-300 text-lg font-semibold">2. फज़ा लिकल-लज़ी या दु'अ-'उल यतीम</p>
          <p className="text-gray-300 text-lg">2. ये तो वही (कम्बख़्त) है जो यतीम को धक्के देता है</p>
          <div className="bg-green-900/30 rounded-lg p-4 mt-4">
            <h4 className="text-green-400 font-semibold mb-2">दूसरी आयत की तफ़्सीर:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              दूसरी आयत में अल्लाह त'आला क़यामत से इंकार करने वाले इंसान की पहली सिफ़त बयाँ कर रहे है। हिसाब के दिन को झूठलाने वाला इंसान यतीम को धक्के देता है। यतीम का एहतराम नही करता, यतीम के साथ अच्छा सलूक नही करता, यतीम का हक़ नही देता, बल्कि यतीम का हक़ मार लेता है। तमाम वो चीज़े जिनपर यतीम का हक़ है, उसे वो नही देता। इस आयत में सिर्फ यतीम लफ्ज़ आया है। यानी यतीम चाहे मुसलमान हो या ग़ैर मुसलमान। ग़ैर मुसलमान यतीम का हक़ भी उतना ही होगा जितना एक मुसलमान यतीम का हक़ होता है।
            </p>
          </div>
        </div>
      </div>

      {/* Verse 3 Tafseer */}
      <div className="bg-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-purple-600/30">
        <div className="text-right mb-4">
          <p className="text-2xl text-white" dir="rtl">﴿٣﴾ وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ</p>
        </div>
        <div className="space-y-3">
          <p className="text-yellow-300 text-lg font-semibold">3. वला या हुज़-ज़ु 'अला ता-'आमिल मिसकीन</p>
          <p className="text-gray-300 text-lg">3. और मोहताजों को खिलाने के लिए (लोगों को) आमादा नहीं करता</p>
          <div className="bg-purple-900/30 rounded-lg p-4 mt-4">
            <h4 className="text-purple-400 font-semibold mb-2">तीसरी आयत की तफ़्सीर:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              इस आयत में हिसाब के दिन को ना मानने वाले की दूसरी निशानी बताई गयी है, के वो भूखो मिस्कीनों को खाना नही खिलाता है। इस आयत में भी सिर्फ भूखे मीसकीन का लफ्ज़ आया है। यानी भूखा चाहे मुसलमान हो या ग़ैर मुसलमान। ग़ैर मुसलमान भूखे को भी खाना खिलाना, उन ही सवाब का काम है। जितना एक मुसलमान को खिलाने पर मिलता है।
            </p>
            <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mt-4">
              <h4 className="text-green-400 font-semibold mb-2">हदीस</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                एक औरत अपनी दो बेटियों के साथ हज़रत आईशा र.अ. के पास आई, तो उन्होंने उन्हे तीन खजूरे दी। (औरत ने) अपनी बेटियों में से हर एक को एक-एक खजूरे दी, फिर उसने उनके दरमियाँ आखरी खजूर तक़्सीम कर दिया। आईशा र.अ. ने कहा: "फिर रसूल अल्लाह ﷺ तशरीफ लाये और मेंने आपको उसके बारे में बयाँ किया।" आप ﷺ ने कहा: "तुम तैरान क्यों हो? उसकी वजह से वो जन्नत में दाखिल होगी।" - सुनन इब्न मजह न. 3668
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verses 4-5 Tafseer */}
      <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-6 border border-yellow-600/30">
        <div className="text-right mb-4">
          <p className="text-2xl text-white" dir="rtl">﴿٤﴾ فَوَيْلٌ لِّلْمُصَلِّينَ ﴿٥﴾ ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ</p>
        </div>
        <div className="space-y-3">
          <p className="text-yellow-300 text-lg font-semibold">4-5. फ वई लुललिल मु सल्लीन, अल लज़ीना हुम-'अन सलातिहीम साहून</p>
          <p className="text-gray-300 text-lg">4-5. तो उन नमाजि़यों की तबाही है, जो अपनी नमाज़ से ग़ाफिल रहते हैं</p>
          <div className="bg-yellow-900/30 rounded-lg p-4 mt-4">
            <h4 className="text-yellow-400 font-semibold mb-2">चौथी और पांचवी आयत की तफ़्सीर:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              इस आयत में कुछ मख़्सूस क़िस्म के नमाज़ियों की तबाही का ज़िक्र किया गया। जो अपनी नमाज़ों को भुला बैठे है। जो गाफ़िल है अपनी नमाज़ से, उन नमाज़ियों को मुनाफ़िक कहा जायेगा। जो दिल में कुफ्र रख कर, ज़ाहिर इमान का दवा करते है। फिर नमाज़ पढ़ते है, तो ऐसा नमाज़ी होना उनपर नालत है। नमाज़ से गाफ़िल होना भी उस शख्स की सिफ़त है। जो हिसाब के दिन को नही मानता।
            </p>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
              <h4 className="text-blue-400 font-semibold mb-2">हदीस</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                मैंने रसूल अल्लाह ﷺ को फरमाते हुए सुना: "जो आदमी अच्छी तरह वुज़ू करे और फिर बा-जमा'अत नमाज़ पढ़े तो अल्लाह त'आला उस नमाज़ और अगली नमाज़ के दरमियाँ के गुनाहों को मु'आफ कर देता है, जब तक के वो उसे ना पढ़े।" - सहीह अल-बुखारी न. 160
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verse 6 Tafseer */}
      <div className="bg-rose-900/20 backdrop-blur-md rounded-xl p-6 border border-rose-600/30">
        <div className="text-right mb-4">
          <p className="text-2xl text-white" dir="rtl">﴿٦﴾ ٱلَّذِينَ هُمْ يُرَآءُونَ</p>
        </div>
        <div className="space-y-3">
          <p className="text-yellow-300 text-lg font-semibold">6. अल लज़ीना हुम युरा-ऊन</p>
          <p className="text-gray-300 text-lg">6. जो दिखाने के वास्ते करते हैं</p>
          <div className="bg-rose-900/30 rounded-lg p-4 mt-4">
            <h4 className="text-rose-400 font-semibold mb-2">छट्टी आयत की तफ़्सीर:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              इस आयत में अल्लाह त'आला उनका ज़िक्र करता है। जो लोगो को दिखाने के लिए नमाज़ पढ़ते है। उसके दिल में ये ख्याल भी शामिल है, के मेरी नमाज़ लोग देखेंगे। जो लोग नमाज़ के लिए सुस्ती करते है। लोगो को दिखाने के लिए नमाज़ पढ़ते है। अल्लाह त'आला को याद भी करते है, तो बहुत कम। वही लोग क़यामत के दिन को झुठलाते है। हमारे किसी भी अमल में रियह शामिल नही होना चाहिए। रोज़ा, हज, नमाज़, सदक़ा या इमान क़ुबूल करना सारी चीज़े खालिस अल्लाह त'आला के लिए होना चाहिए।
            </p>
          </div>
        </div>
      </div>

      {/* Verse 7 Tafseer */}
      <div className="bg-teal-900/20 backdrop-blur-md rounded-xl p-6 border border-teal-600/30">
        <div className="text-right mb-4">
          <p className="text-2xl text-white" dir="rtl">﴿٧﴾ وَيَمْنَعُونَ ٱلْمَاعُونَ</p>
        </div>
        <div className="space-y-3">
          <p className="text-yellow-300 text-lg font-semibold">7. व यम ना 'ऊनल- मा'ऊन</p>
          <p className="text-gray-300 text-lg">7. और रोज़ मर्रा की मालूली चीज़ें भी आरियत नहीं देते</p>
          <div className="bg-teal-900/30 rounded-lg p-4 mt-4">
            <h4 className="text-teal-400 font-semibold mb-2">सातवी आयत की तफ़्सीर:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              क़यामत के दिन को ना मानने वाले इंसान की सातवी सिफ़त ये होगी के वो अपनी ममोलो चीज़े लोगो को देने से मना कर देंगे। बिना तकल्लुफ़ किये छोटी-मोटी खाने की, पकाने की, इस्तेमाल की मामूली चीज़े माँगने को "माउन" कहा जाता है। तफ़्सीर इब्न खसीर में मा'उन लफ़्ज़ के तफ़्सीर में कुछ चीज़े बताई गयी है। जैसे कुदाल, फावड़ा, पानी पीने की थैली, पतीला, बगोना (जिसमे खाना खाया जाता है) वगैरह।
            </p>
            <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mt-4">
              <h4 className="text-green-400 font-semibold mb-2">हदीस</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                अबू हरैरह र.अ. कहते है के रसूल अल्लाह ﷺ ने फरमाया: "एक आदमी चल रहा था के उसे प्यास लगी, तो एक कुँवे में उतरा और उस से पानी पिया। बाहर निकल कर उसने देखा के एक कुत्ता प्यास की शिददत से हनप रहा है। उस आदमी ने कहा के ये (कुत्ता) भी मेरी जैसे परेशानी में मुब्तिला है। चनांचे उसने (कुँवे से नीचे जा कर) अपने जूते को पानी से भरा, उसे अपने दांतों से पकड़ा और उपर चढ़ कर कुत्ते को पानी पिलाया। अल्लाह त'आला ने उसके (नेक) अमल पर उसका शुकर अदा किया और उसे बख्श दिया।" - सहीह बुखारी न. 2363
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRoman = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-blue-500 mr-3">🔤</span>
          Surah Al Maun Roman English Translation
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
      case 'roman': return renderRoman();
      default: return renderIntroduction();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">सूरह मौन</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Surah Al-Maun - The Small Kindnesses</p>
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

export default SurahMaun;