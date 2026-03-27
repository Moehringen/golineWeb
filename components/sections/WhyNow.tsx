'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '@/components/ui/FadeIn';

const shifts = [
  { era: 'Web 1.0', year: '1995', description: 'Static pages. The internet was a document. You read. It waited.', color: '#9ca3af', current: false },
  { era: 'Web 2.0', year: '2005', description: 'Social platforms. The internet became interactive. You posted. It connected.', color: '#60a5fa', current: false },
  { era: 'Web 3.0', year: '2020', description: 'Machine learning. The internet started thinking. Recommendations. Filters. Automation.', color: '#7c3aed', current: false },
  { era: 'Agent Web', year: '2026 →', description: "Living agents. The internet has come alive. It doesn't wait to be asked. It works.", color: '#0f0a1e', current: true },
];

const facts = [
  { stat: '90%', label: 'of future software will be built on agent architectures' },
  { stat: '$1T+', label: 'addressable market for autonomous AI workflows by 2030' },
  { stat: '10x', label: 'productivity multiplier for knowledge workers using agents' },
  { stat: 'Now', label: 'is the only moment to define what agent software becomes' },
];

export default function WhyNow() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-10%' });

  return (
    <section style={{ position: 'relative', padding: '8rem 0', background: '#fafafa', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)' }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <FadeIn direction="none">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(16,185,129,0.25)', background: 'rgba(16,185,129,0.06)', marginBottom: '1.5rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} className="animate-pulse" />
              <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#10b981', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Why Now</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#0f0a1e', lineHeight: 1.2, marginBottom: '1.25rem', textAlign: 'center' }}>
              The next interface isn&apos;t<br />
              <span className="gradient-text">an app. It&apos;s an agent.</span>
            </h2>
          </FadeIn>
        </div>

        <div ref={timelineRef} style={{ position: 'relative', maxWidth: '48rem', margin: '0 auto 6rem' }}>
          {shifts.map((shift, i) => (
            <motion.div
              key={shift.era}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', display: 'flex', gap: '2rem', marginBottom: i < shifts.length - 1 ? '3rem' : 0 }}
            >
              {i < shifts.length - 1 && (
                <div style={{ position: 'absolute', left: '1.25rem', top: '3rem', width: '1px', height: 'calc(100% + 1rem)', background: 'linear-gradient(to bottom, #e5e7eb, transparent)' }} />
              )}
              <div style={{
                position: 'relative', zIndex: 10, width: '2.5rem', height: '2.5rem', borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: shift.current ? 'linear-gradient(135deg, #7c3aed, #4f46e5)' : 'white',
                border: shift.current ? 'none' : '1px solid #e5e7eb',
                boxShadow: shift.current ? '0 4px 14px rgba(124,58,237,0.3)' : 'none',
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: shift.current ? 'white' : shift.color }} />
              </div>
              <div style={{ flex: 1, paddingTop: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.125rem', fontWeight: 700, color: shift.current ? '#0f0a1e' : '#6b7280' }}>{shift.era}</span>
                  <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'monospace' }}>{shift.year}</span>
                  {shift.current && (
                    <span style={{ padding: '0.125rem 0.5rem', borderRadius: '9999px', background: 'rgba(124,58,237,0.08)', color: '#7c3aed', fontSize: '0.625rem', fontWeight: 500, border: '1px solid rgba(124,58,237,0.2)' }}>We are here</span>
                  )}
                </div>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: shift.current ? '#374151' : '#9ca3af' }}>
                  {shift.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5" style={{ marginBottom: '6rem' }}>
          {facts.map((fact, i) => (
            <FadeIn key={fact.label} direction="up" delay={i * 0.1}>
              <div style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid #f3f4f6', background: 'white', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }} className="gradient-text">{fact.stat}</div>
                <div style={{ fontSize: '0.8125rem', color: '#9ca3af', lineHeight: 1.5 }}>{fact.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.1}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)', fontWeight: 300, color: '#9ca3af', lineHeight: 1.6, maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
              &ldquo;Humans used to browse software.{' '}
              <span style={{ color: '#6b7280' }}>
                Soon, they&apos;ll collaborate with it &mdash; and the line between tool and teammate will dissolve.&rdquo;
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
