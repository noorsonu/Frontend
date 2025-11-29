import React from 'react';

const DuasPage = () => {
  const duaCategories = [
    {
      category: "Morning Duas",
      icon: "🌅",
      gradient: "from-orange-600/20 to-yellow-600/20",
      border: "border-orange-500/30",
      duas: [
        {
          arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
          transliteration: "Asbahna wa asbahal mulku lillah",
          translation: "We have reached the morning and at this very time unto Allah belongs all sovereignty"
        },
        {
          arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا",
          transliteration: "Allahumma bika asbahna wa bika amsayna",
          translation: "O Allah, by Your leave we have reached the morning and by Your leave we have reached the evening"
        }
      ]
    },
    {
      category: "Evening Duas",
      icon: "🌙",
      gradient: "from-purple-600/20 to-indigo-600/20",
      border: "border-purple-500/30",
      duas: [
        {
          arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ",
          transliteration: "Amsayna wa amsal mulku lillah",
          translation: "We have reached the evening and at this very time unto Allah belongs all sovereignty"
        },
        {
          arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
          transliteration: "Allahumma a'inni ala dhikrika wa shukrika wa husni ibadatik",
          translation: "O Allah, help me remember You, to be grateful to You, and to worship You in an excellent manner"
        }
      ]
    },
    {
      category: "Travel Duas",
      icon: "✈️",
      gradient: "from-blue-600/20 to-cyan-600/20",
      border: "border-blue-500/30",
      duas: [
        {
          arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
          transliteration: "Subhanal ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin",
          translation: "Glory be to Him who has subjected this to us, and we could never have it by our efforts"
        }
      ]
    },
    {
      category: "Food Duas",
      icon: "🍽️",
      gradient: "from-green-600/20 to-emerald-600/20",
      border: "border-green-500/30",
      duas: [
        {
          arabic: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
          transliteration: "Bismillahi wa ala barakatillah",
          translation: "In the name of Allah and with the blessings of Allah"
        },
        {
          arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",
          transliteration: "Alhamdulillahil ladhi at'amana wa saqana",
          translation: "Praise be to Allah who gave us food and drink"
        }
      ]
    },
    {
      category: "Protection Duas",
      icon: "🛡️",
      gradient: "from-red-600/20 to-rose-600/20",
      border: "border-red-500/30",
      duas: [
        {
          arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
          transliteration: "A'udhu bi kalimatillahit tammati min sharri ma khalaq",
          translation: "I seek refuge in the perfect words of Allah from the evil of what He has created"
        }
      ]
    },
    {
      category: "Forgiveness Duas",
      icon: "🤲",
      gradient: "from-violet-600/20 to-purple-600/20",
      border: "border-violet-500/30",
      duas: [
        {
          arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
          transliteration: "Astaghfirullaha al-azeem alladhi la ilaha illa huwal hayyul qayyumu wa atubu ilaih",
          translation: "I seek forgiveness of Allah the Mighty, whom there is none worthy of worship except Him, the Living, the Eternal, and I repent unto Him"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          Islamic Duas Collection
        </h1>

        <div className="space-y-8">
          {duaCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`bg-gradient-to-br ${category.gradient} backdrop-blur-md rounded-xl p-6 border ${category.border}`}>
              <h2 className="text-2xl font-semibold text-white mb-6 text-center flex items-center justify-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <span>{category.category}</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {category.duas.map((dua, duaIndex) => (
                  <div key={duaIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-center mb-4">
                      <p className="text-xl font-arabic text-white mb-3 leading-relaxed" dir="rtl">
                        {dua.arabic}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-gray-200 text-sm italic">
                        <strong>Transliteration:</strong> {dua.transliteration}
                      </p>
                      <p className="text-gray-300 text-sm">
                        <strong>Translation:</strong> {dua.translation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-br from-gold-600/20 to-amber-600/20 backdrop-blur-md rounded-xl p-6 border border-amber-500/30">
            <p className="text-white text-lg mb-2">
              "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me."
            </p>
            <p className="text-amber-300 text-sm">
              - Quran 2:186
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuasPage;