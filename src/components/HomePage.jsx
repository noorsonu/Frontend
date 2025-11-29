import React from 'react';
import IslamicQuotes from './IslamicQuotes';
import DailyDhikr from './DailyDhikr';
import BeautifulDuas from './BeautifulDuas';
import AsmaUlHusna from './AsmaUlHusna';
import PostsGrid from './PostsGrid';
import IslamicCalendar from './IslamicCalendar';
import QuranVerse from './QuranVerse';
import IslamicCounter from './IslamicCounter';
import TasbihCounter from './TasbihCounter';
import IslamicReminders from './IslamicReminders';
import PrayerTimes from './PrayerTimes';
import IslamicTools from './IslamicTools';
import Section from './layout/Section';


const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen">
      <Section spacing="sm">
        <IslamicQuotes />
      </Section>
      
      <Section>
        <IslamicTools />
      </Section>
      
      <Section containerSize="full" className="px-2 sm:px-4">
        <PostsGrid />
      </Section>
      
      <Section>
        <PrayerTimes />
      </Section>
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <IslamicCalendar />
          <QuranVerse />
          <IslamicReminders />
        </div>
      </Section>
      

      
      <Section>
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <DailyDhikr />
          <BeautifulDuas />
          <AsmaUlHusna />
        </div>
      </Section>
      

    </div>
  );
};

export default HomePage;