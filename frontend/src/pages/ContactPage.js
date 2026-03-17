import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import axios from 'axios';
import API_BASE_URL from '../config/api';
import './ContactPage.css';

const socials = [
  { icon: <FaInstagram size={22} />, label: 'Instagram', handle: '@sneha_sagesoul', url: 'https://www.instagram.com/sneha_sagesoul', color: '#e879f9' },
  { icon: <FaFacebook size={22} />, label: 'Facebook', handle: 'Sneha SageSoul', url: 'https://www.facebook.com/profile.php?id=61581997641504', color: '#7c3aed' },
  { icon: <FaWhatsapp size={22} />, label: 'WhatsApp', handle: '+91 93536 20629', url: 'https://wa.me/919353620629', color: '#22c55e' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/api/contact`, form);
      setSent(true);
      toast.success('Message sent! Sneha will reach out soon.');
    } catch (err) {
      toast.error(err.response?.data?.error || 'Could not send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fadeInUp" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 80px' }}>
            <span className="section-eyebrow">Get in Touch</span>
            <h1 className="section-title">Let's <span className="gradient-text">Connect</span></h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Whether you have a question, want to learn more, or simply need to be heard —
              reach out. I'm here.
            </p>
          </AnimatedSection>

          <div className="contact-layout">
            {/* Contact Info */}
            <AnimatedSection animation="fadeInLeft">
              <div>
                <div className="glass-card contact-info-card">
                  <h3 className="contact-info-title">Direct Contact</h3>
                  <div className="contact-links">
                    <a href="mailto:sagesoulsneha@gmail.com" className="contact-link-item">
                      <div className="contact-link-icon">
                        <FaEnvelope size={18} />
                      </div>
                      <div>
                        <div className="contact-link-label">Email</div>
                        <div className="contact-link-value">sagesoulsneha@gmail.com</div>
                      </div>
                    </a>

                    <a href="tel:+919353620629" className="contact-link-item">
                      <div className="contact-link-icon">
                        <FaPhone size={18} />
                      </div>
                      <div>
                        <div className="contact-link-label">Call / WhatsApp</div>
                        <div className="contact-link-value">+91 93536 20629</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="glass-card contact-social-card">
                  <h3 className="contact-social-title">Follow for Daily Healing</h3>
                  <div className="contact-social-links">
                    {socials.map((s, i) => (
                      <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="contact-social-item">
                        <div style={{ color: s.color }}>{s.icon}</div>
                        <div>
                          <div className="contact-social-name">{s.label}</div>
                          <div className="contact-social-handle">{s.handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="fadeInRight">
              <div className="glass-card contact-form-card">
                {sent ? (
                  <div className="contact-success">
                    <div className="contact-success-icon">💜</div>
                    <h3 className="contact-success-title">Message Received!</h3>
                    <p className="contact-success-text">
                      Thank you for reaching out, <strong style={{ color: '#c084fc' }}>{form.name.split(' ')[0]}</strong>.
                      Sneha will respond within 24–48 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="contact-form-title">Send a Message</h3>
                    <p className="contact-form-subtitle">I personally read every message.</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group" style={{ marginBottom: 20 }}>
                        <label>Your Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                      </div>
                      <div className="form-group" style={{ marginBottom: 20 }}>
                        <label>Email Address *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                      </div>
                      <div className="form-group" style={{ marginBottom: 32 }}>
                        <label>Your Message *</label>
                        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Share what's on your heart..." rows={6} required />
                      </div>
                      <button type="submit" className="btn-primary contact-submit-btn" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Final message */}
          <AnimatedSection animation="fadeInUp" delay={400} style={{ textAlign: 'center', marginTop: 80 }}>
            <div className="contact-quote-card">
              <p className="contact-quote-text">
                "It takes courage to ask for help. If you've read this far…<br />your healing has already started."
              </p>
              <p className="contact-quote-author">— Sneha K, SageSoul</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
