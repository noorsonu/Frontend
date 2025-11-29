import React from 'react';
import DailyDhikr from './DailyDhikr';
import BeautifulDuas from './BeautifulDuas';
import AsmaUlHusna from './AsmaUlHusna';
import IslamicCalendar from './IslamicCalendar';
import QuranVerse from './QuranVerse';
import IslamicReminders from './IslamicReminders';

const IslamicCircles = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 sm:py-6 px-2 sm:px-4">
      {/* First Row - Original Circles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <DailyDhikr />
        <BeautifulDuas />
        <AsmaUlHusna />
      </div>
      
      {/* Second Row - New Islamic Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <IslamicCalendar />
        <QuranVerse />
        <IslamicReminders />
      </div>
    </div>
  );
};

export default IslamicCircles;