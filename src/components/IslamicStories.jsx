import React, { useState } from 'react';

const IslamicStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      id: 1,
      title: "The Generous Merchant",
      category: "Generosity",
      image: "🏪",
      excerpt: "A story about a merchant who gave away all his wealth for Allah's sake...",
      content: `Once there was a wealthy merchant in Baghdad who was known for his honesty and generosity. Despite his wealth, he lived a simple life and always helped the poor.

One day, a poor man came to his shop asking for help. The merchant not only gave him money but also offered him a job. When asked why he was so generous, the merchant replied:

"Allah has blessed me with wealth not for my own pleasure, but as a test. The real treasure is what we send ahead to the afterlife through good deeds."

The merchant continued to help people throughout his life, and when he passed away, the entire city mourned his loss. His legacy of kindness lived on through the many lives he had touched.

**Lesson:** True wealth lies in generosity and helping others for the sake of Allah.`
    },
    {
      id: 2,
      title: "The Patient Mother",
      category: "Patience",
      image: "👩‍👧‍👦",
      excerpt: "A mother's patience during hardship and how Allah rewarded her...",
      content: `Umm Salamah was a devoted mother who faced many hardships after her husband's death. Left alone with young children, she struggled to make ends meet but never complained.

Every night, she would pray: "O Allah, I am patient with Your decree. Please make this trial easy for me and my children."

Despite having very little food, she would share with her neighbors. Her children often went to bed hungry, but she taught them to be grateful for whatever Allah provided.

One day, a wealthy woman heard about her situation and was so moved by her patience and faith that she decided to help. She not only provided for the family but also arranged for the children's education.

Years later, all her children became successful and righteous individuals who continued their mother's legacy of patience and gratitude.

**Lesson:** Patience in times of hardship brings Allah's blessings and relief.`
    },
    {
      id: 3,
      title: "The Truthful Trader",
      category: "Honesty",
      image: "⚖️",
      excerpt: "How honesty in business brought unexpected blessings...",
      content: `Abu Bakr was a cloth merchant known throughout the market for his honesty. He would always point out defects in his merchandise to customers, even if it meant losing a sale.

Other merchants mocked him, saying, "You'll never become rich with such honesty!" But Abu Bakr replied, "I seek Allah's blessing, not just profit."

One day, a customer bought expensive silk from him. Abu Bakr noticed a small tear and called the customer back to show him, offering to reduce the price. The customer was so impressed that he became a regular buyer.

Word spread about Abu Bakr's honesty, and soon people from distant cities came to buy from him, knowing they could trust him completely. His business flourished beyond his imagination.

When asked about his success, he said, "Honesty is the best policy. Allah blesses honest trade and removes blessing from dishonest dealings."

**Lesson:** Honesty in all dealings brings Allah's blessings and true success.`
    },
    {
      id: 4,
      title: "The Forgiving Heart",
      category: "Forgiveness",
      image: "💚",
      excerpt: "A story of forgiveness that changed an enemy into a friend...",
      content: `Hassan was a young man whose father was killed by a tribal enemy named Khalid. According to tribal custom, Hassan had the right to seek revenge.

Years passed, and Hassan grew up with hatred in his heart. One day, he found Khalid's son lost in the desert, dying of thirst. Despite his hatred, Hassan's Islamic values compelled him to save the boy.

He gave the boy water, food, and safely returned him to his father. When Khalid learned that Hassan had saved his son, he was overwhelmed with shame and gratitude.

Khalid came to Hassan and said, "You had every right to let my son die, yet you saved him. Your noble character has defeated my enmity."

Hassan replied, "Islam teaches us to forgive and show mercy. I choose to follow Allah's guidance rather than my anger."

From that day, Khalid became Hassan's closest friend and ally. The two families, once enemies, became united through forgiveness.

**Lesson:** Forgiveness has the power to transform hearts and turn enemies into friends.`
    },
    {
      id: 5,
      title: "The Humble Scholar",
      category: "Humility",
      image: "📚",
      excerpt: "A great scholar's lesson in humility and continuous learning...",
      content: `Imam Ahmad was renowned as one of the greatest scholars of his time. Students traveled from far lands to learn from him, and rulers sought his counsel.

Despite his fame, he lived simply and always said, "The more I learn, the more I realize how little I know."

One day, while teaching a large gathering, a simple Bedouin asked a basic question about prayer. Instead of dismissing it, Imam Ahmad answered with great care and respect.

A student later asked, "Master, why did you spend so much time on such a simple question?"

Imam Ahmad replied, "Every sincere question deserves a sincere answer. Knowledge is not about showing superiority, but about serving others and seeking Allah's pleasure."

He continued, "True scholarship is not in how much you know, but in how humbly you share what you know and how eagerly you continue to learn."

Until his death, Imam Ahmad remained a student, always learning and teaching with humility.

**Lesson:** True knowledge comes with humility, and the greatest scholars are those who remain humble students.`
    },
    {
      id: 6,
      title: "The Grateful Farmer",
      category: "Gratitude",
      image: "🌾",
      excerpt: "How gratitude in times of loss brought unexpected blessings...",
      content: `Yusuf was a poor farmer who worked hard on his small piece of land. One year, a terrible drought destroyed all his crops, leaving him with nothing.

While his neighbors complained bitterly, Yusuf said, "Alhamdulillah (Praise be to Allah). Allah knows what is best for us."

His wife asked, "How can you be grateful when we have lost everything?"

Yusuf replied, "We still have our health, our faith, and each other. Allah has given us so much to be grateful for."

That night, while digging a well, Yusuf discovered a natural spring. The water not only saved his remaining crops but also attracted other farmers to the area.

Soon, Yusuf's land became the most fertile in the region. People came from far to buy his produce, and he became prosperous.

When asked about his success, Yusuf said, "Gratitude in hardship opens the doors of Allah's mercy. What seemed like a loss was actually a blessing in disguise."

**Lesson:** Gratitude to Allah in all circumstances brings unexpected blessings and opens doors of mercy.`
    }
  ];

  const categories = ['All', 'Generosity', 'Patience', 'Honesty', 'Forgiveness', 'Humility', 'Gratitude'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStories = selectedCategory === 'All' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  if (selectedStory) {
    return (
      <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30">
        <button
          onClick={() => setSelectedStory(null)}
          className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
        >
          ← Back to Stories
        </button>
        
        <div className="text-center mb-6">
          <span className="text-4xl mb-2 block">{selectedStory.image}</span>
          <h2 className="text-2xl font-bold text-white mb-2">{selectedStory.title}</h2>
          <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
            {selectedStory.category}
          </span>
        </div>
        
        <div className="text-gray-300 leading-relaxed whitespace-pre-line">
          {selectedStory.content}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center space-x-2">
          <span className="text-2xl">📖</span>
          <span>Islamic Stories</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-all ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {filteredStories.map((story) => (
          <div
            key={story.id}
            onClick={() => setSelectedStory(story)}
            className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30 hover:border-green-600/50 transition-all cursor-pointer"
          >
            <div className="text-center mb-3">
              <span className="text-3xl">{story.image}</span>
            </div>
            
            <h3 className="font-semibold text-white mb-2 text-sm hover:text-green-400 transition-colors">
              {story.title}
            </h3>
            
            <p className="text-gray-400 text-xs mb-3 line-clamp-2">
              {story.excerpt}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                {story.category}
              </span>
              <span className="text-green-400 text-xs">Read →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Inspiration Quote */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-600/30 text-center">
        <p className="text-green-400 text-sm italic">
          "And We made from them leaders guiding by Our command when they were patient and were certain of Our signs."
        </p>
        <p className="text-gray-400 text-xs mt-1">- Quran 32:24</p>
      </div>
    </div>
  );
};

export default IslamicStories;