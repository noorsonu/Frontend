import React, { useState, useEffect } from 'react';

const IslamicQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose.",
      reference: "Quran 65:3"
    },
    {
      text: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
      reference: "Quran 2:152"
    },
    {
      text: "And it is He who created the heavens and earth in truth. And the day He says, 'Be,' and it is, His word is the truth.",
      reference: "Quran 6:73"
    },
    {
      text: "The best of people are those who benefit others.",
      reference: "Prophet Muhammad (PBUH)"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white pt-10 p-4 sm:p-6 rounded-xl shadow-lg mb-6">
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-semibold mb-3">Daily Islamic Quote</h3>
        <p className="text-sm sm:text-base italic mb-2 leading-relaxed">"{quotes[currentQuote].text}"</p>
        <p className="text-xs sm:text-sm opacity-80">- {quotes[currentQuote].reference}</p>
      </div>
    </div>
  );
};

export default IslamicQuotes;