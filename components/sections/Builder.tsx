'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '@/components/ui/FadeIn';

const blocks = [
  { label: 'Trigger', colorBg: '#fef9ee', colorBorder: '#fde68a', colorDot: '#f59e0b', desc: 'Schedule, webhook, event, or user message' },
  { label: 'LLM Node', colorBg: '#f5f3ff', colorBorder: '#ddd6fe', colorDot: '#7c3aed', desc: 'GPT-4o, Claude 3, Gemini, Llama — your choice' },
  { label: 'Memory', colorBg: '#eff6ff', colorBorder: '#bfdbfe', colorDot: '#2563eb', desc: 'Vector, episodic, or structured knowledge' },
  { label: 'Tools', colorBg: '#f0fdf4', colorBorder: '#bbf7d0', colorDot: '#059669', desc: 'Web search, code exec, API calls, files' },
  { label: 'Logic', colorBg: '#fdf2f8', colorBorder: '#fbcfe8', colorDot: '#db2777', desc: 'Branches, loops, conditions, human-in-loop' },
  { label: 'Deploy', colorBg: '#eef2ff', colorBorder: '#c7d2fe', colorDot: '#4f46e5', desc: 'One-click publish to marketplace or API' },
];

export default function Builder() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="builder" style={{ position: 'relative', padding: '8rem 0', background: '#fafafa' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid #e5e7eb', background: 'white', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderBottom: '1px solid #f3f4f6', background: '#fafafa' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fca5a5' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fde68a' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#86efac' }} />
                <div style={{ flex: 1, margin: '0 1rem', padding: '0.25rem 0.75rem', borderRadius: '0.375rem', background: '#f3f4f6', fontSize: '0.7rem', color: '#9ca3af', textAlign: 'center' }}>
                  goline.life / builder / my-research-agent
                </div>
              </div>

              <div style={{ display: 'flex', minHeight: '380px' }}>
                <div style={{ width: '11rem', borderRight: '1px solid #f3f4f6', padding: '1rem', background: '#fafafa' }}>
                  <div style={{ fontSize: '0.625rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Components</div>
                  {['Triggers', 'LLM Nodes', 'Memory', 'Tools', 'Logic', 'Output'].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.5rem', borderRadius: '0.375rem', cursor: 'pointer', marginBottom: '0.25rem' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#d1d5db' }} />
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ flex: 1, padding: '1.25rem', position: 'relative' }}>
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                    <motion.line x1="50%" y1="68" x2="50%" y2="138" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4"
                      initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ delay: 0.5, duration: 0.8 }} />
                    <motion.line x1="50%" y1="198" x2="50%" y2="268" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4"
                      initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ delay: 0.8, duration: 0.8 }} />
                  </svg>

                  {[
                    { label: 'On Schedule', color: '#f59e0b', bg: '#fef9ee', border: '#fde68a', status: 'active', statusBg: '#f0fdf4', statusColor: '#059669' },
                    { label: 'Claude 3.7 Sonnet', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe', status: 'running', statusBg: '#f5f3ff', statusColor: '#7c3aed' },
                    { label: 'Web Search', color: '#059669', bg: '#f0fdf4', border: '#bbf7d0', status: 'idle', statusBg: '#f9fafb', statusColor: '#9ca3af' },
                    { label: 'Send Report', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', status: 'idle', statusBg: '#f9fafb', statusColor: '#9ca3af' },
                  ].map((node, i) => (
                    <motion.div key={node.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 2rem 0.5rem', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: `1px solid ${node.border}`, background: node.bg }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: node.color }} />
                        <span style={{ fontSize: '0.8125rem', color: '#374151', fontWeight: 500 }}>{node.label}</span>
                      </div>
                      <span style={{ fontSize: '0.625rem', padding: '0.125rem 0.5rem', borderRadius: '9999px', background: node.statusBg, color: node.statusColor, border: `1px solid ${node.border}` }}>{node.status}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              style={{ position: 'absolute', bottom: '-1rem', right: '-1rem', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid #bbf7d0', background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} className="animate-pulse" />
                <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 500 }}>Agent is live</span>
              </div>
              <div style={{ fontSize: '0.625rem', color: '#9ca3af', marginTop: '0.125rem' }}>Last run: 2 min ago</div>
            </motion.div>
          </motion.div>

          <div>
            <FadeIn direction="none">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(124,58,237,0.05)', marginBottom: '1.5rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7c3aed' }} className="animate-pulse" />
                <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#7c3aed', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Visual Builder</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.15, color: '#0f0a1e', marginBottom: '1.5rem' }}>
                Build without limits.<br />
                <span className="gradient-text">Ship in minutes.</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p style={{ fontSize: '1.0625rem', color: '#6b7280', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                Drag. Connect. Configure. Every component snaps together like thought becoming action. No boilerplate. No infrastructure headaches.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-3">
              {blocks.map((block, i) => (
                <FadeIn key={block.label} direction="up" delay={i * 0.06}>
                  <div style={{ padding: '1rem', borderRadius: '0.875rem', border: `1px solid ${block.colorBorder}`, background: block.colorBg, cursor: 'default' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.375rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: block.colorDot }} />
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#374151' }}>{block.label}</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', lineHeight: 1.5 }}>{block.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
