import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-orb footer-orb-1" />
      <div className="footer-orb footer-orb-2" />

      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-star">✦</span>
              <span>SageSoul</span>
              <span className="footer-logo-name">Sneha</span>
            </div>
            <p className="footer-tagline">
              From Nothing to Everything —<br />Your Life Can Shift Too.
            </p>
            <p className="footer-by">by <strong>Sneha K</strong> · Certified Life Coach</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/sneha_sagesoul" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61581997641504" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://wa.me/919353620629" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://www.linkedin.com/in/sneha-sagesoul-b9400a3b8/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4>Navigate</h4>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">My Story</Link>
              <Link to="/coaching">1:1 Coaching</Link>
              <Link to="/group">Group Healing</Link>
              <Link to="/testimonials">Stories</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-contact">
            <h4>Connect</h4>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:sagesoulsneha@gmail.com">sagesoulsneha@gmail.com</a>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href="tel:+919353620629">+91 93536 20629</a>
            </div>
            <div className="contact-item">
              <FaWhatsapp className="contact-icon" />
              <a href="https://wa.me/919353620629" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <Link to="/book" className="btn-primary footer-cta">Book Free Clarity Call</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SageSoul Sneha. All rights reserved.</p>
          <p className="footer-love">Made with 💜 for every silent warrior</p>
        </div>
      </div>
    </footer>
  );
}
