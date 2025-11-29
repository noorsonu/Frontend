import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { calculatePrayerTimes } from '../utils/prayerTimesCalculator';
import PrayerTimeCard from './islamic/prayers/PrayerTimeCard';
import NextPrayerCountdown from './islamic/prayers/NextPrayerCountdown';
import PrayerNotification from './islamic/prayers/PrayerNotification';
import PrayerExtras from './islamic/prayers/PrayerExtras';

const PrayerTimes = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState([
    { name: "Fajr", time: "05:30", icon: "🌅" },
    { name: "Dhuhr", time: "12:15", icon: "☀️" },
    { name: "Asr", time: "15:45", icon: "🌤️" },
    { name: "Maghrib", time: "18:20", icon: "🌅" },
    { name: "Isha", time: "19:45", icon: "🌙" }
  ]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [tempTime, setTempTime] = useState('');

  const fetchPrayerTimes = async () => {
    try {
      const response = await api.get('/api/prayer-times');
      if (response && response.length > 0) {
        const lastUpdated = new Date(response[0].updatedAt || response[0].createdAt);
        const daysDiff = (new Date() - lastUpdated) / (1000 * 60 * 60 * 24);
        
        if (daysDiff > 31) {
          await updatePrayerTimesAutomatically();
        } else {
          setPrayerTimes(response);
        }
      } else {
        await updatePrayerTimesAutomatically();
      }
    } catch (error) {
      console.log('Using calculated prayer times');
      await updatePrayerTimesAutomatically();
    }
  };

  const updatePrayerTimesAutomatically = async () => {
    const calculatedTimes = calculatePrayerTimes();
    setPrayerTimes(calculatedTimes);
    
    calculatedTimes.forEach(async (prayer) => {
      try {
        await api.put('/api/prayer-times', {
          name: prayer.name,
          time: prayer.time
        });
      } catch (error) {
        console.log('Failed to update prayer time:', prayer.name);
      }
    });
  };

  const updatePrayerTime = async (index, newTime) => {
    try {
      const updatedPrayer = { ...prayerTimes[index], time: newTime };
      
      await api.put('/api/prayer-times', {
        name: updatedPrayer.name,
        time: newTime
      });

      const newPrayerTimes = [...prayerTimes];
      newPrayerTimes[index] = updatedPrayer;
      setPrayerTimes(newPrayerTimes);
      
      setEditingIndex(-1);
      setTempTime('');
    } catch (error) {
      console.error('Error updating prayer time:', error);
      alert('Failed to update prayer time');
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setTempTime(prayerTimes[index].time);
  };

  const handleSave = (index) => {
    if (tempTime && tempTime !== prayerTimes[index].time) {
      updatePrayerTime(index, tempTime);
    } else {
      setEditingIndex(-1);
      setTempTime('');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    
    const userData = localStorage.getItem('userInfo');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setIsAdmin(parsedUser.email === 'admin@example.com' || parsedUser.role === 'ADMIN');
    }
    
    updatePrayerTimesAutomatically();
    
    return () => clearInterval(timer);
  }, []);

  const getCurrentPrayer = () => {
    const now = currentTime.getHours() * 60 + currentTime.getMinutes();
    for (let i = 0; i < prayerTimes.length; i++) {
      const timeStr = prayerTimes[i].time.replace(/AM|PM/g, '').trim();
      const [hours, minutes] = timeStr.split(':').map(Number);
      let prayerHours = hours;
      if (prayerTimes[i].time.includes('PM') && hours !== 12) prayerHours += 12;
      if (prayerTimes[i].time.includes('AM') && hours === 12) prayerHours = 0;
      const prayerMinutes = prayerHours * 60 + minutes;
      if (now < prayerMinutes) {
        return i;
      }
    }
    return 0;
  };

  const getTimeRemaining = () => {
    const now = currentTime.getHours() * 60 + currentTime.getMinutes();
    const nextPrayerIndex = getCurrentPrayer();
    const nextPrayer = prayerTimes[nextPrayerIndex];
    
    const timeStr = nextPrayer.time.replace(/AM|PM/g, '').trim();
    const [hours, minutes] = timeStr.split(':').map(Number);
    let prayerHours = hours;
    if (nextPrayer.time.includes('PM') && hours !== 12) prayerHours += 12;
    if (nextPrayer.time.includes('AM') && hours === 12) prayerHours = 0;
    
    let prayerMinutes = prayerHours * 60 + minutes;
    if (prayerMinutes <= now) prayerMinutes += 24 * 60;
    
    const diff = prayerMinutes - now;
    const hoursLeft = Math.floor(diff / 60);
    const minutesLeft = diff % 60;
    
    return { hours: hoursLeft, minutes: minutesLeft, name: nextPrayer.name };
  };

  const nextPrayer = getCurrentPrayer();
  const timeRemaining = getTimeRemaining();

  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-600/20 mb-4">
      <h3 className="text-sm sm:text-base font-medium text-white mb-3 text-center">Prayer Times</h3>
      
      <div className="space-y-1 sm:space-y-2">
        {prayerTimes.map((prayer, index) => (
          <PrayerTimeCard
            key={prayer.name}
            prayer={prayer}
            isNext={index === nextPrayer}
            isAdmin={isAdmin}
            isEditing={editingIndex === index}
            tempTime={tempTime}
            onEdit={() => handleEdit(index)}
            onSave={() => handleSave(index)}
            onCancel={() => setEditingIndex(-1)}
            onTimeChange={setTempTime}
          />
        ))}
      </div>
      
      <NextPrayerCountdown timeRemaining={timeRemaining} />
      <PrayerNotification timeRemaining={timeRemaining} />
      <PrayerExtras />
    </div>
  );
};

export default PrayerTimes;