import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Wazifa for Success",
      icon: "🤲",
      description: "Powerful Islamic supplications for achieving success in life",
      details: "Recite 'Rabbana atina fi'd-dunya hasanatan wa fi'l-akhirati hasanatan wa qina 'adhab an-nar' 100 times after Fajr prayer for 40 days."
    },
    {
      id: 2,
      title: "Namaz Timings",
      icon: "🕌",
      description: "Daily prayer times and guidance for proper worship",
      details: "Five daily prayers: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), Isha (night). Each prayer has specific timings based on sun position."
    },
    {
      id: 3,
      title: "Dua for Health",
      icon: "💚",
      description: "Healing prayers for physical and spiritual wellness",
      details: "Recite 'Allahumma rabbi'n-nas, adhib al-ba's, washfi anta'sh-shafi, la shifa'a illa shifa'uk, shifa'an la yughadiru saqaman' for healing."
    },
    {
      id: 4,
      title: "Zakat Calculator",
      icon: "💰",
      description: "Calculate your obligatory charity according to Islamic law",
      details: "Zakat is 2.5% of your savings held for one lunar year. Minimum threshold (Nisab) is equivalent to 87.48 grams of gold or 612.36 grams of silver."
    },
    {
      id: 5,
      title: "Hajj Guide",
      icon: "🕋",
      description: "Complete guidance for the pilgrimage to Mecca",
      details: "Hajj consists of Ihram, Tawaf, Sa'i, Wuquf at Arafat, Muzdalifah, Ramy al-Jamarat, and Tawaf al-Ifadah. Must be performed once in lifetime if able."
    },
    {
      id: 6,
      title: "Quran Recitation",
      icon: "📖",
      description: "Learn proper pronunciation and tajweed rules",
      details: "Start with Al-Fatiha, practice Arabic letters, learn tajweed rules for proper pronunciation. Recite daily for spiritual benefit and reward."
    },
    {
      id: 7,
      title: "Islamic Calendar",
      icon: "📅",
      description: "Important Islamic dates and lunar calendar",
      details: "Islamic calendar is lunar-based with 12 months. Important dates include Ramadan, Eid al-Fitr, Eid al-Adha, and the 10 days of Dhul Hijjah."
    },
    {
      id: 8,
      title: "Tasbih Counter",
      icon: "📿",
      description: "Digital counter for dhikr and remembrance of Allah",
      details: "Use for counting SubhanAllah (33x), Alhamdulillah (33x), Allahu Akbar (34x) after each prayer. Total 100 dhikr brings great reward."
    },
    {
      id: 9,
      title: "Dua for Marriage",
      icon: "💍",
      description: "Prayers for finding righteous spouse and blessed marriage",
      details: "Recite 'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin wa'j'alna li'l-muttaqina imaman' for righteous spouse and offspring."
    },
    {
      id: 10,
      title: "Fasting Guide",
      icon: "🌙",
      description: "Rules and benefits of Islamic fasting",
      details: "Ramadan fasting from dawn to sunset. Suhur (pre-dawn meal) and Iftar (breaking fast). Avoid food, drink, and marital relations during daylight."
    },
    {
      id: 11,
      title: "Wudu Guide",
      icon: "💧",
      description: "Step-by-step ablution for prayer preparation",
      details: "Wash hands 3x, rinse mouth 3x, rinse nose 3x, wash face 3x, wash arms to elbows 3x, wipe head once, wash feet to ankles 3x."
    },
    {
      id: 12,
      title: "Istighfar Collection",
      icon: "🤍",
      description: "Seeking forgiveness from Allah through various supplications",
      details: "Recite 'Astaghfirullaha rabbi min kulli dhanbin wa atubu ilayh' frequently. Also 'Rabbighfirli wa tub alayya innaka anta't-tawwabu'r-rahim'."
    }
  ];

  return (
    <div className="relative w-full">
      <Navbar />
      <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-20 sm:pt-24 pb-4 sm:pb-6 lg:pb-8 px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          Islamic Services
        </h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              onClick={() => setSelectedService(service)}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-xl shadow-xl p-3 sm:p-4 border border-gray-600/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer text-center hover:from-gray-700/90 hover:to-gray-800/90"
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{service.icon}</div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white mb-1 sm:mb-2 leading-tight">{service.title}</h3>
              <p className="text-xs text-gray-300 leading-tight">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Modal for service details */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedService(null)}>
            <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl p-4 sm:p-6 max-w-md w-full border border-gray-600/30" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{selectedService.icon}</span>
                  <h2 className="text-lg sm:text-xl font-bold text-white">{selectedService.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-200 text-xl font-bold cursor-pointer"
                >
                  ×
                </button>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">{selectedService.description}</p>
              <div className="border-t border-gray-600/30 pt-4">
                <h3 className="font-semibold text-white mb-2">Details:</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{selectedService.details}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;