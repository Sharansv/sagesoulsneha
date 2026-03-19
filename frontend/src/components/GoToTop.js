import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './GoToTop.css';

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`go-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Go to top"
    >
      <FaArrowUp />
    </button>
  );
}
