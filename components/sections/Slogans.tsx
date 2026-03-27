'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const slogans = [
  { text: 'From workflow', accent: 'to lifeform.' },
  { text: 'Intelligence', accent: 'that lives online.' },
  { text: 'Your agent,', accent: 'alive on the internet.' },
  { text: 'The web,', accent: 'now alive with agents.' },
];

export default function Slogans() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '8rem', background: 'white', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(109,40,217,0.02) 50%, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)' }} />

      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.75rem', borderRadius: '9999px', border: '1px solid #e5e7eb', background: '#f9fafb' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#9ca3af', letterSpacing: '0.15em', textTransform: 'uppercase' }}>The goline.life Manifesto</span>
          </div>
        </motion.div>

        <div style={{ marginBottom: '5rem' }}>
          {slogans.map((slogan, i) => (
            <motion.div
              key={slogan.text}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '1rem', display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end' }}
            >
              <p style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: '80%' }}>
                <span style={{ color: '#d1d5db' }}>{slogan.text}</span>
                {' '}
                <span className="gradient-text">{slogan.accent}</span>
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', position: 'relative' }}
        >
          <div style={{ position: 'absolute', inset: 0, filter: 'blur(80px)', background: 'rgba(124,58,237,0.06)', transform: 'scale(1.5)', pointerEvents: 'none' }} />
          <h3 style={{ position: 'relative', fontSize: 'clamp(3rem, 7vw, 6.5rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', textAlign: 'center' }}>
            <span className="gradient-text">Life, now online.</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
