import React from 'react';

const IslamicPatternBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
      {/* Geometric Islamic Patterns */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-emerald-400 rotate-45 animate-spin" style={{ animationDuration: '20s' }}>
        <div className="absolute inset-4 border border-emerald-300 rotate-45"></div>
        <div className="absolute inset-8 border border-emerald-200 rotate-45"></div>
      </div>

      <div className="absolute top-1/4 right-20 w-24 h-24 border-2 border-teal-400 animate-pulse">
        <div className="absolute inset-2 border border-teal-300 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-teal-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      </div>

      <div className="absolute bottom-1/4 left-1/4 w-28 h-28 border border-cyan-400 rotate-12 animate-bounce" style={{ animationDuration: '4s' }}>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-cyan-400 transform -translate-y-1/2"></div>
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-cyan-400 transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-6 h-6 border border-cyan-300 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      </div>

      <div className="absolute top-3/4 right-1/3 w-20 h-20 border-2 border-blue-400 animate-spin" style={{ animationDuration: '15s', clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
        <div className="absolute inset-2 border border-blue-300" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}></div>
      </div>

      <div className="absolute bottom-20 right-20 w-16 h-16 border border-purple-400 rotate-45 animate-ping" style={{ animationDuration: '3s' }}>
        <div className="absolute inset-2 border border-purple-300 rotate-45"></div>
      </div>

      <div className="absolute top-1/2 left-10 w-12 h-12 border border-indigo-400 rotate-45 animate-pulse">
        <div className="absolute inset-1 border border-indigo-300 rotate-45"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/4 left-3/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default IslamicPatternBackground;