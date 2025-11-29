import React from 'react';

const PrayerTimeCard = ({ prayer, isNext, isAdmin, isEditing, tempTime, onEdit, onSave, onCancel, onTimeChange }) => {
  return (
    <div className={`flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all ${
      isNext ? 'bg-green-900/20 border-l-2 border-green-500' : 'hover:bg-gray-700/20'
    }`}>
      <div className="flex items-center gap-2">
        <span className="text-base sm:text-lg">{prayer.icon}</span>
        <span className={`font-medium text-sm sm:text-base ${
          isNext ? 'text-green-400' : 'text-white'
        }`}>
          {prayer.name}
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        {isAdmin && isEditing ? (
          <>
            <input
              type="time"
              value={tempTime}
              onChange={(e) => onTimeChange(e.target.value)}
              className="border rounded px-1 py-0.5 text-xs w-16 sm:w-20"
            />
            <button
              onClick={onSave}
              className="bg-green-500 hover:bg-green-600 text-white px-1.5 py-0.5 rounded text-xs"
            >
              ✓
            </button>
            <button
              onClick={onCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white px-1.5 py-0.5 rounded text-xs"
            >
              ✕
            </button>
          </>
        ) : (
          <>
            <span className={`font-mono text-xs sm:text-sm ${
              isNext ? 'text-green-400 font-bold' : 'text-gray-300'
            }`}>
              {prayer.time}
            </span>
            {isAdmin && (
              <button
                onClick={onEdit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs ml-1"
              >
                ✏️
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PrayerTimeCard;