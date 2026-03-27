'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section style={{ position: 'relative', padding: '10rem 0', background: '#fafafa', overflow: 'hidden' }} ref={ref}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <FadeIn direction="up" delay={0}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(124,58,237,0.25)', background: 'rgba(124,58,237,0.06)' }}>
              <span style={{ position: 'relative', display: 'inline-flex', width: '8px', height: '8px' }}>
                <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#7c3aed', opacity: 0.5 }} />
                <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', width: '8px', height: '8px', background: '#7c3aed' }} />
              </span>
              <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#7c3aed', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Build Your Digital Life</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#0f0a1e', marginBottom: '2rem', textAlign: 'center' }}>
            Your agent is waiting<br />
            <span className="gradient-text">to come alive.</span>
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', lineHeight: 1.75, maxWidth: '36rem', margin: '0 auto 3rem', textAlign: 'center' }}>
            Build an agent that thinks, acts, and earns — without writing a line of backend code. Launch it to the world in minutes.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.45}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
            <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              style={{ padding: '1.125rem 2.25rem', borderRadius: '9999px', color: 'white', fontWeight: 700, fontSize: '0.9375rem', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 8px 30px rgba(124,58,237,0.3)' }}
            >
              Start Building Free
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 9H14M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ padding: '1.125rem 2rem', borderRadius: '9999px', border: '1px solid #e5e7eb', color: '#374151', fontWeight: 500, fontSize: '0.875rem', background: 'white', transition: 'all 0.3s' }}
            >
              Explore the marketplace
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn direction="none" delay={0.7}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <p style={{ fontSize: '0.7rem', color: '#9ca3af', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Trusted by builders worldwide</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {['YC-backed', 'SOC 2 Ready', 'GDPR', 'API-first', 'Open Source SDK'].map((badge) => (
                <span key={badge} style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500 }}>{badge}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={1.0}>
          <p style={{ marginTop: '5rem', fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#d1d5db', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center' }}>
            goline.life — <span style={{ color: '#9ca3af' }}>Bring intelligence to life.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
