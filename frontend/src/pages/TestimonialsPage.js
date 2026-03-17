import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import './TestimonialsPage.css';

const testimonials = [
  {
    text: "I used to cry every night without knowing why. After my first call with Sneha, I felt heard for the first time in years. I didn't heal in one day, but for the first time — I believed healing was possible.",
    name: "A Single Mother",
    location: "Chennai",
    letter: "S",
    tags: ["Single Parent", "Emotional Healing"]
  },
  {
    text: "I was a strong woman outside, but inside I was shattered. Sneha didn't just guide me… she held my soul with strength. I feel reborn. Truly reborn.",
    name: "Divorce Survivor",
    location: "Coimbatore",
    letter: "D",
    tags: ["Divorce Recovery", "Confidence"]
  },
  {
    text: "I cried during my very first session. But now I've learned to handle even my worst days with strength and grace. Thank you, Sneha. You truly changed my life.",
    name: "Woman in Healing Journey",
    location: "India",
    letter: "A",
    tags: ["Emotional Healing", "Resilience"]
  },
  {
    text: "I came to Sneha completely broken after betrayal. She didn't give me advice — she helped me find myself. I didn't even know who I was before. Now I do.",
    name: "Professional Woman",
    location: "Bangalore",
    letter: "P",
    tags: ["Betrayal Recovery", "Identity"]
  },
  {
    text: "The free clarity call itself was life-changing. Sneha listened to me for 40 minutes like no one ever has. I immediately signed up for the full program.",
    name: "Working Mother",
    location: "Mumbai",
    letter: "W",
    tags: ["Clarity Call", "Decision Making"]
  },
  {
    text: "I thought coaching was not for me. But Sneha's warmth and genuine care made me open up in ways I never could. She coaches from the heart, not from a script.",
    name: "Young Professional",
    location: "Hyderabad",
    letter: "Y",
    tags: ["Emotional Safety", "Growth"]
  },
];

export default function TestimonialsPage() {
  return (
    <main className="testimonials-page">
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fadeInUp" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 80px' }}>
            <span className="section-eyebrow">Transformation Stories</span>
            <h1 className="section-title">Real Hearts.<br /><span className="gradient-text">Real Healing.</span></h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              These are the stories of women and silent warriors who took one courageous step.
              Their words, their truth, their rise.
            </p>
          </AnimatedSection>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} animation="fadeInUp" delay={i * 100}>
                <div className="glass-card testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, s) => <FaStar key={s} />)}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-footer">
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">{t.letter}</div>
                      <div>
                        <div className="testimonial-name">{t.name}</div>
                        <div className="testimonial-location">{t.location}</div>
                      </div>
                    </div>
                    <div className="testimonial-tags">
                      {t.tags.map((tag, ti) => (
                        <span key={ti} className="testimonial-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="scaleIn">
            <div className="glass-card testimonial-cta-card">
              <div className="testimonial-cta-orb" />
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 48px)', position: 'relative', marginBottom: 20 }}>
                Your story is waiting<br />to be <span className="gradient-text">written</span>
              </h2>
              <p className="testimonial-cta-text">
                Every healing journey starts with a single step. Book your free clarity call today.
              </p>
              <Link to="/book" className="btn-primary" style={{ fontSize: 16, padding: '16px 44px', position: 'relative' }}>
                Start Your Story <HiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
