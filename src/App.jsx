import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Footer from './components/Footer'
import Section from './components/Section'
import PostDetail from './components/PostDetail'
import LogIn from './components/LogIn'
import Register from './components/Register'
import AdminDashboard from './admin/AdminDashboard'
import DuroodShareef from './components/DuroodShareef'
import Dua from './components/Dua'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/TermsConditions'
import QuranPage from './components/QuranPage'
import HadithPage from './components/HadithPage'
import PrayerGuide from './components/PrayerGuide'
import WazifaCollection from './components/WazifaCollection'
import ArticlesPage from './components/ArticlesPage'
import SurahKafirun from './components/SurahKafirun'
import SurahQadr from './components/SurahQadr'
import SurahIkhlas from './components/SurahIkhlas'
import SurahMaun from './components/SurahMaun'
import SurahTalaq from './components/SurahTalaq'
import SurahKahf from './components/SurahKahf'
import SurahWaqiah from './components/SurahWaqiah'
import Surah from './components/Surah'
import { PostProvider } from './contexts/PostContext'

const HomePage = () => (
  <div className="relative w-full">
    <Background />
    <Navbar />
    <main className="relative min-h-[50vh]">
      <Section />
    </main>
    <Footer />
  </div>
)

const App = () => {
  return (
    <PostProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/durood" element={<DuroodShareef />} />
          <Route path="/dua" element={<Dua />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/quran" element={<QuranPage />} />
          <Route path="/hadith" element={<HadithPage />} />
          <Route path="/prayer-guide" element={<PrayerGuide />} />
          <Route path="/wazifa" element={<WazifaCollection />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/surah" element={<Surah />} />
          <Route path="/surah-kafirun" element={<SurahKafirun />} />
          <Route path="/surah-qadr" element={<SurahQadr />} />
          <Route path="/surah-ikhlas" element={<SurahIkhlas />} />
          <Route path="/surah-maun" element={<SurahMaun />} />
          <Route path="/surah-talaq" element={<SurahTalaq />} />
          <Route path="/surah-kahf" element={<SurahKahf />} />
          <Route path="/surah-waqiah" element={<SurahWaqiah />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </PostProvider>
  )
}

export default App