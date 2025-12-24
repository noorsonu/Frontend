import React, { useState, useEffect } from 'react';

const IslamicQuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    {
      text: "और अल्लाह के लिए सब्र करो, निश्चय अल्लाह सब्र करने वालों के साथ है।",
      reference: "क़ुरान 2:153",
      arabic: "وَاصْبِرُوا إِنَّ اللَّهَ مَعَ الصَّابِرِينَ"
    },
    {
      text: "जो व्यक्ति अल्लाह पर भरोसा करता है, अल्लाह उसके लिए काफी है।",
      reference: "क़ुरान 65:3",
      arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ"
    },
    {
      text: "अल्लाह की याद से दिल को सुकून मिलता है।",
      reference: "क़ुरान 13:28",
      arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ"
    },
    {
      text: "और जो अल्लाह से डरता है, अल्लाह उसके लिए निकास बना देता है।",
      reference: "क़ुरान 65:2",
      arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="relative bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border border-teal-400 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-cyan-400 rounded-lg rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-4">
          <span className="text-emerald-400 text-2xl">🕌</span>
        </div>
        
        <div className="transition-all duration-1000 ease-in-out">
          <p className="text-emerald-300 text-lg font-arabic mb-3 leading-relaxed">
            {quotes[currentQuote].arabic}
          </p>
          <p className="text-white text-base mb-3 leading-relaxed">
            {quotes[currentQuote].text}
          </p>
          <p className="text-emerald-400 text-sm font-semibold">
            - {quotes[currentQuote].reference}
          </p>
        </div>

        {/* Quote Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentQuote 
                  ? 'bg-emerald-400 w-6' 
                  : 'bg-emerald-600/50 hover:bg-emerald-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IslamicQuoteCarousel;