import React, { useState } from 'react';

const SurahKafirun = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'परिचय', icon: '📖' },
    { id: 'surah', title: 'सूरह काफिरून', icon: '🕌' },
    { id: 'tafseer', title: 'तफ़्सीर', icon: '📚' },
    { id: 'fazilat', title: 'फ़ज़ीलत', icon: '⭐' },
    { id: 'roman', title: 'Roman English', icon: '🔤' }
  ];

  const surahVerses = [
    {
      number: 1,
      arabic: "قُلْ يَا أَيُّهَا الْكَافِرُونَ",
      hindi: "क़ुल-या अय्यु-हल का-फिरून",
      translation: "आप कह दीजिये ए काफिरों (ईमान से इनकार करने वालों)",
      roman: "Qul Yaa-ayyu-hal kaafiroon"
    },
    {
      number: 2,
      arabic: "لَا أَعْبُدُ مَا تَعْبُدُونَ",
      hindi: "ला 'आ-बुदु मा-त'अ बुदून",
      translation: "ना तो मैं उस की इबादत करता हूँ जिस की तुम पूजा करते हो",
      roman: "Laa 'Aa-budu Maa ta'a bu-doon"
    },
    {
      number: 3,
      arabic: "وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ",
      hindi: "वला अन्तुम 'आबिदूना मा-अ'अबुद",
      translation: "और न तुम उसकी इबादत करते हो जिसकी मैं इबादत करता हूँ",
      roman: "Walaa An-tum 'Aabi doo-na Maa 'Aa-bud"
    },
    {
      number: 4,
      arabic: "وَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ",
      hindi: "वला-अना 'आबिदुम-मा अ'अबत-तुम",
      translation: "और न मैं उसकी इबादत करूंगा जिसको तुम पूजते हो",
      roman: "Walaa anaa 'aa bidum-maa 'abat-tum"
    },
    {
      number: 5,
      arabic: "وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ",
      hindi: "वला अन्तुम 'आ-बिदूना मा अ'अबुद",
      translation: "और न तुम (मौजूदा सूरते हाल के हिसाब से) उस खुदा की इबादत करने वाले हो जिसकी मैं इबादत करता हूँ",
      roman: "Walaa An-tum 'aabi-doo-na maa 'aabud"
    },
    {
      number: 6,
      arabic: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
      hindi: "लकुम दी-नुकुम वलि-यदीन",
      translation: "तो तुम्हारे लिए तुम्हारा दीन और मेरे लिए मेरा दीन",
      roman: "Lakum dee-nu-kum wali-ya deen"
    }
  ];

  const fazilat = [
    {
      title: "सूरह काफिरून ईमान की हिफाज़त करती है",
      content: "सूरह काफिरून और सूरह इख़लास दो ऐसी सूरह है। जिसे नबी करीम ﷺ रोज़ाना फजर की दो रक'अत सुन्नत में पढ़ा करते थे। ये दोनो सूरतें ईमान की हिफाज़त करती है। क्योंकि सूरह इखलास में अल्लाह त'आला की हक़ीक़त बयाँ की गयी है। सूरह काफिरून में इबादत में फर्क बता दिया गया है। और साथ में दूसरों के दीन के तरीकों और उनके खुदाओं से कोई वास्ता नही रखने की बात बताई गयी है।",
      hadith: "हज़रत अबू हरैराह र.अ. से रिवायत है के, \"रसूल अल्लाह ﷺ ने फजर की दो रक'अतों में सुरह अल-काफिरून और सुरह अल-इख़लास पढ़ी\"। - सहीह मुस्लिम"
    },
    {
      title: "सूरह अल काफिरून क़ुरआन पाक के चौथाई हिस्से की इबादत का सवाब है",
      content: "पाउ भर क़ुरआन पाक की तिलावत का सवाब सिर्फ एक दफा सूरह काफिरून पढ़ने से मिलता है क्योंकि इसमें खुद को उन सभी चीजों से दूर कर देने की बात कही गयी जो चीज़ अल्लाह त'आला के शरीक करती है।",
      hadith: "इब्न अब्बास र. अ. से रिवायत है के, रसूल अल्लाह ﷺ ने फरमाया: \"इधा ज़ुलज़िलात क़ुर'आन के आधे हिस्से के बराबर है, सुरह अल-इख़लास तिहाई क़ुरआन के बराबर है और अल-काफिरून चौथाईं क़ुरआन के बराबर है\"। - जमी'अ अत-तिर्मिज़ी न. 2894। एक दफा सूरह काफिरून पढ़ने से चौथाई (पाउ भर) क़ुरआन पढ़ने के बराबर है। यानी एक दफा सूरह काफिरून पढ़ने से पाउ भर क़ुरआन पढ़ने का सवाब मिलेगा। क्योंकि सूरह काफिरून में कुफ्र से इंकार है। यानी अल्लाह त'आला के अलावा जिन चीज़ों की इबादत दुनिया में होती है हम उनसब चीज़ों से इंकार करते है।"
    },
    {
      title: "सोने से पहले सूरह काफिरून पढ़ना अफ़ज़ल है",
      content: "नबी करीम ﷺ ने रख शख्स को सोने से पहले सूरह काफिरून पढ़ने की हिदायत दी।",
      hadith: "फरवह बिन नोफ़िल र.अ. कहते है के वो नबी करीम ﷺ की खिदमत में हाज़िर हुए और अर्ज़ किया: या रसूल अल्लाह ﷺ मुझे कोई ऐसी चीज़ सिखाये जो में अपने बिस्तर पर जाते वक़्त कहूँ। तो आप ﷺ ने फरमाया: \"पढ़ूँ : ऐ काफ़िरों (सूरह काफिरून), क्योंकि ये शिर्क की नफि है। - जमी'अ तिर्मिज़ी न. 3403"
    },
    {
      title: "वित्र की तीन रक'आतों में सूरह काफिरून पढ़ें",
      content: "अब्दुल्लाह बिन अब्बास र.अ. कहते है रसूल अल्लाह ﷺ तीन रक'अत वित्र पढ़ते, पहले में सूरह अल- आला, दूसरे में सूरह काफिरून तीसरे में सूरह इखलास पढ़ते थे।",
      hadith: "सुनन अन नसाइ न. 1703"
    }
  ];

  const renderIntroduction = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-green-500 mr-3">🕌</span>
          Surah Kafirun In Hindi | सूरह काफिरून इन हिंदी
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            नबी करीम ﷺ ने अपनी कौम को गुमराही और कुफ्र की राह से निकाल कर अल्लाह त'आला के दीन की दावत फरमाई। लेकिन कुछ लोग अपने कुफ्र पर अडे रहे। तब उन्हे काफिर कह कर पुकारा गया। तब ही सूरह काफिरून नाज़िल हुई थी। इस पोस्ट में सूरह काफिरून (Surah Kafirun In Hindi) हिंदी में दी गयी है। साथ में सूरह काफिरून (Surah Kafirun Ki Fazilat, Tarjuma Aur Hadees) की फ़ज़ीलत, तर्जुमा और हदीस भी दी गयी है।
          </p>
          <p>
            हर नबी ने अपने कौम को या कौमी (ऐ मेरी कौम) कहकर पुकारा और अल्लाह त'आला का पैगाम दिया। जब कौम ने अल्लाह त'आला को नही माना तो उन्हें हलाक यानी खत्म कर दिया गया।
          </p>
          <p>
            लेकिन जब नबी ﷺ ने अपनी कौम को बड़ी खैर-खाहि से समझाया, दीन की दावत दे कर हिदायत की राह दिखाई। फिर जब कौम के कुछ लोग नही माने तो उन्हें अलग कर दिया गया।
          </p>
          <p>
            उन्तक अल्लाह अज़्ज़वजल का पैगाम पूरी तरह से पहुचा देने के बाद। जब मुखालिफीन कुफ्र के रास्ते यानी अल्लाह त'आला के दीन को मानने और अपनाने से पीछे हट गये। और अपने कुफ्र पर अड़े रहे।
          </p>
          <p>
            तो उन्हे काफिर कह कर पुकारा गया, के अब तुम्हारी और हमारी रहें जुदा है। तुम्हारे लिए तुम्हारा दीन है, और हमारे लिए हमारा दीन। तुम्हारी यानी काफिर के इबादत के तरीक़े अलग है। और हमारे इबादत के तरीके अलग है।
          </p>
          <p>
            इसी बात पर अल्लाह त'आला के तरफ से सूरह काफिरून नाज़िल हुई। कुफ्र यानी काफिर के रास्ते अलग कर दिये गए।
          </p>
          <p>
            अल्लाह त'आला के करम से नबी ﷺ ने हिदायत को गुमराही से पूरी तरह से अलग कर के दिखा दिया। अब आज तक वो रहे जुदा है। अब जिसका जो दिल चाहे वो चुन कर उसपर चले।
          </p>
          <p>
            इस्लाम पर ना चल कर खुद को काफिर (Non Muslim) बन जाये या इस्लाम को अपना कर मोमीन (Muslim) बन जाए उसकी मर्ज़ी।
          </p>
          <p>
            क्योंकि इस्लाम एक ऐसा मज़हब है जिसमें ज़ोर ज़बरदस्ती नही की जाती। इस मज़हब को दिल से अपनाने का नाम इस्लाम है।
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center">
            <span className="text-blue-400 mr-2">📍</span>
            Surah Kafirun Kaha Nazil Huyi Thi? | सूरह काफिरून कहा नाज़िल हुई थी?
          </h3>
          <p className="text-gray-300">सूरह काफ़िरून मक्की सूरत है, क्योंकि ये मक्क़ा में नाजिल हुई थी।</p>
        </div>

        <div className="bg-green-900/20 backdrop-blur-md rounded-xl p-6 border border-green-600/30">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center">
            <span className="text-green-400 mr-2">🔢</span>
            Surah Kafirun Mein Ketne Ayatein Hai? | सूरह काफिरून में कितना आयतें है?
          </h3>
          <p className="text-gray-300">सूरह काफिरून में 6 आयतें हैं। ये क़ुरआन मजीद के छोटी सूरतों में से एक सूरत है।</p>
        </div>
      </div>

      <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-6 border border-yellow-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-yellow-400 mr-2">💡</span>
          Kufr Aur Kafir Ka Kya Matlab Hota Hai? | कुफ्र और काफिर का क्या मतलब होता है?
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>
            कुफ्र का मतलब इंकार कर देने वाला। मुसलमान बन्ने से इंकार कर देने वाला। कुफ्र और काफिर अरबी ज़बान के लफ्ज़ है। जो जिसका मतलब इस्लाम पर ना चलने वाला नोन मुस्लिम (Non Muslim)।
          </p>
          <p>
            सीधे लफ़्ज़ों में कहा जाए तो जिस तरफ एक मुसलमान एक इंसान जो ना ही ईसाई (Christian) है, ना ही यहूदि (Jew) है और ना सनातन (Hindu) है। तो उन्हे नोन क्रिसचेन (Non Christain), नोन जीऊ (Non Jew) और नोन हिंदू (Non Hindu) कहा जायेगा। ठीक उसी तरह जो इस्लाम में नही है यानी मुसलमान नही है उन्हे काफिर नोन मुस्लिम (Non Muslim) कहा जायेगा।
          </p>
          <p>
            फर्क बस इतना है, काफिर लफ्ज़ अरबी से आता है जिसे हिंदी में नास्तिक कहा जायेगा। हालांकि उन्हे अरबी में काफिर कह कर नोन मुस्लिम ही कहा जा रहा है।
          </p>
          <p>
            एक और बात आज कल लोग अपने आपको मुसलमान तो कहते है। लेकिन उन्हे ये नही मालूम की जिन-जिन अहम बातों का हुक्म अल्लाह त'आला और उसके रसूल ﷺ ने हराम और हलाल बना कर दिया है।
          </p>
          <p>
            उन्हे ना अपनाने वाला भी कुफ्र करता है। यानी उसमें भी कुछ निशानियाँ कुफ्र या काफिर वाली देखी जा रही है।
          </p>
          <p>
            यानी अल्लाह त'आला और रसूल की ना फरमानी करना कुफ्र है।
          </p>
        </div>
      </div>
    </div>
  );

  const renderSurah = () => (
    <div className="space-y-6">
      {/* Bismillah */}
      <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-md rounded-xl p-6 border border-green-600/30 text-center">
        <p className="text-sm text-gray-400 mb-2">أعُوْذُ بِاللّٰهِ مِنَ الشَّيْطٰانِ الرَّجِيْمِ</p>
        <p className="text-2xl text-white mb-4" dir="rtl">
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
        <h2 className="text-3xl font-bold text-white mb-2">Surah Al Kafirun In Hindi Aur Surah Al Kafirun Ka Tarjuma Hindi Mein</h2>
        <p className="text-xl text-gray-300 mb-4">सूरह अल काफिरून इन हिंदी और सूरह अल काफिरून का तर्जुमा हिंदी में</p>
        <p className="text-gray-300 mb-4">
          जो लोग अरबी पढ़ना नही जानते या थोड़ा बहुत जानते है। उनके लिए हमने सूरह अल-काफिरून अरबी (Surah Al Kaafiroon In Arabic) ज़बान में दिया है। जिन लोगों को अरबी बिल्कुल नही आति उनके लिए सूरह अल काफिरून (Surah Al Kafirun In Hindi) के हुर्फ़ हिंदी में नक़ल कर के दिया गया है। जिन्हे सूरह काफिरून का तर्जुमा जानना है। उनके लिए सूरह-काफिरून का हिंदी तर्जुमा (Surah Al Kafirun Ka Hindi Tarjuma) के साथ दिया गया है। ताकि सीखने वालों, पढ़ने वालों और मालूमात इखट्टा करने वालों को आसानी हो।
        </p>
        <p className="text-2xl text-gray-300 mb-4" dir="rtl">(سورة ألكَافِرُونَ)</p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <span>सूरह 109</span>
          <span>6 आयतें</span>
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
                  <p className="text-2xl md:text-3xl text-white leading-relaxed font-arabic" dir="rtl">
                    {verse.arabic}
                  </p>
                </div>
                
                {/* Hindi Pronunciation */}
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-yellow-300 text-lg font-semibold">
                    "{verse.hindi},"
                  </p>
                </div>
                
                {/* Translation */}
                <div className="border-t border-gray-600/30 pt-4">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {verse.translation},
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
          Surah Kafirun Ki Tafseer Hindi Mein | सूरह काफिरून की तफ़्सीर हिंदी में
        </h2>
        <p className="text-gray-300 mb-4" dir="rtl">(سورة ألكَافِرُونَ کے تفسیر)</p>
        <div className="text-center mb-6">
          <p className="text-sm text-gray-400 mb-2">أعُوْذُ بِاللّٰهِ مِنَ الشَّيْطٰانِ الرَّجِيْمِ</p>
          <p className="text-xl text-white mb-2" dir="rtl">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
          <p className="text-gray-300 text-sm mb-2">"अ 'ऊजु बिल्लाहि मिनश शैतानिर रजीम, बिस्मिल्ला-हिर्रहमा-निर्रहीम"</p>
          <p className="text-gray-400 text-sm">"मैं अल्लाह त'आला की पनाह में आता हूँ शैतान ने मरदूद से, अल्लाह के नाम से शुरू जो निहायत मेहरबान व रहम वाला है।"</p>
        </div>
      </div>

      {surahVerses.map((verse, index) => (
        <div key={verse.number} className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
          <div className="flex items-start space-x-4 mb-4">
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
              {verse.number}
            </div>
            <div className="flex-1">
              <p className="text-xl text-white mb-2" dir="rtl">{verse.arabic}</p>
              <p className="text-yellow-300 mb-2">"{verse.hindi},"</p>
              <p className="text-gray-300">"{verse.translation},"</p>
            </div>
          </div>
          
          <div className="bg-gray-700/30 rounded-lg p-4 mt-4">
            <h4 className="text-lg font-semibold text-white mb-2">(Tafseer/तफ़्सीर)</h4>
            <div className="text-gray-300 leading-relaxed">
              {index === 0 && (
                <div className="space-y-3">
                  <p>1. जब मक्का के मुशरीकीन नबी करीम ﷺ के लाये हुए दीन-ए-इस्लाम की दावत पूरी तरह से अपनाने से इंकार पर अडे रहे।फिर तमाम मुशरीकीन आप ﷺ के पास ये समझौता ले कर आये।</p>
                  <p>फिर कहने लगे आप जो दीन ले कर आये है। हम उसे मानने को तैयार है। लेकिन हम बुत परस्ती भी नही छोड़ेंगे। कभी कभी हम आपके अल्लाह की इबादत करेंगे और कभी कभी अपने ग़ैरुल्ला (बुत परस्ती) की इबादत करेंगे।</p>
                  <p>साथ में ये भी कहने लगे के आप भी कभी कबार हमारे बुतों की इबादत कर लिया कीजियेगा। इससे आपके अल्लाह भी खुश हो जायेंगे और हमारे खुदा भी खुश हो जायेंगे।</p>
                  <p>तब अल्लाह त'आला ने अल काफिरून सूरह नाज़िल फरमाई।</p>
                  <p>सूरह काफिरून की पहली आयत में ही अल्लाह त'आला बड़े ही जलाल में फरमाते: आप (नबी ﷺ) कह दीजिये ऐ काफिरों। यानी इस आयत में अल्लाह त'आला उन सभी लोगों को काफ़िर कह कर पुकार रहे है। जिन्होंने अल्लाह त'आला के साथ किसी और को शरीक किया। और अल्लाह त'आला और उसके रसूल ﷺ की ना फरमानी की।</p>
                </div>
              )}
              {index === 1 && (
                <p>2. दूसरी आयत में अल्लाह त'आला उन मुशरीकीन के समझौते वाले बात का जवाब देते है। जब उन लोगों ने कहा था कुछ वक़्त के लिए हम तुहारे अल्लाह की इबादत कर लेंगे फिर कुछ वक़्त के लिए तुम हमारे खुदा (ग़ैरुल्ला) की इबादत कर लेना। इस बात का जवाब देते हुए अल्लाह त'आला फरमाते है के कह दीजिये के ना मैं उनकी इबादत करता हूँ जिनको तुम पूजते हो।</p>
              )}
              {index === 2 && (
                <div className="space-y-3">
                  <p>3. तीसरी आयात में अल्लाह त'आला उनकी निय्यत को दर्शाते है। यानी मुशरीकीन कह तो रहे थे के वो लोग अल्लाह त'आला की इबादत भी करेंगे। यानी सिर्फ कहने के लिए अल्लाह त'आला की इबादत नही की जा सकती। जो अल्लाह त'आला की इबादत करता है वो कभी उसके साथ किसी को शरीक नही करेगा। बल्कि अल्लाह त'आला की इबादत करने वाला कभी अल्लाह के साथ किसी को इबादत के लायक नही समझेगा।</p>
                  <p>इस आयत से समझ आता है के जो लोग खुद को अल्लाह त'आला को मानने वाला मानते है और साथ में दूसरे खुदाओं को भी मानते है। असल में उनके इस बात से अल्लाह त'आला उनसे राज़ी नही होगा और ना इससे अल्लाह त'आला इबादत हो रही है।</p>
                </div>
              )}
              {index === 3 && (
                <div className="space-y-3">
                  <p>4. चौथी आयत में वही बात दुहराई गयी है के मैं ना उनकी इबादत करूँगा जिनको तुम पूजते हो।</p>
                  <p>दुहराया इसलिए गया के ये बात पक्की है के मोमिन कभी अल्लाह त'आला के साथ किसी गेरुल्ला को शरीक नही करेगा।</p>
                  <p>इस बात को दुहराने का ये भी मकसद है के मक्का में अच्छी बातों की हिदायत 2 से 3 दफा दिया करते थे।</p>
                </div>
              )}
              {index === 4 && (
                <p>5. पंचविं आयत में भी दूसरी बात को दुहराते हुए अल्लाह त'आला फरमाते के जो कुछ तुम कह रहे हो उससे लगता नही के तुम उसकी इबादत करोगे जिनकी इबादत मैं करता हूँ।</p>
              )}
              {index === 5 && (
                <div className="space-y-3">
                  <p>6. छट्टे आयत में दोनो दीनों को अलग अलग कर दिया गया। क्योंकि इतनी दफा हिदायत की राह पर दावत देने के बावजूद अगर उन मुशरीकीन के पल्ले कुछ पड़ नही रहा है।</p>
                  <p>तो अब दोनों की रहें अलग हो जाने चाहिए। इसलिए कहा गया तुम्हारे लिए तुम्हारा दीन और हमारे लिए हमारा दीन।</p>
                  <p>लेकिन इस आयत का हरगिज़ ये मतलब नही के अल्लाह त'आला ने उन्हे अपने दीन पर यानी बुतों की इबादत की इजाज़त दे दी है।</p>
                  <p>इजाज़त नही दी है लेकिन दीन से अलग ज़रूर कर दिया गया है। अब उनकी मर्ज़ी वो चाहे जो करे।</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFazilat = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-yellow-500 mr-3">⭐</span>
          Surah Kafirun Ki Fazilat (Hadees) Hindi Mein | सूरह काफिरून की फ़ज़ीलत (हदीस) हिंदी में
        </h2>
      </div>

      {fazilat.map((item, index) => (
        <div key={index} className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <span className="text-yellow-400 mr-2">{index + 1}.</span>
            {item.title}
          </h3>
          
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              {item.content}
            </p>
            
            <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
              <h4 className="text-green-400 font-semibold mb-2">हदीस</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.hadith}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderRoman = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-blue-500 mr-3">🔤</span>
          Surah Al Kaafiroon in Roman English With Translation | सूरह काफिरू रोमन इंग्लिश में
        </h2>
        <p className="text-gray-300 mb-4" dir="rtl">"(سورة ألكَافِرُونَ)"</p>
      </div>

      {/* Bismillah */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-xl p-6 border border-blue-600/30 text-center">
        <p className="text-sm text-gray-400 mb-2" dir="rtl">أعُوْذُ بِاللّٰهِ مِنَ الشَّيْطٰانِ الرَّجِيْمِ</p>
        <p className="text-xl text-white mb-2" dir="rtl">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="text-lg text-white mb-2">
          • Aa'oozoobillahi Minash-shaitaanir Rajeem, Bismillaahir Rahmaanir Raheem.
        </p>
        <p className="text-gray-300 text-sm">
          • Mai ALLAH Ta'ala ki panaah mein ata hun shaitan mardood se, ALLAH Ta'ala ke naam se shuro jo nihayat meherbaan Wa raham karne wala hai.
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
                    {verse.number}. "{verse.roman},"
                  </p>
                </div>
                
                {/* Translation */}
                <p className="text-gray-300 leading-relaxed">
                  {verse.number}. "{verse.translation},"
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">सूरह काफिरून</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Surah Al-Kafirun - Complete Guide in Hindi</p>
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

export default SurahKafirun;