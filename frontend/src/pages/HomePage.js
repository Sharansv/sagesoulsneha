import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaLeaf } from 'react-icons/fa';
import { HiSparkles, HiArrowRight } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import './HomePage.css';

const painPoints = [
  '"Everyone sees me… but no one feels my pain."',
  '"I lost myself while trying to keep everyone happy."',
  '"I smile outside but I\'m breaking inside."',
  '"I don\'t even recognize myself anymore."',
];

const whyPoints = [
  { icon: '🤍', title: 'I Know Your Pain', desc: 'I\'ve been betrayed, lost my job, my hope, my peace — all at once. I coach from lived experience.' },
  { icon: '🛡️', title: 'Safe & Judgment-Free', desc: 'This is a sacred space where you are truly heard without any judgment or pressure.' },
  { icon: '🔥', title: 'Real Transformation', desc: 'Not just talk therapy — we create emotional, practical, and soul-level shifts that last.' },
  { icon: '🌟', title: 'Your Calling Is Calling', desc: 'From nothing to everything. I\'ve lived it, and I\'ll walk beside you as you do too.' },
];

const stats = [
  { number: 100, suffix: '+', label: 'Lives Transformed' },
  { number: 40, suffix: '', label: 'Min Free Clarity Call' },
  { number: 8, suffix: '', label: 'Deep Sessions' },
  { number: null, display: '1:1', label: 'Personal Coaching' },
];

export default function HomePage() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }} />
          ))}
        </div>

        <div className="container hero-content">
          <AnimatedSection animation="fadeInUp" delay={0}>
            <div className="hero-badge">
              <HiSparkles /> Certified Life Coach
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={150}>
            <h1 className="hero-title">
              From <em>Broken</em> to<br />
              <span className="gradient-text">Breakthrough</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={300}>
            <p className="hero-subtitle">
              If you cry in silence saying <em>"I can't do this anymore"</em> —<br className="desktop-br" />
              know that you're <strong>not alone</strong> anymore. Your healing starts here.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={450}>
            <div className="hero-ctas">
              <Link to="/book" className="btn-primary hero-btn-main">
                <HiSparkles /> Book Your FREE 40-Min Clarity Call
              </Link>
              <Link to="/about" className="btn-secondary">
                My Story <HiArrowRight />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="hero-trust">
              <div className="trust-stars">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="star-icon" />)}
              </div>
              <span>Trusted by 100+ women, divorcees, and silent warriors</span>
            </div>
          </AnimatedSection>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Pain Points / Resonance Section */}
      <section className="resonance-section section">
        <div className="resonance-bg" />
        <div className="container">
          <AnimatedSection animation="fadeInUp">
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span className="section-eyebrow">Does this sound familiar?</span>
              <h2 className="section-title">You're not broken.<br />You're <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>healing.</em></h2>
            </div>
          </AnimatedSection>

          <div className="resonance-grid">
            {painPoints.map((point, i) => (
              <AnimatedSection key={i} animation="fadeInUp" delay={i * 120}>
                <div className="resonance-card glass-card">
                  <div className="resonance-quote-mark">"</div>
                  <p>{point.replace(/"/g, '')}</p>
                  <FaHeart className="resonance-heart" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="resonance-answer">
              <p>If any of these words hit your heart — <strong>this space was made for you.</strong></p>
              <Link to="/book" className="btn-primary">Start Your Healing Journey</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Welcome / Intro Section */}
      <section className="welcome-section section">
        <div className="container">
          <div className="welcome-grid">
            <AnimatedSection animation="fadeInLeft" className="welcome-visual">
              <div className="welcome-card-outer">
                <div className="welcome-card glass-card">
                  <div className="wc-accent-line" />

                  <div className="owner-image-container">
                    <div className="owner-image-placeholder">
                      <img src="/images/sneha1.jpeg" alt="Sneha K - Certified Life Coach" />
                    </div>
                    <div className="owner-image-ring" />
                  </div>

                  <h3>Hi, I'm Sneha K</h3>
                  <p className="wc-title">Certified Life Coach</p>
                  <p className="wc-desc">I help people who silently suffer from emotional pain, self-doubt, betrayal, burnout, and inner emptiness.</p>
                  <div className="wc-focus">
                    <span>Women</span>
                    <span>Divorcees</span>
                    <span>Single Parents</span>
                    <span>Silent Warriors</span>
                  </div>
                </div>
                <div className="welcome-card-glow" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" className="welcome-text">
              <span className="section-eyebrow">Welcome, dear soul</span>
              <h2 className="section-title">You smile outside,<br />but <em>cry inside</em>.</h2>
              <div className="divider" />
              <p className="section-subtitle" style={{ maxWidth: '100%', marginBottom: 24 }}>
                I see you. Not just the strong face you show the world — I see the quiet tears,
                the silent prayers, the exhausted soul that keeps showing up for everyone else
                while forgetting yourself.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: 32 }}>
                Special focus on <strong style={{ color: 'var(--accent2)' }}>women, divorcees, single parents</strong> and
                anyone who smiles outside but cries inside.
              </p>
              <Link to="/coaching" className="btn-primary">
                Explore 1:1 Coaching <HiArrowRight />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-bg" />
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <AnimatedSection key={i} animation="scaleIn" delay={i * 100}>
                <div className="stat-item">
                  <div className="stat-number gradient-text">
                    {s.number !== null ? (
                      <CountUp end={s.number} suffix={s.suffix} duration={2000} />
                    ) : (
                      s.display
                    )}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="why-section section">
        <div className="container">
          <AnimatedSection animation="fadeInUp" style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-eyebrow">Why Work With Me</span>
            <h2 className="section-title">I don't coach from <em>theory</em>.<br />I coach from <span className="gradient-text">pain & survival.</span></h2>
          </AnimatedSection>

          <div className="why-grid">
            {whyPoints.map((w, i) => (
              <AnimatedSection key={i} animation="fadeInUp" delay={i * 120}>
                <div className="why-card glass-card">
                  <div className="why-icon">{w.icon}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Story Teaser */}
      <section className="story-teaser section">
        <div className="container">
          <div className="story-inner glass-card">
            <div className="story-orb" />
            <div className="story-content">
              <AnimatedSection animation="fadeInLeft">
                <span className="section-eyebrow">My Story</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                  From <em>"I Give Up"</em><br />to <span className="gradient-text">"I Rise"</span>
                </h2>
                <div className="divider" />
                <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: 28, maxWidth: 520 }}>
                  I lost my job, my respect, my faith in life. I even attempted to end my life.
                  Every night I cried silently — <em>"Why am I even alive?"</em>
                  <br /><br />
                  Then one person changed everything. And now I'm here — to be that person for you.
                </p>
                <Link to="/about" className="btn-primary">
                  Read My Full Story <HiArrowRight />
                </Link>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight">
                <div className="story-quote-block">
                  <div className="big-quote">"</div>
                  <blockquote>
                    Your life can change from nothing to everything. I am living proof.
                  </blockquote>
                  <div className="quote-author">— Sneha K, Certified Life Coach</div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="testimonial-preview section">
        <div className="container">
          <AnimatedSection animation="fadeInUp" style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-eyebrow">Transformation Stories</span>
            <h2 className="section-title">Real hearts.<br /><span className="gradient-text">Real healing.</span></h2>
          </AnimatedSection>

          <div className="testimonial-preview-grid">
            <AnimatedSection animation="fadeInUp" delay={0}>
              <div className="tp-card glass-card">
                <div className="tp-stars">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
                <p>"I used to cry every night without knowing why. After my first call with Sneha, I felt heard for the first time in years."</p>
                <div className="tp-author">
                  <div className="tp-avatar">S</div>
                  <div>
                    <strong>A Single Mother</strong>
                    <span>Chennai</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={150}>
              <div className="tp-card glass-card featured-testimonial">
                <div className="tp-stars">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
                <p>"I was a strong woman outside, but inside I was shattered. Sneha didn't just guide me… she held my soul with strength. I feel reborn."</p>
                <div className="tp-author">
                  <div className="tp-avatar">D</div>
                  <div>
                    <strong>Divorce Survivor</strong>
                    <span>Coimbatore</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="tp-card glass-card">
                <div className="tp-stars">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
                <p>"I cried during my first session. But now I've learned to handle even my worst days with grace. Thank you, Sneha."</p>
                <div className="tp-author">
                  <div className="tp-avatar">A</div>
                  <div>
                    <strong>Woman in Healing Journey</strong>
                    <span>India</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeInUp" delay={400} style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/testimonials" className="btn-secondary">
              Read All Stories <HiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section section">
        <div className="final-cta-bg" />
        <div className="container">
          <AnimatedSection animation="scaleIn">
            <div className="final-cta-card glass-card">
              <div className="fcc-orb" />
              <FaLeaf className="fcc-icon" />
              <h2 className="fcc-title">
                It takes courage to ask for help.
              </h2>
              <p className="fcc-subtitle">
                If you've read this far… your healing has already started.<br />
                Take the first step. I'll be right here.
              </p>
              <Link to="/book" className="btn-primary fcc-btn">
                <HiSparkles /> Take the First Step — Book Your Clarity Call
              </Link>
              <p className="fcc-note">100% Free · No Pressure · Just Heart</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
