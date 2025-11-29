import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon, In Sha Allah.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">We're here to help and answer any questions you might have</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-green-500 mr-3">📝</span>
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-green-500 focus:outline-none cursor-pointer"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="content">Content Suggestion</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-green-500 focus:outline-none resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-lg font-semibold transition-all cursor-pointer shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-blue-500 mr-3">📞</span>
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+91 7052806684</p>
                    <p className="text-gray-400 text-sm">Available 9 AM - 6 PM IST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">contact@yaallah.in</p>
                    <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
                    <a href="https://wa.me/message/PXPIV2ZPJHBUK1" target="_blank" rel="noopener noreferrer" 
                       className="text-green-400 hover:text-green-300 cursor-pointer">
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-gray-400 text-sm">Quick support and updates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-purple-500 mr-3">🌐</span>
                Follow Us
              </h2>
              <div className="space-y-4">
                <a href="https://bit.ly/3WVOkBi" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 p-3 bg-pink-600/20 rounded-lg border border-pink-600/30 hover:bg-pink-600/30 transition-all cursor-pointer">
                  <span className="text-pink-400 text-xl">📷</span>
                  <div>
                    <h3 className="font-semibold text-white">Instagram</h3>
                    <p className="text-gray-400 text-sm">Daily Islamic content and updates</p>
                  </div>
                </a>
                <a href="https://www.youtube.com/@yaallahwebsite/videos" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 p-3 bg-red-600/20 rounded-lg border border-red-600/30 hover:bg-red-600/30 transition-all cursor-pointer">
                  <span className="text-red-400 text-xl">📺</span>
                  <div>
                    <h3 className="font-semibold text-white">YouTube</h3>
                    <p className="text-gray-400 text-sm">Islamic lectures and tutorials</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-md rounded-2xl p-8 border border-green-600/30">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-yellow-500 mr-3">⏰</span>
                Response Time
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">General Inquiries</span>
                  <span className="text-green-400 font-semibold">24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Technical Support</span>
                  <span className="text-blue-400 font-semibold">12 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">WhatsApp Messages</span>
                  <span className="text-yellow-400 font-semibold">2-4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-2xl font-bold text-white mb-4">We Value Your Feedback</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your suggestions and feedback help us improve yaALLAH.in for the entire Muslim community. 
              Whether you have ideas for new features, found a bug, or want to share your experience, 
              we're always eager to hear from you. Together, we can build a better Islamic platform for everyone.
            </p>
            <div className="mt-6">
              <p className="text-gray-400 italic">
                "And Allah is the best of planners" - Quran 8:30
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;