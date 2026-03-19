import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyBookBtn from './components/StickyBookBtn';
import ScrollToTop from './components/ScrollToTop';
import GoToTop from './components/GoToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoachingPage from './pages/CoachingPage';
import GroupPage from './pages/GroupPage';
import BookingPage from './pages/BookingPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <StickyBookBtn />
      <GoToTop />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}

export default App;
