import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Your privacy is important to us</p>
          <p className="text-gray-400 mt-2">Last updated: January 2025</p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-green-500 mr-3">🛡️</span>
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At yaALLAH.in, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website and use our Islamic services. We handle your data with the utmost care and in accordance with Islamic 
              principles of trust and responsibility.
            </p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-500 mr-3">📊</span>
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• Name and email address (when you contact us or register)</li>
                  <li>• Phone number (if provided for support)</li>
                  <li>• Location data (for prayer times and Qibla direction)</li>
                  <li>• User preferences and settings</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• Device information (browser type, operating system)</li>
                  <li>• Usage data (pages visited, time spent on site)</li>
                  <li>• IP address and general location</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-purple-500 mr-3">🎯</span>
              How We Use Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Service Provision</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Provide accurate prayer times</li>
                  <li>• Calculate Qibla direction</li>
                  <li>• Personalize Islamic content</li>
                  <li>• Save your preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Communication</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Respond to your inquiries</li>
                  <li>• Send important updates</li>
                  <li>• Provide customer support</li>
                  <li>• Share Islamic reminders (if opted in)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-yellow-500 mr-3">🔒</span>
              Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>SSL encryption for data transmission</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Secure server infrastructure</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Regular security audits</li>
              </ul>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Access controls and authentication</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Data backup and recovery systems</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Staff training on data protection</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-red-500 mr-3">🚫</span>
              Information Sharing
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following limited circumstances:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Service Providers:</strong> Trusted third parties who assist in operating our website</li>
              <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li>• <strong>Safety:</strong> To protect the safety of our users or the public</li>
              <li>• <strong>Business Transfer:</strong> In case of merger, acquisition, or asset sale</li>
            </ul>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-orange-500 mr-3">🍪</span>
              Cookies and Tracking
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience on our website. These help us:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-300 space-y-1">
                <li>• Remember your preferences</li>
                <li>• Improve website performance</li>
                <li>• Analyze usage patterns</li>
              </ul>
              <ul className="text-gray-300 space-y-1">
                <li>• Provide personalized content</li>
                <li>• Ensure website security</li>
                <li>• Enable social media features</li>
              </ul>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              You can control cookies through your browser settings, but some features may not work properly if disabled.
            </p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-cyan-500 mr-3">⚖️</span>
              Your Rights
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">You have the following rights regarding your personal information:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Access:</strong> Request copies of your data</li>
                <li>• <strong>Correction:</strong> Update incorrect information</li>
                <li>• <strong>Deletion:</strong> Request data removal</li>
              </ul>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Portability:</strong> Transfer your data</li>
                <li>• <strong>Objection:</strong> Object to data processing</li>
                <li>• <strong>Restriction:</strong> Limit data processing</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-md rounded-2xl p-8 border border-green-600/30">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-yellow-500 mr-3">📞</span>
              Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📧 Email: privacy@yaallah.in</p>
              <p>📱 Phone: +91 7052806684</p>
              <p>💬 WhatsApp: <a href="https://wa.me/message/PXPIV2ZPJHBUK1" className="text-green-400 hover:text-green-300 cursor-pointer">Chat with us</a></p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              This Privacy Policy may be updated from time to time. We will notify you of any significant changes.
            </p>
            <p className="text-gray-500 text-xs mt-2 italic">
              "And Allah is Witness over all things" - Quran 85:9
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;