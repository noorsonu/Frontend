import React, { useMemo } from 'react';

const Background = () => {
  // Generate random stars - reduced count (memoized for performance)
  const stars = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${2 + Math.random() * 3}s`,
  })), []);

  return (
    <div
      className="w-full h-screen min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient overlay for better text visibility */}
      <div className="relative inset-0 flex flex-col items-center justify-center pt-55">
        <h6 className="text-amber-400 text-4xl sm:text-4xl md:text-5xl lg:text-4xl font-bold z-10 text-center px-4 leading-relaxed" dir="rtl" style={{ fontFamily: 'Arial, sans-serif' }}>
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h6>
        <h1 className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold z-10 text-center px-4 mt-4 tracking-wide" style={{ fontFamily: 'Science Gothic, Arial, sans-serif' }}>Journey Through Islamic</h1>
        <h2 className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold z-10 text-center px-4 mt-2 tracking-wide" style={{ fontFamily: 'Science Gothic, Arial, sans-serif' }}>Knowledge</h2>
      </div>

      {/* Animated Stars - Reduced opacity */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.3)',
            }}
          />
        ))}
      </div>


      {/* Floating Particles - Reduced count and opacity (memoized for performance) */}
      <div className="absolute inset-0">
        {useMemo(() => Array.from({ length: 6 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-amber-200/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        )), [])}
      </div>
    </div>
  )
}

export default Background