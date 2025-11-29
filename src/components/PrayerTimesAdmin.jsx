import React, { useState, useEffect } from 'react';
import api from '../services/api';

const PrayerTimesAdmin = () => {
  const [prayerTimes, setPrayerTimes] = useState([
    { name: "Fajr", time: "05:30", icon: "🌅" },
    { name: "Dhuhr", time: "12:15", icon: "☀️" },
    { name: "Asr", time: "15:45", icon: "🌤️" },
    { name: "Maghrib", time: "18:20", icon: "🌅" },
    { name: "Isha", time: "19:45", icon: "🌙" }
  ]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [tempTime, setTempTime] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPrayerTimes = async () => {
    try {
      const response = await api.get('/api/prayer-times');
      if (response && response.length > 0) {
        setPrayerTimes(response);
      }
    } catch (error) {
      console.log('Using default prayer times');
    }
  };

  const updatePrayerTime = async (index, newTime) => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
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

  const handleCancel = () => {
    setEditingIndex(-1);
    setTempTime('');
  };

  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Prayer Times</h2>
      
      <div className="space-y-3">
        {prayerTimes.map((prayer, index) => (
          <div key={prayer.name} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <span className="text-lg">{prayer.icon}</span>
              <span className="font-medium text-gray-700">{prayer.name}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              {editingIndex === index ? (
                <>
                  <input
                    type="time"
                    value={tempTime}
                    onChange={(e) => setTempTime(e.target.value)}
                    className="border rounded px-2 py-1 text-sm cursor-pointer"
                  />
                  <button
                    onClick={() => handleSave(index)}
                    disabled={loading}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm cursor-pointer disabled:opacity-50"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="font-mono text-gray-600 min-w-[60px]">{prayer.time}</span>
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {loading && (
        <div className="mt-4 text-center text-blue-600">
          Updating prayer times...
        </div>
      )}
    </div>
  );
};

export default PrayerTimesAdmin;