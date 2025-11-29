import React, { useState } from 'react';

const HajjUmrahGuide = () => {
  const [selectedGuide, setSelectedGuide] = useState('hajj');

  const hajjSteps = [
    { step: 1, title: "Ihram", description: "Enter state of consecration", icon: "🤲" },
    { step: 2, title: "Tawaf", description: "Circle the Kaaba 7 times", icon: "🕋" },
    { step: 3, title: "Sa'i", description: "Walk between Safa and Marwah", icon: "🚶‍♂️" },
    { step: 4, title: "Mina", description: "Stay in Mina", icon: "⛺" },
    { step: 5, title: "Arafat", description: "Stand at Mount Arafat", icon: "⛰️" },
    { step: 6, title: "Muzdalifah", description: "Collect pebbles", icon: "🪨" },
    { step: 7, title: "Jamarat", description: "Stone the pillars", icon: "🎯" },
    { step: 8, title: "Sacrifice", description: "Qurbani (animal sacrifice)", icon: "🐑" }
  ];

  const umrahSteps = [
    { step: 1, title: "Ihram", description: "Enter state of consecration", icon: "🤲" },
    { step: 2, title: "Tawaf", description: "Circle the Kaaba 7 times", icon: "🕋" },
    { step: 3, title: "Sa'i", description: "Walk between Safa and Marwah", icon: "🚶‍♂️" },
    { step: 4, title: "Halq/Taqsir", description: "Shave or trim hair", icon: "✂️" }
  ];

  const duas = [
    { title: "Talbiyah", arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ", translation: "Here I am, O Allah, here I am" },
    { title: "Tawaf Dua", arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً", translation: "Our Lord, give us good in this world" },
    { title: "Sa'i Dua", arabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَآئِرِ اللهِ", translation: "Indeed, Safa and Marwah are among the symbols of Allah" }
  ];

  const currentSteps = selectedGuide === 'hajj' ? hajjSteps : umrahSteps;

  return (
    <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-600/30">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center space-x-2">
          <span className="text-2xl">🕋</span>
          <span>Hajj & Umrah Guide</span>
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
      </div>

      {/* Guide Selection */}
      <div className="flex mb-6 bg-gray-700/50 rounded-xl p-1">
        <button
          onClick={() => setSelectedGuide('hajj')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            selectedGuide === 'hajj'
              ? 'bg-green-600 text-white shadow-lg'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Hajj Guide
        </button>
        <button
          onClick={() => setSelectedGuide('umrah')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            selectedGuide === 'umrah'
              ? 'bg-green-600 text-white shadow-lg'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Umrah Guide
        </button>
      </div>

      {/* Steps */}
      <div className="space-y-3 mb-6">
        <h4 className="text-lg font-semibold text-white mb-3">
          {selectedGuide === 'hajj' ? 'Hajj' : 'Umrah'} Steps
        </h4>
        {currentSteps.map((step, index) => (
          <div key={index} className="flex items-center p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
            <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold mr-3">
              {step.step}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{step.icon}</span>
                <h5 className="font-semibold text-white">{step.title}</h5>
              </div>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Important Duas */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-white mb-3">Important Duas</h4>
        {duas.map((dua, index) => (
          <div key={index} className="p-3 bg-blue-900/20 rounded-lg border border-blue-600/30">
            <h5 className="font-semibold text-blue-400 mb-1">{dua.title}</h5>
            <p className="text-white text-lg mb-1 font-arabic" dir="rtl">{dua.arabic}</p>
            <p className="text-gray-300 text-sm italic">{dua.translation}</p>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="mt-6 p-3 bg-yellow-900/20 rounded-lg border border-yellow-600/30">
        <h5 className="font-semibold text-yellow-400 mb-2">💡 Important Tips</h5>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Maintain state of Ihram throughout</li>
          <li>• Stay hydrated and take breaks</li>
          <li>• Follow crowd management guidelines</li>
          <li>• Keep emergency contacts handy</li>
        </ul>
      </div>
    </div>
  );
};

export default HajjUmrahGuide;