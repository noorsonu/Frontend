import React, { useState, useEffect } from 'react';

const QiblaDirection = () => {
  const [qiblaDirection, setQiblaDirection] = useState(0);
  const [userHeading, setUserHeading] = useState(0);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [permission, setPermission] = useState('prompt');

  // Kaaba coordinates
  const KAABA_LAT = 21.4225;
  const KAABA_LNG = 39.8262;

  // Calculate Qibla direction
  const calculateQiblaDirection = (userLat, userLng) => {
    const lat1 = (userLat * Math.PI) / 180;
    const lat2 = (KAABA_LAT * Math.PI) / 180;
    const deltaLng = ((KAABA_LNG - userLng) * Math.PI) / 180;

    const x = Math.sin(deltaLng) * Math.cos(lat2);
    const y = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLng);

    let bearing = Math.atan2(x, y);
    bearing = (bearing * 180) / Math.PI;
    bearing = (bearing + 360) % 360;

    return bearing;
  };

  // Get user location
  const getUserLocation = () => {
    setIsLoading(true);
    setError('');

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        const qibla = calculateQiblaDirection(latitude, longitude);
        setQiblaDirection(qibla);
        setIsLoading(false);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError('Location access denied. Please enable location services.');
            setPermission('denied');
            break;
          case error.POSITION_UNAVAILABLE:
            setError('Location information unavailable.');
            break;
          case error.TIMEOUT:
            setError('Location request timed out.');
            break;
          default:
            setError('An unknown error occurred.');
            break;
        }
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    );
  };

  // Handle device orientation
  useEffect(() => {
    const handleOrientation = (event) => {
      if (event.alpha !== null) {
        setUserHeading(360 - event.alpha);
      }
    };

    // Check if HTTPS
    const isSecure = window.location.protocol === 'https:' || window.location.hostname === 'localhost';
    
    if (!isSecure) {
      setError('HTTPS required for compass. Use https://localhost or deploy to HTTPS server.');
      setIsLoading(false);
      return;
    }

    // Request permission for iOS devices
    const requestOrientationPermission = async () => {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        try {
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
          } else {
            setError('Compass permission denied. Enable in browser settings.');
          }
        } catch (error) {
          setError('Compass not supported on this device.');
        }
      } else {
        window.addEventListener('deviceorientation', handleOrientation);
      }
    };

    requestOrientationPermission();
    getUserLocation();

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  const relativeQiblaDirection = qiblaDirection - userHeading;

  return (
    <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-600/30">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center space-x-2">
          <span className="text-2xl">🧭</span>
          <span>Qibla Direction</span>
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Getting your location...</p>
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <div className="text-red-400 mb-4">
            <span className="text-4xl">⚠️</span>
          </div>
          <p className="text-red-400 text-sm mb-4">{error}</p>
          <button
            onClick={getUserLocation}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-xl text-sm cursor-pointer shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          {/* Compass */}
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48">
              {/* Compass Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-2xl border-4 border-gray-600">
                
                {/* Compass Markings */}
                <div className="absolute inset-2 rounded-full border-2 border-gray-500">
                  {/* Cardinal Directions */}
                  {['N', 'E', 'S', 'W'].map((direction, index) => {
                    const angle = index * 90;
                    const radian = (angle * Math.PI) / 180;
                    const x = 50 + 35 * Math.sin(radian);
                    const y = 50 - 35 * Math.cos(radian);
                    
                    return (
                      <div
                        key={direction}
                        className="absolute text-white font-bold text-lg"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        {direction}
                      </div>
                    );
                  })}
                  
                  {/* Degree Markings */}
                  {Array.from({length: 36}, (_, i) => {
                    const angle = i * 10;
                    const radian = (angle * Math.PI) / 180;
                    const x1 = 50 + 40 * Math.sin(radian);
                    const y1 = 50 - 40 * Math.cos(radian);
                    const x2 = 50 + 35 * Math.sin(radian);
                    const y2 = 50 - 35 * Math.cos(radian);
                    
                    return (
                      <div
                        key={i}
                        className="absolute w-0.5 bg-gray-400"
                        style={{
                          left: `${x1}%`,
                          top: `${y1}%`,
                          width: '2px',
                          height: `${Math.sqrt((x2-x1)**2 + (y2-y1)**2)}%`,
                          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                          transformOrigin: 'center bottom'
                        }}
                      />
                    );
                  })}
                </div>
                
                {/* Qibla Needle */}
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
                  style={{ transform: `rotate(${relativeQiblaDirection}deg)` }}
                >
                  {/* Needle */}
                  <div className="relative">
                    {/* North part (red) */}
                    <div className="absolute w-1 h-16 bg-gradient-to-t from-red-600 to-red-400 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-full"></div>
                    {/* South part (white) */}
                    <div className="absolute w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-lg transform -translate-x-1/2"></div>
                    {/* Center dot */}
                    <div className="absolute w-3 h-3 bg-yellow-500 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 border-2 border-white"></div>
                  </div>
                </div>
                
                {/* Kaaba Direction Indicator */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `rotate(${qiblaDirection - userHeading}deg)` }}
                >
                  <div className="absolute w-6 h-6 transform -translate-y-20">
                    <div className="w-full h-full bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-white">
                      🕋
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direction Info */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-green-900/30 rounded-lg border border-green-600/50 text-center">
                <p className="text-green-400 text-xs font-semibold mb-1">Qibla Direction</p>
                <p className="text-white text-lg font-bold">{Math.round(qiblaDirection)}°</p>
              </div>
              <div className="p-3 bg-blue-900/30 rounded-lg border border-blue-600/50 text-center">
                <p className="text-blue-400 text-xs font-semibold mb-1">Your Heading</p>
                <p className="text-white text-lg font-bold">{Math.round(userHeading)}°</p>
              </div>
            </div>
            
            {location && (
              <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-600/50 text-center">
                <p className="text-purple-400 text-xs font-semibold mb-1">Your Location</p>
                <p className="text-white text-sm">
                  {location.lat.toFixed(4)}°, {location.lng.toFixed(4)}°
                </p>
              </div>
            )}
            
            <div className="p-3 bg-yellow-900/30 rounded-lg border border-yellow-600/50 text-center">
              <p className="text-yellow-400 text-xs font-semibold mb-1">Distance to Kaaba</p>
              <p className="text-white text-sm">
                {location ? 
                  `${Math.round(
                    6371 * Math.acos(
                      Math.cos((location.lat * Math.PI) / 180) *
                      Math.cos((KAABA_LAT * Math.PI) / 180) *
                      Math.cos(((KAABA_LNG - location.lng) * Math.PI) / 180) +
                      Math.sin((location.lat * Math.PI) / 180) *
                      Math.sin((KAABA_LAT * Math.PI) / 180)
                    )
                  )} km` : 'Calculating...'
                }
              </p>
            </div>
          </div>

          {/* Manual Compass Controls */}
          <div className="mt-4 space-y-3">
            <div className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <p className="text-gray-300 text-xs text-center mb-3">
                📱 Manual Compass Control
              </p>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => setUserHeading(prev => (prev - 10 + 360) % 360)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm cursor-pointer"
                >
                  ← 10°
                </button>
                <span className="text-white font-mono text-sm">{Math.round(userHeading)}°</span>
                <button
                  onClick={() => setUserHeading(prev => (prev + 10) % 360)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm cursor-pointer"
                >
                  10° →
                </button>
              </div>
            </div>
            
            <div className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <p className="text-gray-300 text-xs text-center">
                🧭 Point the red needle towards the green Kaaba symbol 🕋
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QiblaDirection;