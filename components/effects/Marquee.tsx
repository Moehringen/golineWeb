'use client';

import { motion } from 'framer-motion';

const items = [
  'Life, now online', '·', 'From workflow to lifeform', '·',
  'Intelligence that lives', '·', 'Your agent, alive', '·',
  'Build the next digital life', '·', 'Where agents come alive', '·',
  'The web, now alive', '·', 'Bring intelligence to life', '·',
];

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ position: 'relative', overflow: 'hidden', padding: '1rem 0', borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6', background: '#fafafa' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5rem', zIndex: 10, background: 'linear-gradient(to right, #fafafa, transparent)' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '5rem', zIndex: 10, background: 'linear-gradient(to left, #fafafa, transparent)' }} />
      <motion.div
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', alignItems: 'center', gap: '2rem', whiteSpace: 'nowrap' }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontSize: '0.75rem',
            fontWeight: item === '·' ? 400 : 500,
            letterSpacing: item === '·' ? 0 : '0.08em',
            color: item === '·' ? '#d1d5db' : '#9ca3af',
            textTransform: 'uppercase',
          }}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
