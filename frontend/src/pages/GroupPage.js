import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import './GroupPage.css';

const topics = [
  { icon: '🌊', title: 'Emotional Release & Inner Peace', desc: 'Let go of what you\'ve been holding for too long.' },
  { icon: '🥀', title: 'Healing from Betrayal & Abandonment', desc: 'Reclaim your trust — in others and in yourself.' },
  { icon: '👑', title: 'Self-Worth & Boundaries for Women', desc: 'Know your value. Hold your space. Live your power.' },
  { icon: '🔮', title: 'Spiritual Alignment & Personal Power', desc: 'Connect with your higher self and walk with purpose.' },
];

export default function GroupPage() {
  return (
    <main className="group-page">
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fadeInUp" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 80px' }}>
            <span className="section-eyebrow">Group Coaching & Community</span>
            <h1 className="section-title">You Don't Have to<br /><span className="gradient-text">Heal Alone</span></h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Join the WhatsApp Healing & Growth Circle — a community designed for hearts like yours.
              Weekly paid classes. Sisterhood. Soulful growth.
            </p>
          </AnimatedSection>

          <div className="group-topics-grid">
            {topics.map((t, i) => (
              <AnimatedSection key={i} animation="fadeInUp" delay={i * 100}>
                <div className="glass-card group-topic-card">
                  <div className="group-topic-icon">{t.icon}</div>
                  <h3 className="group-topic-title">{t.title}</h3>
                  <p className="group-topic-desc">{t.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="scaleIn">
            <div className="glass-card group-cta-card">
              <div className="group-cta-orb" />
              <div className="group-cta-icon">🌸</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, position: 'relative' }}>
                Join the<br /><span className="gradient-text">Healing Circle</span>
              </h2>
              <p className="group-cta-text">
                This community is for you if you want support, sisterhood, and soulful growth.
                Weekly healing sessions. Daily inspiration. Real connection.
              </p>
              <a
                href="https://wa.me/919353620629?text=Hi%20Sneha!%20I%20want%20to%20join%20the%20Healing%20Circle%20community."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group-cta-link"
              >
                <FaWhatsapp size={20} /> Join the Healing Circle
              </a>
              <p className="group-cta-note">Weekly paid classes · WhatsApp Community</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
