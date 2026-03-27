'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('../effects/ParticleField'), { ssr: false });
const NeuralOrb = dynamic(() => import('../effects/NeuralOrb'), { ssr: false });

const words = ['Life', 'Intelligence', 'Agents'];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setWordIndex(i => (i + 1) % words.length), 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(160deg, #faf9ff 0%, #f0f4ff 40%, #f5fffe 100%)' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <ParticleField />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(124,58,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '12rem', background: 'linear-gradient(to top, white, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8rem', background: 'linear-gradient(to bottom, white, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0 }} className="grid-pattern" />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 10, maxWidth: '80rem', margin: '0 auto', padding: '5rem 1.5rem 0' }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.875rem', borderRadius: '9999px', border: '1px solid rgba(124,58,237,0.25)', background: 'rgba(124,58,237,0.06)', marginBottom: '2rem' }}
            >
              <span style={{ position: 'relative', display: 'inline-flex', width: '8px', height: '8px' }}>
                <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#7c3aed', opacity: 0.5 }} />
                <span style={{ position: 'relative', display: 'inline-flex', width: '8px', height: '8px', borderRadius: '50%', background: '#7c3aed' }} />
              </span>
              <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#7c3aed', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Agent life is now online</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#0f0a1e', marginBottom: '1.5rem' }}>
                The Web Is&nbsp;
                <span className="gradient-text">Becoming</span>
                <br />
                <span style={{ position: 'relative', display: 'inline-block', height: '1.1em', overflow: 'hidden', minWidth: '14ch' }}>
                  {words.map((word, i) => (
                    <motion.span
                      key={word}
                      className="gradient-text"
                      style={{ position: 'absolute', inset: 0 }}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={i === wordIndex ? { y: '0%', opacity: 1 } : i === (wordIndex - 1 + words.length) % words.length ? { y: '-100%', opacity: 0 } : { y: '100%', opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{ fontSize: '1.125rem', color: '#6b7280', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '32rem' }}
            >
              Build AI agents with no friction. Choose your intelligence. Launch to a living marketplace.{' '}
              <span style={{ color: '#374151' }}>Your creation, alive on the internet.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}
            >
              <motion.a href="#builder" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                style={{ padding: '1rem 2rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 8px 30px rgba(124,58,237,0.35)' }}
              >
                Build Your Agent
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              <motion.a href="#marketplace" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                style={{ padding: '1rem 2rem', borderRadius: '9999px', border: '1px solid #e5e7eb', color: '#374151', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none', background: 'white', transition: 'all 0.3s' }}
              >
                Explore Marketplace
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid #f3f4f6' }}
            >
              {[{ value: '10K+', label: 'Agents Built' }, { value: '50+', label: 'LLM Models' }, { value: '$2M+', label: 'Creator Earnings' }].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f0a1e' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.125rem' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
            className="lg:justify-end justify-center"
          >
            <div style={{ position: 'relative', width: '480px', height: '480px' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />
              <div className="float-anim"><NeuralOrb /></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <span style={{ fontSize: '0.65rem', color: '#d1d5db', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, #d1d5db, transparent)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
