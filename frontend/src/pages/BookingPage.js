import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { HiSparkles } from 'react-icons/hi';
import { FaHeart } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import axios from 'axios';
import API_BASE_URL from '../config/api';
import './BookingPage.css';

const focusAreas = [
  'Emotional Healing & Inner Peace',
  'Healing from Betrayal / Heartbreak',
  'Divorce Recovery & Starting Over',
  'Self-Worth & Confidence',
  'Overcoming Grief & Loss',
  'Finding Life Purpose & Direction',
  'Burnout & Stress Recovery',
  'Relationships & Boundaries',
  'Single Parenting & Overwhelm',
  'Other / Not Sure Yet',
];

const howFoundOptions = [
  'Instagram (@sneha_sagesoul)',
  'Facebook',
  'YouTube',
  'WhatsApp',
  'Friend / Family Referral',
  'Google Search',
  'Other',
];

const steps = [
  { icon: '📞', title: 'Book Your Free Call', desc: 'Fill the form below to request your complimentary 40-minute clarity call.' },
  { icon: '💬', title: 'Share Your Story', desc: "You'll share your current struggle in a safe, judgment-free space." },
  { icon: '🌟', title: 'Find Your Path', desc: 'Together we find clarity on where to begin your healing journey.' },
];

export default function BookingPage() {
  const [form, setForm] = useState({ name: '', age: '', email: '', phone: '', focusArea: '', howFound: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.age || !form.phone || !form.focusArea || !form.howFound) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/api/booking`, form);
      setSubmitted(true);
      toast.success('Your clarity call request has been sent!');
    } catch (err) {
      const msg = err.response?.data?.error || 'Something went wrong. Please try again.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="booking-success">
        <div className="container">
          <AnimatedSection animation="scaleIn" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            <div className="booking-success-icon">💜</div>
            <h1 className="section-title gradient-text" style={{ marginBottom: 20 }}>You Did It!</h1>
            <p style={{ color: 'rgba(167,139,250,0.85)', fontSize: 18, lineHeight: 1.9, marginBottom: 12 }}>
              Your FREE Clarity Call request has been received, <strong style={{ color: '#e8d5ff' }}>{form.name.split(' ')[0]}</strong>.
            </p>
            <p style={{ color: 'rgba(167,139,250,0.85)', fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
              Sneha will personally reach out within <strong style={{ color: '#c084fc' }}>24 hours</strong> to confirm your call.
              Check your email for a confirmation message.
            </p>
            <div className="glass-card" style={{ padding: 36, marginBottom: 32 }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontStyle: 'italic', color: 'rgba(232,213,255,0.9)' }}>
                "It takes courage to ask for help. You've already shown that courage."
              </p>
              <p style={{ marginTop: 16, fontSize: 13, color: 'var(--accent2)', letterSpacing: 1 }}>— Sneha K</p>
            </div>
          </AnimatedSection>
        </div>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <section className="section">
        <div className="container">
          {/* Header */}
          <AnimatedSection animation="fadeInUp" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 80px' }}>
            <span className="section-eyebrow">Free 40-Minute Clarity Call</span>
            <h1 className="section-title">Your clarity begins<br /><span className="gradient-text">right here.</span></h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              No judgment. No pressure. Just guidance. Just heart.
              This one call could change the trajectory of your life.
            </p>
          </AnimatedSection>

          {/* Steps */}
          <div className="booking-steps-grid">
            {steps.map((s, i) => (
              <AnimatedSection key={i} animation="fadeInUp" delay={i * 120}>
                <div className="glass-card booking-step-card">
                  <div className="booking-step-icon">{s.icon}</div>
                  <h3 className="booking-step-title">{s.title}</h3>
                  <p className="booking-step-desc">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Form */}
          <AnimatedSection animation="scaleIn">
            <div className="glass-card booking-form-card">
              <div className="booking-form-orb" />

              <div className="booking-form-header">
                <FaHeart className="booking-form-header-icon" />
                <h2 className="booking-form-title">Book Your Free Call</h2>
                <p className="booking-form-subtitle">Fill in the details below — all fields marked * are required</p>
              </div>

              <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
                <div className="booking-form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Age *</label>
                    <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Your age" min="10" max="100" required />
                  </div>
                </div>

                <div className="booking-form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp / Phone *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: 24 }}>
                  <label>Area You Want to Work On *</label>
                  <select name="focusArea" value={form.focusArea} onChange={handleChange} required>
                    <option value="">Select your focus area</option>
                    {focusAreas.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 24 }}>
                  <label>How Did You Find Me? *</label>
                  <select name="howFound" value={form.howFound} onChange={handleChange} required>
                    <option value="">Select an option</option>
                    {howFoundOptions.map(h => <option key={h} value={h}>{h}</option>)}
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 40 }}>
                  <label>Anything else you'd like to share? (Optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Feel free to share anything that would help me understand where you are right now..." rows={4} />
                </div>

                <button type="submit" className="btn-primary booking-submit-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="booking-spinner" />
                      Sending your request...
                    </>
                  ) : (
                    <><HiSparkles /> Book My FREE Clarity Call</>
                  )}
                </button>

                <p className="booking-note">
                  100% Confidential · No Obligation · Just Heart
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
