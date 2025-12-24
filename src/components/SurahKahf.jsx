import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const SurahKahf = () => {
  const [showFullSurah, setShowFullSurah] = useState(false);

  const verses = [
    {
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا",
      hindi: "हर तरह की तारीफ ख़ुदा ही को (सज़ावार) है जिसने अपने बन्दे (मोहम्मद) पर किताब (क़ुरान) नाज़िल की और उसमें किसी तरह की कज़ी (ख़राबी) न रखी",
      verse: 1
    },
    {
      arabic: "قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ وَيُبَشِّرَ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا",
      hindi: "बल्कि हर तरह से सधा ताकि जो सख्त अज़ाब ख़ुदा की बारगाह से काफिरों पर नाज़िल होने वाला है उससे लोगों को डराए और जिन मोमिनीन ने अच्छे अच्छे काम किए हैं उनको इस बात की खुशख़बरी दे की उनके लिए बहुत अच्छा अज्र (व सवाब) मौजूद है",
      verse: 2
    },
    {
      arabic: "مَّاكِثِينَ فِيهِ أَبَدًا",
      hindi: "जिसमें वह हमेशा (बाइत्मेनान) तमाम रहेगें",
      verse: 3
    },
    {
      arabic: "وَيُنذِرَ الَّذِينَ قَالُوا اتَّخَذَ اللَّهُ وَلَدًا",
      hindi: "और जो लोग इसके क़ाएल हैं कि ख़ुदा औलाद रखता है उनको (अज़ाब से) डराओ",
      verse: 4
    },
    {
      arabic: "مَّا لَهُم بِهِ مِنْ عِلْمٍ وَلَا لِآبَائِهِمْ ۚ كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَاهِهِمْ ۚ إِن يَقُولُونَ إِلَّا كَذِبًا",
      hindi: "न तो उन्हीं को उसकी कुछ खबर है और न उनके बाप दादाओं ही को थी (ये) बड़ी सख्त बात है जो उनके मुँह से निकलती है ये लोग झूठ मूठ के सिवा (कुछ और) बोलते ही नहीं",
      verse: 5
    },
    {
      arabic: "فَلَعَلَّكَ بَاخِعٌ نَّفْسَكَ عَلَىٰ آثَارِهِمْ إِن لَّمْ يُؤْمِنُوا بِهَٰذَا الْحَدِيثِ أَسَفًا",
      hindi: "तो (ऐ रसूल) अगर ये लोग इस बात को न माने तो यायद तुम मारे अफसोस के उनके पीछे अपनी जान दे डालोगे",
      verse: 6
    },
    {
      arabic: "إِنَّا جَعَلْنَا مَا عَلَى الْأَرْضِ زِينَةً لَّهَا لِنَبْلُوَهُمْ أَيُّهُمْ أَحْسَنُ عَمَلًا",
      hindi: "और जो कुछ रुए ज़मीन पर है हमने उसकी ज़ीनत (रौनक़) क़रार दी ताकि हम लोगों का इम्तिहान लें कि उनमें से कौन सबसे अच्छा चलन का है",
      verse: 7
    },
    {
      arabic: "وَإِنَّا لَجَاعِلُونَ مَا عَلَيْهَا صَعِيدًا جُرُزًا",
      hindi: "और (फिर) हम एक न एक दिन जो कुछ भी इस पर है (सबको मिटा करके) चटियल मैदान बना देगें",
      verse: 8
    },
    {
      arabic: "أَمْ حَسِبْتَ أَنَّ أَصْحَابَ الْكَهْفِ وَالرَّقِيمِ كَانُوا مِنْ آيَاتِنَا عَجَبًا",
      hindi: "(ऐ रसूल) क्या तुम ये ख्याल करते हो कि असहाब कहफ व रक़ीम (खोह) और (तख्ती वाले) हमारी (क़ुदरत की) निशानियों में से एक अजीब (निशानी) थे",
      verse: 9
    },
    {
      arabic: "إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
      hindi: "कि एक बारगी कुछ जवान ग़ार में आ पहुँचे और दुआ की-ऐ हमारे परवरदिगार हमें अपनी बारगाह से रहमत अता फरमा-और हमारे वास्ते हमारे काम में कामयाबी इनायत कर",
      verse: 10
    },
    {
      arabic: "فَضَرَبْنَا عَلَىٰ آذَانِهِمْ فِي الْكَهْفِ سِنِينَ عَدَدًا",
      hindi: "तब हमने कई बरस तक ग़ार में उनके कानों पर पर्दे डाल दिए (उन्हें सुला दिया)",
      verse: 11
    },
    {
      arabic: "ثُمَّ بَعَثْنَاهُمْ لِنَعْلَمَ أَيُّ الْحِزْبَيْنِ أَحْصَىٰ لِمَا لَبِثُوا أَمَدًا",
      hindi: "फिर हमने उन्हें चौकाया ताकि हम देखें कि दो गिरोहों में से किसी को (ग़ार में) ठहरने की मुद्दत खूब याद है",
      verse: 12
    },
    {
      arabic: "نَّحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُم بِالْحَقِّ ۚ إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى",
      hindi: "(ऐ रसूल) अब हम उनका हाल तुमसे बिल्कुल ठीक तहक़ीक़ातन (यक़ीन के साथ) बयान करते हैं वह चन्द जवान थे कि अपने (सच्चे) परवरदिगार पर ईमान लाए थे और हम ने उनकी सोच समझ और ज्यादा कर दी है",
      verse: 13
    },
    {
      arabic: "وَرَبَطْنَا عَلَىٰ قُلُوبِهِمْ إِذْ قَامُوا فَقَالُوا رَبُّنَا رَبُّ السَّمَاوَاتِ وَالْأَرْضِ لَن نَّدْعُوَ مِن دُونِهِ إِلَٰهًا ۖ لَّقَدْ قُلْنَا إِذًا شَطَطًا",
      hindi: "और हमने उनकी दिलों पर (सब्र व इस्तेक़लाल की) गिराह लगा दी (कि जब दक़ियानूस बादशाह ने कुफ्र पर मजबूर किया) तो उठ खड़े हुए (और बे ताम्मुल (खटके)) कहने लगे हमारा परवरदिगार तो बस सारे आसमान व ज़मीन का मालिक है हम तो उसके सिवा किसी माबूद की हरगिज़ इबादत न करेगें",
      verse: 14
    }
  ];

  return (
    <div className="relative w-full">
      <Navbar />
      <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-20 sm:pt-24 pb-4 sm:pb-6 lg:pb-8 px-2 sm:px-4 lg:px-6">
        <div className="max-w-4xl mx-auto p-6 bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl border border-gray-600/30">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">सूरह कहफ़ (Surah Al-Kahf)</h1>
        <div className="bg-gray-700/30 p-4 rounded-lg mb-4 border border-gray-600/30">
          <p className="text-white font-semibold mb-2">जुमाह के दिन सूरह कहफ़ की तिलावत करना बहुत हि अफ़ज़ल माना गया है।</p>
          <p className="text-gray-300 text-sm">अगर अपनी जिंदगी के मुआमलात में अल्लाह पाक तरफ से हिदायत चाहते है तो इस सूरह की जुमाह के दिन ज़रूर करें।</p>
        </div>
        
        {/* Hadith */}
        <div className="bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="font-semibold text-green-400 mb-2">हदीस का मफहूम</h3>
          <p className="text-gray-300 italic mb-2">
            "जो कोई जुमह के दिन सूरतुल कहफ़ की तिलावत करे तो अल्लाह त'आला इसे लिए दो जुमह के दरमियाँ नूर रौशन कर देगा।"
          </p>
          <p className="text-gray-300 text-sm">अल मुसतदरक अलस सलिहीन लिल हाकिम, हदीस न. 3392</p>
        </div>
      </div>

      {/* Bismillah */}
      <div className="text-center mb-6 p-4 bg-gray-700/30 rounded-lg shadow-sm border border-gray-600/30">
        <p className="arabic-text text-gray-400 text-xl mb-2">أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</p>
        <p className="arabic-text text-white text-2xl mb-2">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p className="text-gray-300 text-sm">शुरू करता हूँ अल्लाह के नाम से जो बड़ा मेहरबान नुहायत रहम वाला है</p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        {verses.slice(0, showFullSurah ? verses.length : 5).map((verse, index) => (
          <div key={index} className="bg-gray-800/60 p-6 rounded-lg shadow-sm border-l-4 border-green-500 backdrop-blur-md border border-gray-600/30">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                आयत {verse.verse}
              </span>
            </div>
            
            <div className="space-y-4">
              <p className="arabic-text text-white text-lg leading-relaxed">
                {verse.arabic}
              </p>
              
              <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600/30">
                <p className="text-gray-300 leading-relaxed">
                  {verse.hindi}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setShowFullSurah(!showFullSurah)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          {showFullSurah ? 'कम दिखाएं' : 'पूरी सूरह पढ़ें'}
        </button>
      </div>

      {/* Benefits */}
      <div className="mt-8 bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 backdrop-blur-sm">
        <h3 className="font-semibold text-green-400 mb-3">फायदे:</h3>
        <ul className="text-gray-300 space-y-2 text-sm">
          <li>• दो जुमाह के बीच नूर (रौशनी) मिलती है</li>
          <li>• अल्लाह की तरफ से हिदायत मिलती है</li>
          <li>• गुमराही से बचाव होता है</li>
          <li>• जिंदगी में रौशनी आती है</li>
        </ul>
      </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SurahKahf;