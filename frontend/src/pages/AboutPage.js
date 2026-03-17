import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import './AboutPage.css';

const timeline = [
  { icon: '⚡', label: 'Lost Her Job', desc: 'Stripped of livelihood and professional identity overnight.' },
  { icon: '🗣️', label: 'Lost Respect', desc: 'People spoke behind her back, tearing down her character.' },
  { icon: '🥀', label: 'Emotional Betrayal', desc: 'Betrayed by the people she trusted the most.' },
  { icon: '🕊️', label: 'Faced Deep Loss', desc: 'Carried grief no one knew about in silence.' },
  { icon: '🌑', label: 'Lost Faith in Life', desc: 'Even attempted to end her life, despite having a family who loved her.' },
  { icon: '✦', label: 'Divine Turning Point', desc: 'Her mentor Maalica entered her life and shook her soul awake.' },
  { icon: '🌅', label: 'The Rise Begins', desc: 'From nothing to everything — a complete life transformation.' },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero section">
        <div className="about-orb-1" />
        <div className="about-orb-2" />
        <div className="container">
          <AnimatedSection animation="fadeInUp" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <span className="section-eyebrow">My Story</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
              From <em style={{ fontStyle: 'italic', color: '#c084fc' }}>"I Give Up"</em><br />
              to <span className="gradient-text">"I Rise"</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              This is not just a coaching page. This is the story of a soul who was shattered
              — and chose to rise anyway.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Content */}
      <section className="story-section section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="story-layout">
            <AnimatedSection animation="fadeInLeft" className="story-main">
              <div className="story-intro glass-card">
                <h2>The Eldest Daughter Who Forgot Herself</h2>
                <p>
                  I am the eldest daughter in my family. I grew up loving, caring, pleasing everyone.
                  I had great friends — Sheela, Sophie, Edel, Diana, and Divya — who stood by me.
                  But somewhere along the way, <strong>I forgot to stand for myself.</strong>
                </p>
                <p>
                  I lived for others. I ignored my voice, my needs, my dreams.
                  And life hit me… hard. Very hard.
                </p>
                <p>
                  Every night I cried silently — <em>"What will happen tomorrow? Why am I even alive?"</em>
                </p>
                <p>
                  I believed I was a failure. I was useless. I was <strong>NOTHING.</strong>
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" className="story-sidebar">
              <div className="about-owner-image glass-card">
                <div className="about-owner-placeholder">
                  <img src="/Images/sneha2.jpeg" alt="Sneha K - Certified Life Coach" />
                </div>
                <div className="about-owner-caption">
                  <strong>Sneha K</strong>
                  <span>Certified Life Coach</span>
                </div>
              </div>

              <div className="sidebar-quote glass-card">
                <div className="sq-big">"</div>
                <blockquote>
                  I looked in the mirror and said "I don't even recognize myself anymore."
                </blockquote>
              </div>
              <div className="sidebar-stat glass-card">
                <div className="ss-icon">🌸</div>
                <p>Every silent warrior deserves to be seen, heard, and healed.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section section">
        <div className="container">
          <AnimatedSection animation="fadeInUp" style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-eyebrow">The Journey</span>
            <h2 className="section-title">The path through<br /><span className="gradient-text">darkness to light</span></h2>
          </AnimatedSection>

          <div className="timeline">
            {timeline.map((item, i) => (
              <AnimatedSection key={i} animation={i % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'} delay={i * 100}>
                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content glass-card">
                    <div className="tl-icon">{item.icon}</div>
                    <h3>{item.label}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="timeline-dot" />
                </div>
              </AnimatedSection>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* Mentor / Turning Point */}
      <section className="mentor-section section">
        <div className="container">
          <AnimatedSection animation="scaleIn">
            <div className="mentor-card glass-card">
              <div className="mentor-orb" />
              <div className="mentor-content">
                <div className="mentor-left">
                  <span className="section-eyebrow">🌟 The Turning Point</span>
                  <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                    My mentor <em style={{ color: '#c084fc' }}>Maalica</em><br />entered my life
                  </h2>
                  <p style={{ color: 'rgba(167,139,250,0.85)', lineHeight: 1.9, fontSize: 16 }}>
                    She didn't just counsel me — she shook my soul awake.
                    She helped me see that healing is possible. Peace is possible.
                    <strong style={{ color: '#e8d5ff' }}> Loving yourself again is possible.</strong>
                  </p>
                  <p style={{ color: 'rgba(167,139,250,0.85)', lineHeight: 1.9, fontSize: 16, marginTop: 16 }}>
                    From that moment… my life shifted. From nothing to <strong style={{ color: '#c084fc' }}>EVERYTHING.</strong>
                  </p>
                </div>
                <div className="mentor-right">
                  <div className="mentor-quote">
                    <div className="mq-star">✦</div>
                    <p>"Healing is possible.<br />Peace is possible.<br />Loving yourself again<br />is possible."</p>
                    <span>— Maalica, Sneha's Mentor</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why She Coaches */}
      <section className="why-coach-section section">
        <div className="container">
          <div className="why-coach-layout">
            <AnimatedSection animation="fadeInLeft">
              <span className="section-eyebrow">🔥 Why I Became a Life Coach</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
                This is not just<br />coaching for me.
              </h2>
              <div className="divider" />
              <div className="why-reasons">
                <div className="wr-item">
                  <div className="wr-icon">🤍</div>
                  <p>Because no woman should cry alone like I did.</p>
                </div>
                <div className="wr-item">
                  <div className="wr-icon">👁️‍🗨️</div>
                  <p>Because no silent warrior should feel unseen.</p>
                </div>
                <div className="wr-item">
                  <div className="wr-icon">🌗</div>
                  <p>Because I know what it's like to smile outside and die inside.</p>
                </div>
                <div className="wr-item">
                  <div className="wr-icon">🔥</div>
                  <p><strong>This is my calling. This is my soul work.</strong></p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div className="soul-card glass-card">
                <div className="sc-header">If my story touched your heart…</div>
                <p>You don't have to walk this path alone. I have been exactly where you are.
                   And I know the way through.</p>
                <p style={{ marginTop: 16, fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: 'italic', color: '#c084fc' }}>
                  "Your life can change from nothing to everything."
                </p>
                <Link to="/book" className="btn-primary" style={{ marginTop: 32, display: 'inline-flex' }}>
                  Let's Talk <HiArrowRight />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
