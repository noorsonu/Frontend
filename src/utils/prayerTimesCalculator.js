// Prayer times for India (Delhi coordinates as reference)
export const calculatePrayerTimes = () => {
  const now = new Date();
  const today = now.toDateString();
  
  // Check if we have cached times for today
  const cached = localStorage.getItem(`prayerTimes_${today}`);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // India standard prayer times (approximate for Delhi region)
  const month = now.getMonth() + 1;
  const day = now.getDate();
  
  // Seasonal adjustments for India
  let fajrHour = 5, fajrMin = 30;
  let dhuhrHour = 12, dhuhrMin = 15;
  let asrHour = 15, asrMin = 45;
  let maghribHour = 18, maghribMin = 20;
  let ishaHour = 19, ishaMin = 45;
  
  // Summer adjustments (April-September)
  if (month >= 4 && month <= 9) {
    fajrHour = 4; fajrMin = 45;
    maghribHour = 19; maghribMin = 10;
    ishaHour = 20; ishaMin = 30;
  }
  // Winter adjustments (November-February)
  else if (month >= 11 || month <= 2) {
    fajrHour = 5; fajrMin = 45;
    maghribHour = 17; maghribMin = 30;
    ishaHour = 19; ishaMin = 0;
  }
  
  // Format to 12-hour with AM/PM
  const formatTime12Hour = (hour, minute) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`;
  };
  
  const prayerTimes = [
    { name: "Fajr", time: formatTime12Hour(fajrHour, fajrMin), icon: "🌅" },
    { name: "Dhuhr", time: formatTime12Hour(dhuhrHour, dhuhrMin), icon: "☀️" },
    { name: "Asr", time: formatTime12Hour(asrHour, asrMin), icon: "🌤️" },
    { name: "Maghrib", time: formatTime12Hour(maghribHour, maghribMin), icon: "🌅" },
    { name: "Isha", time: formatTime12Hour(ishaHour, ishaMin), icon: "🌙" }
  ];
  
  // Cache for today
  localStorage.setItem(`prayerTimes_${today}`, JSON.stringify(prayerTimes));
  
  return prayerTimes;
};