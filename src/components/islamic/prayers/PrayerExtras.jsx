import React from 'react';

const PrayerExtras = () => {
  return (
    <div className="mt-3 space-y-2">
      {/* Prayer Status */}
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 bg-purple-900/10 rounded-lg border border-purple-600/20 text-center">
          <p className="text-purple-400 text-xs font-medium">🌙 Qiyam</p>
          <p className="text-white text-xs">2:30 AM</p>
        </div>
        <div className="p-2 bg-orange-900/10 rounded-lg border border-orange-600/20 text-center">
          <p className="text-orange-400 text-xs font-medium">☀️ Sunrise</p>
          <p className="text-white text-xs">6:45 AM</p>
        </div>
      </div>
      
      {/* Quick Dua */}
      <div className="p-2 bg-blue-900/10 rounded-lg border border-blue-600/20">
        <p className="text-blue-400 text-xs text-center">
          📿 Before Prayer: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ"
        </p>
      </div>
    </div>
  );
};

export default PrayerExtras;