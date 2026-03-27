'use client';

import { motion } from 'framer-motion';

const HIGHLIGHTS = new Set([
  'goline.life raises $6M Seed Round',
  'Accepted into Google for Startups Program',
]);

const items = [
  'goline.life raises $6M Seed Round',
  '·',
  'Accepted into Google for Startups Program',
  '·',
  'Awarded Google Cloud Credits',
  '·',
];

export default function AnnouncementBar() {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60,
      height: '2.25rem',
      background: '#0f0a1e',
      overflow: 'hidden',
      display: 'flex', alignItems: 'center',
    }}>
      {/* Subtle shimmer overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)', pointerEvents: 'none' }} />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', whiteSpace: 'nowrap', paddingLeft: '1rem' }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{
            fontSize: '0.6875rem',
            fontWeight: item === '·' ? 400 : HIGHLIGHTS.has(item) ? 600 : 500,
            color: item === '·' ? 'rgba(255,255,255,0.2)'
              : HIGHLIGHTS.has(item) ? '#a78bfa'
              : 'rgba(255,255,255,0.6)',
            letterSpacing: item === '·' ? 0 : '0.04em',
          }}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
