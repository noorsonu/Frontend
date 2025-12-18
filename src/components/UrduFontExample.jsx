import React from 'react';

const UrduFontExample = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        Urdu Font Examples
      </h2>
      
      {/* Arabic Text - Quran Style */}
      <div className="mb-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-green-800">Arabic Text (Quran Style):</h3>
        <p className="arabic-text text-green-900">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <p className="arabic-text text-green-900">
          الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
        </p>
      </div>

      {/* Urdu Text - Simple and Clean */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-blue-800">Urdu Text (Simple):</h3>
        <p className="urdu-text text-blue-900">
          السلام علیکم ورحمۃ اللہ وبرکاتہ
        </p>
        <p className="urdu-text text-blue-900">
          یہ ایک آسان اور صاف اردو فونٹ ہے
        </p>
      </div>

      {/* Usage Instructions */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">How to Use:</h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p><code className="bg-gray-200 px-2 py-1 rounded">className="arabic-text"</code> - For Arabic/Quran text</p>
          <p><code className="bg-gray-200 px-2 py-1 rounded">className="urdu-text"</code> - For simple Urdu text</p>
          <p><code className="bg-gray-200 px-2 py-1 rounded">className="font-quran"</code> - For enhanced Quran style</p>
        </div>
      </div>
    </div>
  );
};

export default UrduFontExample;