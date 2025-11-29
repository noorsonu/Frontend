import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About yaALLAH.in</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Your Complete Islamic Companion</p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-green-500 mr-3">🌟</span>
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              yaALLAH.in is dedicated to providing Muslims worldwide with authentic Islamic resources, tools, and guidance. 
              We strive to make Islamic knowledge accessible, practical, and beneficial for daily life. Our platform serves 
              as a comprehensive digital companion for your spiritual journey, offering everything from prayer times to 
              Quranic verses, from Hajj guidance to Zakat calculations.
            </p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-blue-500 mr-3">🎯</span>
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To become the most trusted and comprehensive Islamic platform that bridges traditional Islamic knowledge 
              with modern technology. We envision a world where every Muslim has easy access to authentic Islamic 
              guidance, prayer tools, and spiritual resources at their fingertips, helping them strengthen their 
              connection with Allah (SWT) in their daily lives.
            </p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-purple-500 mr-3">🛠️</span>
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">🕌</span>
                  <div>
                    <h3 className="font-semibold text-white">Prayer Times & Qibla</h3>
                    <p className="text-gray-400 text-sm">Accurate prayer times and Qibla direction for your location</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 text-xl">📿</span>
                  <div>
                    <h3 className="font-semibold text-white">Digital Tasbih</h3>
                    <p className="text-gray-400 text-sm">Beautiful digital counter for dhikr and remembrance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">📖</span>
                  <div>
                    <h3 className="font-semibold text-white">Quran & Hadith</h3>
                    <p className="text-gray-400 text-sm">Complete Quran with translations and authentic Hadith</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">🕋</span>
                  <div>
                    <h3 className="font-semibold text-white">Hajj & Umrah Guide</h3>
                    <p className="text-gray-400 text-sm">Step-by-step pilgrimage guidance with duas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">💰</span>
                  <div>
                    <h3 className="font-semibold text-white">Zakat Calculator</h3>
                    <p className="text-gray-400 text-sm">Calculate your Zakat obligations accurately</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-600 text-xl">📚</span>
                  <div>
                    <h3 className="font-semibold text-white">Islamic Knowledge</h3>
                    <p className="text-gray-400 text-sm">Articles, Wazifa, and educational content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-orange-500 mr-3">👨‍💻</span>
              Our Team
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              yaALLAH.in is developed and maintained by a dedicated team of Muslim developers and Islamic scholars 
              who are passionate about serving the Ummah. Led by Noor Md, our team combines technical expertise 
              with deep Islamic knowledge to ensure authenticity and accuracy in all our content and tools. 
              We continuously work to improve and expand our platform based on community feedback and Islamic guidance.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-md rounded-2xl p-8 border border-green-600/30">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-yellow-500 mr-3">🤝</span>
              Join Our Community
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              We believe in the power of community and collective worship. Join thousands of Muslims who use 
              yaALLAH.in daily for their Islamic needs. Share your feedback, suggestions, and experiences with 
              us as we continue to grow and serve the global Muslim community better.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/message/PXPIV2ZPJHBUK1" target="_blank" rel="noopener noreferrer" 
                 className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer">
                WhatsApp Community
              </a>
              <a href="https://bit.ly/3WVOkBi" target="_blank" rel="noopener noreferrer"
                 className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer">
                Follow on Instagram
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-lg italic">
              "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose."
            </p>
            <p className="text-gray-500 text-sm mt-2">- Quran 65:3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;