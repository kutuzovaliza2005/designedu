import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import NotFound from './NotFound';
import BuyModal from './components/BuyModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false); // для кнопки "Наверх"

  const openBuyModal = (courseName = "") => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  // Отслеживание скролла
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <Router>
        <div className="container">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          <main className="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/courses" element={<CoursesPage onEnroll={openBuyModal} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />

          {isModalOpen && (
              <BuyModal
                  selectedCourse={selectedCourse}
                  setSelectedCourse={setSelectedCourse}
                  onClose={() => setIsModalOpen(false)}
              />
          )}

          {showScrollButton && (
              <button
                  onClick={scrollToTop}
                  className="scroll-to-top"
                  aria-label="Наверх"
              >
                ↑
              </button>
          )}
        </div>
      </Router>
  );
}

export default App;