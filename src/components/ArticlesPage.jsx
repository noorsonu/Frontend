import React, { useState } from 'react';

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', icon: '📚' },
    { id: 'quran', name: 'Quran Studies', icon: '📖' },
    { id: 'hadith', name: 'Hadith Sciences', icon: '📜' },
    { id: 'fiqh', name: 'Islamic Jurisprudence', icon: '⚖️' },
    { id: 'history', name: 'Islamic History', icon: '🏛️' },
    { id: 'spirituality', name: 'Spirituality', icon: '🤲' },
    { id: 'lifestyle', name: 'Islamic Lifestyle', icon: '🌙' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Understanding the Five Pillars of Islam',
      category: 'fiqh',
      excerpt: 'A comprehensive guide to the fundamental practices that form the foundation of Islamic faith and worship.',
      author: 'Islamic Scholar Team',
      date: '2025-01-15',
      readTime: '8 min read',
      image: '🕌',
      content: `The Five Pillars of Islam are the foundation of Muslim life and practice. These pillars represent the core beliefs and practices that every Muslim should follow...

**1. Shahada (Declaration of Faith)**
The Shahada is the Islamic declaration of faith: "There is no god but Allah, and Muhammad is His messenger." This declaration affirms the monotheistic nature of Islam and acknowledges Muhammad as Allah's final prophet.

**2. Salah (Prayer)**
Muslims are required to pray five times daily: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). These prayers serve as a direct connection between the worshipper and Allah.

**3. Zakat (Charity)**
Zakat is the obligatory giving of a portion of one's wealth to those in need. It purifies wealth and helps create a more equitable society.

**4. Sawm (Fasting)**
During the month of Ramadan, Muslims fast from dawn to sunset, abstaining from food, drink, and other physical needs during daylight hours.

**5. Hajj (Pilgrimage)**
The pilgrimage to Mecca is required once in a lifetime for those who are physically and financially able to undertake the journey.`
    },
    {
      id: 2,
      title: 'The Importance of Seeking Knowledge in Islam',
      category: 'quran',
      excerpt: 'Exploring the Quranic verses and Prophetic traditions that emphasize the significance of acquiring knowledge.',
      author: 'Dr. Ahmad Hassan',
      date: '2025-01-12',
      readTime: '6 min read',
      image: '📚',
      content: `Islam places tremendous emphasis on seeking knowledge. The very first revelation to Prophet Muhammad (ﷺ) began with the word "Iqra" (Read/Recite), highlighting the importance of learning and education in Islam...

**Quranic Foundation**
The Quran repeatedly emphasizes the value of knowledge. Allah says: "And say: My Lord, increase me in knowledge" (20:114).

**Prophetic Guidance**
The Prophet (ﷺ) said: "Seek knowledge from the cradle to the grave" and "The seeking of knowledge is obligatory upon every Muslim."

**Types of Knowledge**
Islamic scholarship recognizes both religious knowledge (knowledge of Quran, Hadith, Fiqh) and worldly knowledge (science, medicine, technology) as important for human development.`
    },
    {
      id: 3,
      title: 'The Beautiful Names of Allah (Asma ul Husna)',
      category: 'spirituality',
      excerpt: 'Discovering the 99 beautiful names of Allah and their significance in Islamic spirituality and worship.',
      author: 'Imam Abdullah',
      date: '2025-01-10',
      readTime: '10 min read',
      image: '🌟',
      content: `The 99 Beautiful Names of Allah (Asma ul Husna) represent the perfect attributes of the Almighty. Each name reflects a unique aspect of Allah's nature and serves as a means of worship and remembrance...

**The Significance**
The Prophet (ﷺ) said: "Allah has ninety-nine names, whoever memorizes them will enter Paradise."

**Categories of Names**
The names can be categorized into those reflecting Allah's mercy (Ar-Rahman, Ar-Raheem), power (Al-Qadeer, Al-Aziz), and knowledge (Al-Aleem, Al-Hakeem).

**Practical Application**
Muslims use these names in dhikr (remembrance), dua (supplication), and meditation to develop a closer relationship with Allah.`
    }
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            ← Back to Articles
          </button>
          
          <article className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">{selectedArticle.image}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedArticle.title}</h1>
              <div className="flex justify-center items-center space-x-4 text-gray-400 text-sm">
                <span>By {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Islamic Knowledge</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Articles and insights on Islamic teachings and wisdom</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30 sticky top-4">
              <h2 className="text-xl font-bold text-white mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer ${
                      selectedCategory === category.id ? 'bg-green-600 text-white' : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{category.icon}</span>
                      <span className="font-semibold text-sm">{category.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30 hover:border-green-600/50 transition-all cursor-pointer"
                     onClick={() => setSelectedArticle(article)}>
                  <div className="text-center mb-4">
                    <span className="text-4xl">{article.image}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-green-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                    <span className="text-gray-400 text-xs">{article.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Section */}
            <div className="mt-12 bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-md rounded-2xl p-8 border border-green-600/30">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">📖 Featured Islamic Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <span className="text-3xl mb-2 block">🕌</span>
                  <h3 className="font-semibold text-white mb-2">Mosque Finder</h3>
                  <p className="text-gray-300 text-sm">Find nearby mosques and Islamic centers</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl mb-2 block">📱</span>
                  <h3 className="font-semibold text-white mb-2">Islamic Apps</h3>
                  <p className="text-gray-300 text-sm">Recommended mobile applications</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl mb-2 block">👥</span>
                  <h3 className="font-semibold text-white mb-2">Community</h3>
                  <p className="text-gray-300 text-sm">Connect with fellow Muslims</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;