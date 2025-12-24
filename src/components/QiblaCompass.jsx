import React, { useState, useEffect } from 'react';

const QiblaCompass = () => {
  const [qiblaDirection, setQiblaDirection] = useState(245); // Default direction for Delhi
  const [userLocation, setUserLocation] = useState('Delhi, India');
  const [isLoading, setIsLoading] = useState(false);

  const calculateQiblaDirection = (lat, lng) => {
    // Kaaba coordinates
    const kaabaLat = 21.4225;
    const kaabaLng = 39.8262;
    
    // Convert to radians
    const latRad = lat * Math.PI / 180;
    const lngRad = lng * Math.PI / 180;
    const kaabaLatRad = kaabaLat * Math.PI / 180;
    const kaabaLngRad = kaabaLng * Math.PI / 180;
    
    // Calculate bearing
    const dLng = kaabaLngRad - lngRad;
    const y = Math.sin(dLng) * Math.cos(kaabaLatRad);
    const x = Math.cos(latRad) * Math.sin(kaabaLatRad) - 
              Math.sin(latRad) * Math.cos(kaabaLatRad) * Math.cos(dLng);
    
    let bearing = Math.atan2(y, x) * 180 / Math.PI;
    bearing = (bearing + 360) % 360;
    
    return Math.round(bearing);
  };

  const getLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const direction = calculateQiblaDirection(latitude, longitude);
          setQiblaDirection(direction);
          setUserLocation(`${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`);
          setIsLoading(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoading(false);
        }
      );
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-900/30 via-emerald-900/30 to-teal-900/30 backdrop-blur-md rounded-xl p-4 border border-green-500/20">
      <div className="text-center mb-4">
        <h3 className="text-green-400 font-semibold text-sm mb-2">Qibla Direction</h3>
        <div className="text-gray-300 text-xs">{userLocation}</div>
      </div>

      {/* Compass */}
      <div className="relative w-32 h-32 mx-auto mb-4">
        {/* Compass Circle */}
        <div className="absolute inset-0 border-4 border-green-500/30 rounded-full">
          {/* Direction Markers */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 text-green-400 text-xs font-bold">N</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 text-green-400 text-xs font-bold">S</div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 text-green-400 text-xs font-bold">W</div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 text-green-400 text-xs font-bold">E</div>
        </div>

        {/* Qibla Arrow */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
          style={{ transform: `rotate(${qiblaDirection}deg)` }}
        >
          <div className="w-1 h-12 bg-gradient-to-t from-green-600 to-green-400 rounded-full relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-green-400"></div>
          </div>
        </div>

        {/* Center Kaaba Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-green-600 rounded-sm flex items-center justify-center text-white text-xs">
            🕋
          </div>
        </div>

        {/* Degree Markers */}
        {[0, 90, 180, 270].map((degree) => (
          <div
            key={degree}
            className="absolute w-1 h-3 bg-green-500/50"
            style={{
              top: '10px',
              left: '50%',
              transformOrigin: '50% 54px',
              transform: `translateX(-50%) rotate(${degree}deg)`
            }}
          />
        ))}
      </div>

      {/* Direction Info */}
      <div className="text-center mb-4">
        <div className="text-green-400 text-lg font-bold">{qiblaDirection}°</div>
        <div className="text-gray-300 text-xs">Direction to Mecca</div>
      </div>

      {/* Get Location Button */}
      <button
        onClick={getLocation}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:opacity-50 text-white py-2 px-4 rounded-lg transition-all duration-200 text-sm"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
            Getting Location...
          </div>
        ) : (
          '📍 Update Location'
        )}
      </button>

      {/* Islamic Quote */}
      <div className="mt-3 text-center">
        <div className="text-green-300 text-xs italic">
          "Turn your face toward Masjid al-Haram"
        </div>
        <div className="text-gray-400 text-xs">- Quran 2:144</div>
      </div>
    </div>
  );
};

export default QiblaCompass;