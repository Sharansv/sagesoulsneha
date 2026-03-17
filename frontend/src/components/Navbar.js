import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'My Story', path: '/about' },
  { label: '1:1 Coaching', path: '/coaching' },
  { label: 'Group', path: '/group' },
  { label: 'Stories', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on outside click
  const handleOutsideClick = useCallback((e) => {
    if (
      open &&
      drawerRef.current &&
      !drawerRef.current.contains(e.target) &&
      toggleRef.current &&
      !toggleRef.current.contains(e.target)
    ) {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      {/* Top navbar bar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="SageSoul Sneha Home">
            <span className="logo-icon">✦</span>
            <span className="logo-text">SageSoul Sneha</span>
            {/* <span className="logo-name"></span> */}
          </Link>

          {/* Desktop links - visible only on large screens */}
          <div className="nav-links-desktop">
            {navLinks.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={`nav-link ${location.pathname === l.path ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/book" className="btn-primary nav-cta">Book Free Call</Link>
          </div>

          {/* Hamburger toggle - visible only on mobile/tablet */}
          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            ref={toggleRef}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer - rendered OUTSIDE the nav to avoid stacking context issues */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`} ref={drawerRef}>
        <div className="drawer-header">
          <Link to="/" className="drawer-logo" onClick={() => setOpen(false)}>
            <span className="logo-icon">✦</span>
            <span className="logo-text">SageSoul</span>
          </Link>
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <HiX size={24} />
          </button>
        </div>
        <div className="drawer-links">
          {navLinks.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={`drawer-link ${location.pathname === l.path ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="drawer-footer">
          <Link to="/book" className="btn-primary drawer-cta" onClick={() => setOpen(false)}>
            Book Free Call
          </Link>
        </div>
      </div>

      {/* Overlay backdrop */}
      <div
        className={`nav-overlay ${open ? 'active' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
