import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const SurahWaqiah = () => {
  const [showFullSurah, setShowFullSurah] = useState(false);

  const verses = [
    {
      arabic: "إِذَا وَقَعَتِ الْوَاقِعَةُ",
      hindi: "इज़ा व क़ 'अतिल वाक़िअह",
      translation: "उस वक़्त को याद करो जब क़यामत वाक़े हो जाएगी",
      verse: 1
    },
    {
      arabic: "لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ",
      hindi: "लैसा लिवक़ 'अतिहा काज़िबह",
      translation: "जिस के वाक़े होने में कोई झूट नहीं",
      verse: 2
    },
    {
      arabic: "خَافِضَةٌ رَّافِعَةٌ",
      hindi: "ख़ा-फिज़तुर राफि अह",
      translation: "किसी को नीचा करेगी और किसी को ऊंचा",
      verse: 3
    },
    {
      arabic: "إِذَا رُجَّتِ الْأَرْضُ رَجًّا",
      hindi: "इज़ा रुज्जतिल अरज़ु रज्जा",
      translation: "जब ज़मीन हिला कर रख दी जाएगी",
      verse: 4
    },
    {
      arabic: "وَبُسَّتِ الْجِبَالُ بَسًّا",
      hindi: "व बुस्सतिल जिबालु बस्सा",
      translation: "और पहाड़ पीस कर रख दिए जायेंगे",
      verse: 5
    },
    {
      arabic: "فَكَانَتْ هَبَاءً مُّنبَثًّا",
      hindi: "फकानत हबा अम मुम्बस्सा",
      translation: "तो वो उड़ता हुआ गुबार बन जायेंगे",
      verse: 6
    },
    {
      arabic: "وَكُنتُمْ أَزْوَاجًا ثَلَاثَةً",
      hindi: "व कुन्तुम अज़वाजन सलासह",
      translation: "और तुम तीन किस्मों में बंट जाओगे",
      verse: 7
    },
    {
      arabic: "فَأَصْحَابُ الْمَيْمَنَةِ مَا أَصْحَابُ الْمَيْمَنَةِ",
      hindi: "फ अस-हाबुल मइ मनति मा अस हाबुल मयइ मनह",
      translation: "(एक) तो दाहिनी तरफ़ वाले, क्या कहने दाहिनी तरफ़ वालों के",
      verse: 8
    },
    {
      arabic: "وَأَصْحَابُ الْمَشْأَمَةِ مَا أَصْحَابُ الْمَشْأَمَةِ",
      hindi: "व अस हा-बुल मश अ-म-ति मा अस हाबुल मश अमह",
      translation: "(दुसरे) बायीं तरफ़ वाले, बायीं तरफ़ वाले कैसे बुरे हाल में होंगे",
      verse: 9
    },
    {
      arabic: "وَالسَّابِقُونَ السَّابِقُونَ",
      hindi: "वस सा-बिक़ू नस सा-बिक़ून",
      translation: "(तीसरे) आगे बढ़ जाने वाले, (उन का क्या कहना) वो तो आगे बढ़ जाने वाले हैं",
      verse: 10
    },
    {
      arabic: "أُولَٰئِكَ الْمُقَرَّبُونَ",
      hindi: "उला इकल मुक़र्रबून",
      translation: "यही हैं जिनको अल्लाह से ख़ुसूसी नज़दीकी हासिल होगी",
      verse: 11
    },
    {
      arabic: "فِي جَنَّاتِ النَّعِيمِ",
      hindi: "फ़ी जन्नातिन न'ईम",
      translation: "वो ने'अमतों वाले बाग़ों में होंगे",
      verse: 12
    },
    {
      arabic: "ثُلَّةٌ مِّنَ الْأَوَّلِينَ",
      hindi: "सुल्लतुम मिनल अव्वलीन",
      translation: "उन का एक बड़ा गिरोह तो अगले लोगों में होगा",
      verse: 13
    },
    {
      arabic: "وَقَلِيلٌ مِّنَ الْآخِرِينَ",
      hindi: "व क़-लीलुम मिनल आ-ख़िरीन",
      translation: "और थोड़े से पिछले लोगों में होंगे",
      verse: 14
    },
    {
      arabic: "عَلَىٰ سُرُرٍ مَّوْضُونَةٍ",
      hindi: "'अला सुरुरिम मौ-ज़ूनह",
      translation: "ऐसी मसेहरियों पर जो सोने से बुनी और जवाहरात से जड़ी होंगी",
      verse: 15
    },
    {
      arabic: "مُّتَّكِئِينَ عَلَيْهَا مُتَقَابِلِينَ",
      hindi: "मुत्तकि ईना 'अलैहा मु-त-क़ाबिलीन",
      translation: "उन पर आमने सामने टेक लगाये हुए बैठे होंगे",
      verse: 16
    },
    {
      arabic: "يَطُوفُ عَلَيْهِمْ وِلْدَانٌ مُّخَلَّدُونَ",
      hindi: "यतू-फु 'अलैहिम विल्दानुम मुख़ल-लदून",
      translation: "उन की ख़िदमत में ऐसे लड़के जो हमेशा लड़के ही रहेंगे वो उनके पास आते जाते रहेंगे",
      verse: 17
    },
    {
      arabic: "بِأَكْوَابٍ وَأَبَارِيقَ وَكَأْسٍ مِّن مَّعِينٍ",
      hindi: "बिअक्वाबिव व अबा-रीक़ा व कअसिम मिम म'ईन",
      translation: "ग्लासों और जगों में साफ़ सुथरी शराब के जाम लिए हुए",
      verse: 18
    },
    {
      arabic: "لَّا يُصَدَّعُونَ عَنْهَا وَلَا يُنزِفُونَ",
      hindi: "ला युसद-द 'ऊना 'अन्हा वला युन्ज़िफून",
      translation: "ऐसी शराब जिससे न उनके सर चकरायेंगे और न उनके होश उड़ेंगे",
      verse: 19
    },
    {
      arabic: "وَفَاكِهَةٍ مِّمَّا يَتَخَيَّرُونَ",
      hindi: "व फाकि-हतिम मिम्मा य-त खै-यरून",
      translation: "और ऐसे मेवे लिए हुए जिनको वो खुद पसंद करेंगे",
      verse: 20
    }
  ];

  const moreVerses = [
    {
      arabic: "وَلَحْمِ طَيْرٍ مِّمَّا يَشْتَهُونَ",
      hindi: "वलहमि तैरिम मिम्मा यश तहून",
      translation: "और ऐसे परिंदों का गोश्त लिए जिनकी उन्हें ख्वाहिश होगी",
      verse: 21
    },
    {
      arabic: "وَحُورٌ عِينٌ",
      hindi: "व हूरून 'ईन",
      translation: "और खूबसूरत आँखों वाली हूरें",
      verse: 22
    },
    {
      arabic: "كَأَمْثَالِ اللُّؤْلُؤِ الْمَكْنُونِ",
      hindi: "क अम्सा लिल लुअलुइल मक्नून",
      translation: "जैसे छिपा छिपा कर रखे गए मोती",
      verse: 23
    },
    {
      arabic: "جَزَاءً بِمَا كَانُوا يَعْمَلُونَ",
      hindi: "जज़ा अम बिमा कानू यअ-मलून",
      translation: "ये सब उनके कामों के बदले के तौर पर होगा जो वो किया करते थे",
      verse: 24
    },
    {
      arabic: "لَا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا تَأْثِيمًا",
      hindi: "ला यस्मऊना फ़ीहा लग्वव वला तअ-सीमा",
      translation: "वो न उस में बेकार बातें सुनेंगे और न ही कोई गुनाह की बात",
      verse: 25
    },
    {
      arabic: "إِلَّا قِيلًا سَلَامًا سَلَامًا",
      hindi: "इल्ला क़ीलन सलामन सलामा",
      translation: "सिवाए सलामती ही सलामती की बात के",
      verse: 26
    },
    {
      arabic: "وَأَصْحَابُ الْيَمِينِ مَا أَصْحَابُ الْيَمِينِ",
      hindi: "व अस-हाबुल य-मीनि मा अस-हाबुल यमीन",
      translation: "और जो दायें तरफ वाले हैं, क्या खूब हैं दायें तरफ वाले",
      verse: 27
    },
    {
      arabic: "فِي سِدْرٍ مَّخْضُودٍ",
      hindi: "फ़ी सिदरिम मख़-ज़ूद",
      translation: "काँटों से पाक सिदरा के दरख्तों में",
      verse: 28
    },
    {
      arabic: "وَطَلْحٍ مَّنضُودٍ",
      hindi: "व तल-हिम मन्ज़ुद",
      translation: "लदे हुए केले के पेड़ों में",
      verse: 29
    },
    {
      arabic: "وَظِلٍّ مَّمْدُودٍ",
      hindi: "व ज़िल्लिम मम-दूद",
      translation: "और फैले हुए साये में",
      verse: 30
    },
    {
      arabic: "وَمَاءٍ مَّسْكُوبٍ",
      hindi: "वमा इम मस्कूब",
      translation: "और बहते हुए पानी में",
      verse: 31
    },
    {
      arabic: "وَفَاكِهَةٍ كَثِيرَةٍ",
      hindi: "व फा-कि-हतिन कसीरह",
      translation: "और बहुत से फलों में",
      verse: 32
    },
    {
      arabic: "لَّا مَقْطُوعَةٍ وَلَا مَمْنُوعَةٍ",
      hindi: "ला मक़्तू 'अतिव वला ममनू'अह",
      translation: "जो न ख़त्म होने को आयेंगे और न उन में कोई रोक टोक होगी",
      verse: 33
    },
    {
      arabic: "وَفُرُشٍ مَّرْفُوعَةٍ",
      hindi: "व फुरुशिम मर फू-अह",
      translation: "और बलंद बिस्तरों में",
      verse: 34
    },
    {
      arabic: "إِنَّا أَنشَأْنَاهُنَّ إِنشَاءً",
      hindi: "इन्ना अनशअ नाहुन्ना इंशा-आ",
      translation: "हम ने (उन के लिए) हूरें बनाई हैं",
      verse: 35
    },
    {
      arabic: "فَجَعَلْنَاهُنَّ أَبْكَارًا",
      hindi: "फ-ज अल्नाहुन्ना अब्कारा",
      translation: "तो हम ने उनको कुंवारी बनाया है",
      verse: 36
    },
    {
      arabic: "عُرُبًا أَتْرَابًا",
      hindi: "उरुबन अतराबा",
      translation: "मुहब्बत भरी हमजोलियाँ",
      verse: 37
    },
    {
      arabic: "لِّأَصْحَابِ الْيَمِينِ",
      hindi: "लि अस्हाबिल यमीन",
      translation: "ये है दायें तरफ वालों के लिए",
      verse: 38
    },
    {
      arabic: "ثُلَّةٌ مِّنَ الْأَوَّلِينَ",
      hindi: "सुल्लतुम मिनल अव्वलीन",
      translation: "उनकी एक बड़ी जमात अगले लोगों में है",
      verse: 39
    },
    {
      arabic: "وَثُلَّةٌ مِّنَ الْآخِرِينَ",
      hindi: "वसुल्लतुम मिनल आ-खिरीन",
      translation: "उनकी एक बड़ी जमात पिछले लोगों में है",
      verse: 40
    },
    {
      arabic: "وَأَصْحَابُ الشِّمَالِ مَا أَصْحَابُ الشِّمَالِ",
      hindi: "व अस्हाबुश शिमा-लि मा अस्हाबुश शि-माल",
      translation: "और बाएं तरफ वाले, क्या हाल होगा बाएं तरफ वालों का",
      verse: 41
    },
    {
      arabic: "فِي سَمُومٍ وَحَمِيمٍ",
      hindi: "फ़ी समूमिव व हमीम",
      translation: "वो होंगे झुलसा देने वाली हवा में और खौलते पानी में",
      verse: 42
    },
    {
      arabic: "وَظِلٍّ مِّن يَحْمُومٍ",
      hindi: "व ज़िल्लिम मिय यहमूम",
      translation: "सियाह धुएं के साए में",
      verse: 43
    },
    {
      arabic: "لَّا بَارِدٍ وَلَا كَرِيمٍ",
      hindi: "ला बारिदिव-वला करीम",
      translation: "जो न ठंडा होगा और न फायदा पहुँचाने वाला होगा",
      verse: 44
    }
  ];

  const allVerses = [...verses, ...moreVerses];

  return (
    <div className="relative w-full">
      <Navbar />
      <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-20 sm:pt-24 pb-4 sm:pb-6 lg:pb-8 px-2 sm:px-4 lg:px-6">
        <div className="max-w-4xl mx-auto p-6 bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl border border-gray-600/30">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">सूरह अल वाक़िया (Surah Al-Waqiah)</h1>
            
            <div className="bg-gray-700/30 p-4 rounded-lg mb-4 border border-gray-600/30">
              <p className="text-white font-semibold mb-2">सूरह अल वाक़िया हिंदी तर्जुमे के साथ</p>
              <p className="text-gray-300 text-sm">Is post mein Quran shareef ki Surah Waqiah in hindi milegi, jisse Quran shareef ki meaning aap behtar tareeqe se samajh payenge.</p>
            </div>

            {/* Surah Info */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-600/30">
                <h3 className="text-white font-semibold mb-2">📍 मक्की या मदनी?</h3>
                <p className="text-gray-300 text-sm">सूरह अल वाक़िया मक्की सूरह है।</p>
              </div>
              
              <div className="bg-green-900/20 p-4 rounded-lg border border-green-600/30">
                <h3 className="text-white font-semibold mb-2">🔢 आयतों की संख्या</h3>
                <p className="text-gray-300 text-sm">सूरह अल वाक़िया में 96 आयतें है।</p>
              </div>
              
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-600/30">
                <h3 className="text-white font-semibold mb-2">📖 पारा नंबर</h3>
                <p className="text-gray-300 text-sm">सूरह अल वाक़िया पारह न. 27 में है।</p>
              </div>
              
              <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-600/30">
                <h3 className="text-white font-semibold mb-2">📋 सूरह नंबर</h3>
                <p className="text-gray-300 text-sm">सूरह अल वाक़िया सूरह न. यानी चेपटर न. 56 है।</p>
              </div>
            </div>
          </div>

          {/* Bismillah */}
          <div className="text-center mb-6 p-4 bg-gray-700/30 rounded-lg shadow-sm border border-gray-600/30">
            <p className="arabic-text text-gray-400 text-xl mb-2">أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</p>
            <p className="arabic-text text-white text-2xl mb-2">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <p className="text-gray-300 text-sm">'अ 'ऊजु बिल्लाहि मिनश शैतानिर रजीम, बिस्मिल्ला हिररहमानिर रहीम</p>
          </div>

          {/* Verses */}
          <div className="space-y-6">
            {(showFullSurah ? allVerses : verses).map((verse, index) => (
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
                    <p className="text-yellow-300 text-lg font-semibold mb-2">
                      "{verse.hindi}"
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      * {verse.translation}
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
              {showFullSurah ? 'कम दिखाएं' : 'पूरी सूरह पढ़ें (96 आयतें)'}
            </button>
          </div>

          {/* Note */}
          <div className="mt-8 bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 backdrop-blur-sm">
            <h3 className="font-semibold text-green-400 mb-3">नोट:</h3>
            <p className="text-gray-300 text-sm">
              यह सूरह अल वाक़िया का हिंदी तर्जुमा है। पूरी सूरह में 96 आयतें हैं। यहाँ पहली 44 आयतें दी गई हैं। 
              "पूरी सूरह पढ़ें" बटन दबाकर बाकी आयतें भी पढ़ सकते हैं।
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SurahWaqiah;