import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiSparkles } from 'react-icons/hi';
import './StickyBookBtn.css';

export default function StickyBookBtn() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (location.pathname === '/book') return null;

  return (
    <div className={`sticky-book-btn ${visible ? 'visible' : ''}`}>
      <Link to="/book" className="sticky-book-link">
        <HiSparkles size={16} />
        <span className="sticky-book-text">Book Free Call</span>
      </Link>
    </div>
  );
}
