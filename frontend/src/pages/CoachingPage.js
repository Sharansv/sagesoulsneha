import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheck } from 'react-icons/hi';
import { FaHeart, FaStar } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import './CoachingPage.css';

const benefits = [
  'You breathe without heaviness',
  'You stop begging for love — you become love',
  'You set boundaries without guilt',
  'You wake up feeling like YOU again',
  'You make decisions from clarity, not fear',
  'You feel worthy of good things in life',
];

const sessions = [
  { num: '01', title: 'Discovery & Clarity', desc: 'We uncover what is truly holding you back and define your vision for transformation.' },
  { num: '02', title: 'Emotional Release', desc: 'Safe space to release buried pain, grief, and old stories that no longer serve you.' },
  { num: '03', title: 'Identity Healing', desc: 'Rebuild who you are beyond your wounds, your roles, and others\' expectations.' },
  { num: '04', title: 'Inner Child Work', desc: 'Heal the younger version of you who still needs to be seen and loved.' },
  { num: '05', title: 'Boundaries & Self-Worth', desc: 'Learn to honor yourself fiercely — in relationships, at work, and within.' },
  { num: '06', title: 'Confidence Activation', desc: 'Step into your power and start showing up for your own life fully.' },
  { num: '07', title: 'Vision & Purpose', desc: 'Connect with your deeper calling and align your life with your soul.' },
  { num: '08', title: 'Integration & Rise', desc: 'Solidify your transformation and design the next beautiful chapter of your life.' },
];

export default function CoachingPage() {
  return (
    <main className="coaching-page" style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section className="coaching-hero section">
        <div className="ch-orb-1" /><div className="ch-orb-2" />
        <div className="container">
          <AnimatedSection animation="fadeInUp" style={{ maxWidth: 740, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-eyebrow">1:1 Personal Coaching · Online</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
              A Sacred Healing Space<br /><span className="gradient-text">Just for You</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
              This is not therapy. Not advice. This is <strong style={{ color: '#e8d5ff' }}>transformation</strong>.
              A 1:1 space where you are heard without judgment and guided with compassion.
            </p>
            <Link to="/book" className="btn-primary" style={{ fontSize: 16, padding: '16px 44px' }}>
              Book Free Clarity Call <HiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Who It's For */}
      <section className="who-for section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="who-grid">
            <AnimatedSection animation="fadeInLeft">
              <div className="who-card glass-card">
                <div className="wf-icon">🌿</div>
                <h3>For Everyone</h3>
                <p>Anyone seeking emotional clarity, inner peace, and life direction is welcome here.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={100}>
              <div className="who-card glass-card featured-card">
                <div className="wf-icon">💗</div>
                <h3>Special Focus</h3>
                <p>Women, divorcees, single parents, and those silently suffering — who smile outside but cry inside.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={200}>
              <div className="who-card glass-card">
                <div className="wf-icon">🌐</div>
                <h3>Online & Flexible</h3>
                <p>Sessions conducted online from the comfort of your home. Available globally, on your schedule.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="what-receive section">
        <div className="container">
          <AnimatedSection animation="fadeInUp" style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-eyebrow">🎁 What You Receive</span>
            <h2 className="section-title">Your Complete<br /><span className="gradient-text">Transformation Package</span></h2>
          </AnimatedSection>

          <div className="receive-grid">
            <AnimatedSection animation="fadeInLeft">
              <div className="receive-main glass-card">
                <div className="rm-badge">Core Program</div>
                <div className="rm-number gradient-text">8</div>
                <h3>Deep Transformation Sessions</h3>
                <p>Online · English · 60–90 min each</p>
                <div className="rm-includes">
                  <div className="ri-item">
                    <HiCheck className="ri-check" />
                    <span>8 deep 1:1 coaching sessions online</span>
                  </div>
                  <div className="ri-item">
                    <HiCheck className="ri-check" />
                    <span>Complimentary 15-min guidance calls between sessions</span>
                  </div>
                  <div className="ri-item">
                    <HiCheck className="ri-check" />
                    <span>Personal tools for clarity, healing & confidence</span>
                  </div>
                  <div className="ri-item">
                    <HiCheck className="ri-check" />
                    <span>Emotional, practical, and soul-level alignment</span>
                  </div>
                  <div className="ri-item">
                    <HiCheck className="ri-check" />
                    <span>Session notes and personalized practices</span>
                  </div>
                </div>
                <Link to="/book" className="btn-primary" style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}>
                  Begin Your Journey
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div className="receive-side">
                <div className="rs-card glass-card">
                  <div className="rsc-icon">🎯</div>
                  <h4>Start with Free</h4>
                  <p>Book a complimentary 40-minute Clarity Call before committing. No pressure. Just heart.</p>
                  <Link to="/book" className="btn-secondary" style={{ marginTop: 20 }}>Book Free Call</Link>
                </div>
                <div className="rs-card glass-card" style={{ marginTop: 24 }}>
                  <div className="rsc-icon">🌙</div>
                  <h4>Between Sessions</h4>
                  <p>You're never left alone. Complimentary 15-min support calls keep you anchored between our deep dives.</p>
                </div>
                <div className="rs-card glass-card" style={{ marginTop: 24, borderColor: 'rgba(240,198,116,0.3)' }}>
                  <div className="rsc-icon">🌍</div>
                  <h4>Online · Flexible</h4>
                  <p>All sessions conducted online from the comfort of your home. Available globally.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 8 Sessions Breakdown */}
      <section className="sessions-section section">
        <div className="container">
          <AnimatedSection animation="fadeInUp" style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-eyebrow">The Journey</span>
            <h2 className="section-title">8 Sessions of<br /><span className="gradient-text">Deep Transformation</span></h2>
          </AnimatedSection>

          <div className="sessions-grid">
            {sessions.map((s, i) => (
              <AnimatedSection key={i} animation="fadeInUp" delay={i * 80}>
                <div className="session-card glass-card">
                  <div className="sc-num gradient-text">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Life After Coaching */}
      <section className="after-section section">
        <div className="after-bg" />
        <div className="container">
          <AnimatedSection animation="fadeInUp" style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-eyebrow">💖 After Coaching</span>
            <h2 className="section-title">How life feels<br /><span className="gradient-text">after our work together</span></h2>
          </AnimatedSection>

          <div className="benefits-orbit">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} animation="scaleIn" delay={i * 100}>
                <div className="benefit-pill">
                  <FaHeart className="bp-icon" />
                  <span>{b}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeInUp" delay={700} style={{ textAlign: 'center', marginTop: 60 }}>
            <Link to="/book" className="btn-primary" style={{ fontSize: 16, padding: '16px 44px' }}>
              I Want This for Myself <HiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
