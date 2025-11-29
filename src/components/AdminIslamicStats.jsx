import React, { useState, useEffect } from 'react';

const AdminIslamicStats = () => {
  const [stats, setStats] = useState({
    totalPrayers: 1825, // 5 prayers × 365 days
    dhikrCount: 12500,
    quranReads: 45,
    islamicEvents: 8
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-4 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 text-sm">Annual Prayers</p>
            <p className="text-2xl font-bold">{stats.totalPrayers.toLocaleString()}</p>
          </div>
          <div className="text-3xl">🕌</div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-4 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm">Dhikr Count</p>
            <p className="text-2xl font-bold">{stats.dhikrCount.toLocaleString()}</p>
          </div>
          <div className="text-3xl">📿</div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-4 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-100 text-sm">Quran Readings</p>
            <p className="text-2xl font-bold">{stats.quranReads}</p>
          </div>
          <div className="text-3xl">📖</div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-4 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-orange-100 text-sm">Islamic Events</p>
            <p className="text-2xl font-bold">{stats.islamicEvents}</p>
          </div>
          <div className="text-3xl">🌙</div>
        </div>
      </div>
    </div>
  );
};

export default AdminIslamicStats;