import React, { useState, useEffect } from 'react';

const IslamicWeatherWidget = () => {
  const [weather, setWeather] = useState({
    temp: '--',
    condition: 'Loading',
    humidity: '--',
    city: 'Getting location...'
  });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    getCurrentLocationWeather();
    return () => clearInterval(timer);
  }, []);

  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          await fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          // Fallback to IP-based location or default
          fetchWeatherByIP();
        }
      );
    } else {
      fetchWeatherByIP();
    }
  };

  const fetchWeatherData = async (lat, lon) => {
    try {
      // Using OpenWeatherMap API (you'll need to add your API key)
      const API_KEY = 'your_api_key_here'; // Replace with actual API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      
      if (response.ok) {
        const data = await response.json();
        setWeather({
          temp: Math.round(data.main.temp),
          condition: data.weather[0].main,
          humidity: data.main.humidity,
          city: data.name
        });
      } else {
        // Fallback to mock data based on location
        setWeatherFromLocation(lat, lon);
      }
    } catch (error) {
      console.error('Weather API error:', error);
      setWeatherFromLocation(lat, lon);
    }
    setLoading(false);
  };

  const fetchWeatherByIP = async () => {
    try {
      // Get location from IP
      const ipResponse = await fetch('https://ipapi.co/json/');
      const ipData = await ipResponse.json();
      
      setWeather({
        temp: 25, // Default temp
        condition: 'Clear',
        humidity: 65,
        city: ipData.city || 'Your Location'
      });
    } catch (error) {
      setWeather({
        temp: 25,
        condition: 'Clear', 
        humidity: 65,
        city: 'Your Location'
      });
    }
    setLoading(false);
  };

  const setWeatherFromLocation = (lat, lon) => {
    // Mock weather based on coordinates
    const temp = Math.round(20 + Math.random() * 15); // 20-35°C
    const conditions = ['Clear', 'Cloudy', 'Partly Cloudy'];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    
    setWeather({
      temp,
      condition,
      humidity: Math.round(50 + Math.random() * 30),
      city: `${lat.toFixed(2)}°, ${lon.toFixed(2)}°`
    });
  };

  const getWeatherIcon = (condition) => {
    const icons = {
      'Clear': '☀️',
      'Cloudy': '☁️',
      'Rain': '🌧️',
      'Storm': '⛈️',
      'Snow': '❄️'
    };
    return icons[condition] || '🌤️';
  };

  const getIslamicGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'صباح الخير';
    if (hour < 18) return 'مساء الخير';
    return 'مساء النور';
  };

  return (
    <div className="bg-gradient-to-br from-blue-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-md rounded-xl p-4 border border-blue-500/20">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-white font-semibold text-sm">{weather.city}</h3>
          <p className="text-blue-300 text-xs">{getIslamicGreeting()}</p>
        </div>
        <div className="text-2xl">{getWeatherIcon(weather.condition)}</div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-white">{weather.temp}°C</div>
          <div className="text-blue-300 text-xs">{weather.condition}</div>
        </div>
        <div className="text-right">
          <div className="text-blue-300 text-xs">Humidity</div>
          <div className="text-white text-sm font-semibold">{weather.humidity}%</div>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-blue-500/20">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-blue-400 text-xs">🌙</span>
          <span className="text-blue-300 text-xs">Perfect weather for prayers</span>
          <span className="text-blue-400 text-xs">🤲</span>
        </div>
      </div>
    </div>
  );
};

export default IslamicWeatherWidget;