import React, { useState } from 'react';

const SurahQadr = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'परिचय', icon: '📖' },
    { id: 'surah', title: 'सूरह क़द्र', icon: '🕌' },
    { id: 'fazilat', title: 'फ़ज़ीलत', icon: '⭐' },
    { id: 'wazifa', title: 'वज़ीफा', icon: '🤲' },
    { id: 'roman', title: 'Roman English', icon: '🔤' }
  ];

  const surahVerses = [
    {
      number: 1,
      arabic: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
      hindi: "इन्ना अनज़ल नाहु फ़ी लैयलतिल क़द्र",
      translation: "बेशक हम ने क़ुरआन को शब-ए-क़द्र में नाज़िल फ़रमाया है",
      roman: "Innaa anzalnaahu fee lailatil qadr"
    },
    {
      number: 2,
      arabic: "وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ",
      hindi: "वमा अदराका मा लैयलतुल क़द्र",
      translation: "और आप को मालूम है कि शब-ए-क़द्र क्या है?",
      roman: "Wa maa adraaka ma lailatul qadr"
    },
    {
      number: 3,
      arabic: "لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
      hindi: "लय्लतुल क़दरि खैरुम मिन अल्फि शहर",
      translation: "शब-ए-क़द्र हज़ार महीनों से बेहतर है",
      roman: "Lailatul qadri khairum min alfee shahr"
    },
    {
      number: 4,
      arabic: "تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ",
      hindi: "तनज़्ज़लुल मलाइ-कतु वररूहु फ़ीहा बिइज़्नि रब्बिहिम मिन कुल्लि अम्र",
      translation: "इस रात में फ़रिश्ते रूहुल अमीन (जिबरईल अ.स.) अपने रब के हर काम का हुक्म लेकर उतरते हैं",
      roman: "Tanaz zalul malaa-ikatu war roohu feehaa bi izni-rab bihim min kulli amr"
    },
    {
      number: 5,
      arabic: "سَلَامٌ هِيَ حَتَّى مَطْلَعِ الْفَجْرِ",
      hindi: "सलामुन हिय हत्ता मत ल'इल फज्र",
      translation: "ये रात (सारापा) पूरी तरह सलामती है, जो सुबह फज्र होने तक रहती है।",
      roman: "Salaamun hiya hattaa mat-la'il fajr"
    }
  ];

  const renderWazifa = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-purple-500 mr-3">🤲</span>
          सूरह क़द्र के वज़ीफे और अमल
        </h2>
      </div>

      <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-blue-400 mr-2">👁️</span>
          Surah Qadr Ka Wazifa Ankhon Ke Liye | सूरह क़द्र का वज़ीफा आँखों के लिए
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>• आँखों में अगर किसी भी क़िस्म की बीमारी या पर्शनि पेश आ रही हो।</p>
          <p>• तो 90 दिनों तक 21 मरतबा सूरह क़द्र की तिलावत करें।</p>
          <p>• फिर दोनो हाथों की उंगलियों पर दम कर के आँखों पर 3 दफा फेर लें।</p>
          <p>• फिर साफ पानी पर दम कर के आँखों पर छिड़क ले, फिर वो पानी पी लें।</p>
          <p className="text-green-400 font-semibold">इंशा अल्लाह, आँखों की हर तरह की परेशानी से निजात हासिल होगी। और अगर कि परेशानी नही है। तो इंशा अल्लाह कभी कोई बीमारी नही होगी।</p>
        </div>
      </div>

      <div className="bg-green-900/20 backdrop-blur-md rounded-xl p-6 border border-green-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-green-400 mr-2">🤚</span>
          Surah Qadr Ka Wazifa Badan के Kharish (Khujli) Ke liye | सूरह क़द्र का वज़ीफा बदन के खारिश (खुजली) के लिए
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>• रोज़ाना 7 मरतबा सूरह क़द्र की तिलावत कीजिये।</p>
          <p>• फिर दोनो हाथो पर दम कर के दोनो हाथों को पूरे जिस्म में फेर लीजिये।</p>
          <p className="text-green-400 font-semibold">ऐसा रोज़ाना करें इंशा अल्लाह हर तरह की खरिश् यानी खुजली से निजात पाएंगे। अमीन</p>
        </div>
      </div>

      <div className="bg-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-purple-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-purple-400 mr-2">💖</span>
          Surah Qadr Ka khas Amal Muhabbat Ke Liye | सूरह क़द्र का ख़ास अमल मुहब्बत के लिए
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>• जिससे किसी से आप मुहब्बत करते हों। चाहे वो आपका शौहर हो, भाई हो, या औलाद।</p>
          <p>• अगर आप चाहते है के उनकी तरफ से कुछ ऐसा ना हो जो आपको तकलीफ दे जाए।</p>
          <p>• तो रोज़ाना उनके पेशानी के बाल पकड़ कर 1 मरतबा सूरह क़द्र पढ़ें और उनपर दम कर दें।</p>
          <p>• अगर किसी वजह से पेशानी के बाल ना पकड़ सके तो बग़ैर पेशानी के बाल पकड़े भी आप दम कर सकते है।</p>
        </div>
      </div>

      <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-6 border border-yellow-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-yellow-400 mr-2">👑</span>
          Surah Qadr Ka Wazifa Duniya Mein Izzat Pane Ka | सूरह क़द्र का वज़ीफा दुनिया में इज़्ज़त पाने का
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>• रोज़ाना किसी भी वक़्त बा-वुज़ू सूरह क़द्र 3 दफा पढ़ें,</p>
          <p>• फिर अपने हाथों पर दम कर के अपने हाथों को पूरे जिस्म में फेर लें।</p>
          <p className="text-yellow-400 font-semibold">इसे रोज़ाना का मामूल बना लीजिये। इंशा अल्लाह, दुनिया में और आखि़रत में भी आपकी इज़्ज़त होगी। अमीन</p>
        </div>
      </div>
    </div>
  );

  const renderRoman = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-blue-500 mr-3">🔤</span>
          Surah Al Qadr In English Translation | सूरह अल क़द्र इंग्लिश तर्जुमा के साथ
        </h2>
      </div>

      {/* Bismillah */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-xl p-6 border border-blue-600/30 text-center">
        <p className="text-lg text-white mb-2">
          "Aa'oozoobillahi Minash-shaitaanir Rajeem, Bismillaahir Rahmaanir Raheem."
        </p>
        <p className="text-gray-300 text-sm">
          "Mai ALLAH Ta'ala ki panaah mein ata hun shaitan mardud se, Shuru karta hun ALLAH Ta'ala ke naam se jo nihayat Rahem wala hai."
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

  const renderIntroduction = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-green-500 mr-3">🕌</span>
          Surah Qadr In Hindi | सूरह अल-क़द्र हिंदी में
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            रमज़ान के महीने में 1000 महीनों से बहतरीन एक ऐसी रात आती है। जिसका ज़िक्र अल्लाह त'आला ने क़ुरआन मजीद के सूरह अल क़द्र (Surah Qadr) में फरमाया है। चलिए पढ़ते है सूरह क़द्र (Surah Qadr In Hindi) हिंदी तर्जुमा के साथ। क़ुरआन और हदीस के हवाले से जानेंगे शबे क़द्र क्या होती है? शबे क़द्र की फ़ज़ीलत क्या है? क्या है शबे क़द्र का वाक़िआह?
          </p>
          <p>
            सूरह क़द्र क़ुरआन पाक की 97वी सूरत है। ये 30वे पारा में है। सूरह अल क़द्र क़ुरआन पाक की छोटी सूरतों में से एक सूरत है। इसमें कुल 5 आयात और 114 हर्फ़ है। ये मक्का मुबश्शरह में नाज़िल हुई। इसलिए ये मक्की सूरत कहलाती है।
          </p>
        </div>
      </div>

      <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center">
          <span className="text-blue-400 mr-2">🌙</span>
          Shabe Qadr Ki Raat Kab Hoti Hai? | शबे क़द्र की रात कब होती है?
        </h3>
        <p className="text-gray-300 mb-4">
          रमज़ान के महीने की 21, 23, 25, 27 और 29 शब (रातों) में से कोई भी एक शब (रात) हो सकती है।
        </p>
        <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
          <h4 className="text-green-400 font-semibold mb-2">हदीस</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            रसूल अल्लाह ﷺ ने फरमाया: "शबे क़द्र को रमज़ान की आखरी अशरे की ताक (21, 23, 25, 27 और 29) रातों में तलाश करो" - सहीह बुखारी न. 2014
          </p>
        </div>
        <p className="text-gray-300 mt-4">
          शबे क़द्र की रात को पोशीदा रखा गया है। रमज़ान के महीने की आखरी अशरे यानी आखरी 10 दिनों की ताक रातों में शब-ए-क़द्र हो सकती है। इन रातों में इबादत में लग कर शबे क़द्र को ढूँढना चाहिए।
        </p>
      </div>

      <div className="bg-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-purple-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-purple-400 mr-2">✨</span>
          Shab-e-Qadr Kya Hai? (Shab e Qadr Ka Waqia) | शब ए क़द्र क्या है? (शबे ए क़द्र का वाक़िआह)
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>
            लेलातुल क़द्र (Laylatul Qadr) एक ऐसी बेश कीमती और खुशखबरी वाली रात है। जिसमें अल्लाह त'आला ने मुकम्मल क़ुरआन शरीफ को अल लाव्ह-अल-महफूज़ से बैतुल इज़्ज़त में उतारा। जो पहले आसमान पर है।
          </p>
          <p>
            फिर थोड़ा-थोड़ा क़ुरआन शरीफ हज़रत जिब्राईल अ.स. ने हज़रत मुहम्मद ﷺ तक वही के ज़रिये पहुचाया। जिसमें 23 लग गए। और ये सब अल्लाह करीम के हुक्म से हुआ।
          </p>
          <p>
            शबे क़द्र वो रात है जिसमें फरिश्तें अल्लाह पाक के हुक्म से अहम कामों के अंजाम देने के लिए ज़मीन पर उतरते है।
          </p>
          <p>
            ये रात इज़्ज़त की रात है। जिसने इस रात को पाया उसने सारी इज़्ज़त पाली और जिसने इस रात कर खोया उसने सब कुछ को दिया।
          </p>
          <p>
            लेलातुल क़द्र कोई आम रात नही ये हज़ार रातों की इबादत के बराबर नही। बल्कि हज़ार रातों की इबादत से बहतर रात है।
          </p>
          <p>
            ये वो रात है जिसमें अल्लाह त'आला पूरे साल के हर अहम काम फरिशतों के सुपूर्त् फरमाते है। किसकी जिंदगी में क्या मोड़ आयेगा, कौन मरने वाला है, किसकी रिज़क् केतनी होगी, किसकी शादी होगी।
          </p>
          <p>
            इतने ज़्यादा त'अदद में फरिश्तें आते है के ज़मीन तंग हो जाती है। ज़मीन फरिश्तों से भर जाती है।
          </p>
        </div>
      </div>

      <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-6 border border-yellow-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-yellow-400 mr-2">🕌</span>
          Ramzan Kiska Mahina Hai? | रमज़ान किसका महिना है?
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>
            रमज़ान का महिना अल्लाह पाक का महिना है। क़ुरआन-ए-मुक़द्दास का महिना है। ये अल्लाह पाक के तरफ से हमारे लिए रहमतों और बरकतों का महिना है।
          </p>
          <p>
            इस रात में अल्लाह पाक के हुक्म से इतनी त'आदद में फरिश्तें ज़मीन पर उतरते है के दुनिया का कोना-कोना उनसे भर जाता है।
          </p>
          <p>
            हदीस के हवालों से पता चलता है, ये रात बहुत ही अफ़ज़ल और बरकत वाली रात है।
          </p>
          <p>
            रमज़ान में किया हुआ एक-एक नेक अमल और इबादत का सवाब 70 गुनाह बढ़ा कर मिलता है। शब ए क़द्र वो मुबारक रात है जिसमें अल्लाह त'आला ने क़ुरआन मजीद को नाज़िल फरमाया। और ये हम पर अल्लाह त'आला का बहुत बड़ा एहसान है।
          </p>
          <p>
            ये एक रात हमें 80 साल की इबादत का सवाब देगी। बाकी नबियों की उम्मत 80 साल तक इबादत करती थी। तब उन्हे इतना सवाब हासिल होता था।
          </p>
          <p>
            लेकिन हज़रत मुहम्मद ﷺ की उम्मत सिर्फ एक ही रात में इबादत करके उतना ही सवाब हासिल कर सकती है।
          </p>
        </div>
        <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mt-4">
          <h4 className="text-green-400 font-semibold mb-2">हदीस</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            "जो शख्स शब ए क़द्र ईमान के साथ और सिर्फ आखि़रत के सवाब के लिए ज़िक्र और इबादत में गुज़ारे तो उसके पिछले गुनाह बख्श दिये जाते है।" - सहीह बुखारी न. 35
          </p>
        </div>
      </div>

      <div className="bg-indigo-900/20 backdrop-blur-md rounded-xl p-6 border border-indigo-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-indigo-400 mr-2">🌙</span>
          Shabe Qadr Mein (Nafil Namaz) Kya Padhna Chahiye? | शबे क़द्र में (नफिल् नमाज़) क्या पढ़ना चाहिए?
        </h3>
        <p className="text-gray-300">
          शबे क़द्र में शबे क़द्र की दुआ के साथ निफ्लि इबादतों का भी अमल करना चाहिए। हदीस में आता है कायम करें। फ़र्ज़ नमाज़ों के साथ निफिल् नमाज़ पढ़ कर भी इस रात का एहतमाम करें।
        </p>
      </div>

      <div className="bg-teal-900/20 backdrop-blur-md rounded-xl p-6 border border-teal-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-teal-400 mr-2">📚</span>
          Shab e Qadr (Laylatul Qadr) Mein Kya Padhna Chahiye? | शब ए क़द्र (लेलातुल् क़द्र) में क्या पढ़ना चाहिए?
        </h3>
        <p className="text-gray-300">
          नबी ए करीम ﷺ की बताई हुई शबे क़द्र (लेलातुल क़द्र) की ख़ास दुआ। शबे क़द्र की रात में इस दुआ का विर्द खास तौर पर करना चाहिए। ये उस रात के लिए बहुत ही अफ़ज़ल दुआ है।
        </p>
      </div>

      <div className="bg-rose-900/20 backdrop-blur-md rounded-xl p-6 border border-rose-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-rose-400 mr-2">🤲</span>
          Shabe Ki Dua Kya Hai? | शबे क़द्र की दुआ क्या है?
        </h3>
        <div className="space-y-4">
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
            <h4 className="text-green-400 font-semibold mb-2">हदीस का मफहूम</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              हज़रत आईशा र.अ. से रिवायत है के उन्होंने आप ﷺ से अर्ज़ किया: "या रसूल अल्लाह अगर मैं लेलातुल क़द्र पालूँ तो क्या दुआ मांगों?" तो आप ﷺ ने फरमाया, तो ये दुआ करो:
            </p>
          </div>
          
          <div className="bg-gray-700/30 rounded-lg p-4">
            <p className="text-2xl text-white mb-2 text-center" dir="rtl">
              اَللَّهُمَّ اِنَّكَ عَفُوٌّ ، تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
            </p>
            <p className="text-yellow-300 text-lg font-semibold text-center mb-2">
              "अलाहुम्मा इन्नका 'अफुव्वुन तुहिब्बुल - 'अफवा फा'अफु 'अन्नी"
            </p>
          </div>
          
          <div className="bg-blue-900/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-2">शब-ए-क़द्र (लेलातुल क़द्र) दुआ का तर्जुमा</h4>
            <p className="text-gray-300">
              ऐ अल्लाह तू माफ़ करने वाला हैं, माफ़ करने को पसन्द करता हैं, पास तू मुझे माफ़ कर दे|
            </p>
            <p className="text-sm text-gray-400 mt-2">अत-तिर्मिज़ी | सुनन इब्न माजह न. 3850</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-900/20 backdrop-blur-md rounded-xl p-6 border border-emerald-600/30">
        <div className="text-center">
          <p className="text-emerald-400 font-semibold text-lg mb-2">
            खास रात की खास बातें सबको बताएं! सदक़ा-ए-जरिया की निय्यत से पोस्ट लाज़मी शेयर करें।
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
        <h2 className="text-3xl font-bold text-white mb-2">Surah Qadr In Hindi Transliteration And Translation</h2>
        <p className="text-xl text-gray-300 mb-4">सूरह क़द्र हिंदी तर्जुमा के साथ</p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <span>सूरह 97</span>
          <span>5 आयतें</span>
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
                    {verse.arabic}
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

  const renderFazilat = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-600/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-yellow-500 mr-3">⭐</span>
          Surah Qadr Ki Fazilat Kya Hai? | सूरह क़द्र की फ़ज़ीलत क्या है?
        </h2>
        <p className="text-gray-300">उल्लमा के बयानात के मुताबिक इस सूरह को पढ़ने के बहुत से फायदे पाए गए है।</p>
      </div>

      <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-6 border border-blue-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-blue-400 mr-2">🌙</span>
          Shabe Qadr Mein (Nafil Namaz) Kya Padhna Chahiye? | शबे क़द्र में (नफिल् नमाज़) क्या पढ़ना चाहिए?
        </h3>
        <p className="text-gray-300">शबे क़द्र में शबे क़द्र की दुआ के साथ निफ्लि इबादतों का भी अमल करना चाहिए। हदीस में आता है कायम करें। फ़र्ज़ नमाज़ों के साथ निफिल् नमाज़ पढ़ कर भी इस रात का एहतमाम करें।</p>
      </div>

      <div className="bg-green-900/20 backdrop-blur-md rounded-xl p-6 border border-green-600/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <span className="text-green-400 mr-2">🤲</span>
          Shabe Ki Dua Kya Hai? | शबे क़द्र की दुआ क्या है?
        </h3>
        <div className="space-y-4">
          <p className="text-gray-300">नबी ए करीम ﷺ की बताई हुई शबे क़द्र (लेलातुल क़द्र) की ख़ास दुआ। शबे क़द्र की रात में इस दुआ का विर्द खास तौर पर करना चाहिए। ये उस रात के लिए बहुत ही अफ़ज़ल दुआ है।</p>
          
          <div className="bg-gray-700/30 rounded-lg p-4">
            <p className="text-2xl text-white mb-2 text-center" dir="rtl">
              اَللَّهُمَّ اِنَّكَ عَفُوٌّ ، تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
            </p>
            <p className="text-yellow-300 text-lg font-semibold text-center mb-2">
              "अलाहुम्मा इन्नका 'अफुव्वुन तुहिब्बुल - 'अफवा फा'अफु 'अन्नी"
            </p>
            <p className="text-gray-300 text-center">
              ऐ अल्लाह तू माफ़ करने वाला हैं, माफ़ करने को पसन्द करता हैं, पास तू मुझे माफ़ कर दे|
            </p>
          </div>
          
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
            <h4 className="text-green-400 font-semibold mb-2">हदीस का मफहूम</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              हज़रत आईशा र.अ. से रिवायत है के उन्होंने आप ﷺ से अर्ज़ किया: "या रसूल अल्लाह अगर मैं लेलातुल क़द्र पालूँ तो क्या दुआ मांगों?" तो आप ﷺ ने फरमाया, तो ये दुआ करो: - अत-तिर्मिज़ी | सुनन इब्न माजह न. 3850
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction': return renderIntroduction();
      case 'surah': return renderSurah();
      case 'fazilat': return renderFazilat();
      case 'wazifa': return renderWazifa();
      case 'roman': return renderRoman();
      default: return renderIntroduction();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">सूरह क़द्र</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Surah Al-Qadr - The Night of Power</p>
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

export default SurahQadr;