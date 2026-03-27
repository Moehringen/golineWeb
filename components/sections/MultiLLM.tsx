'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';

const models = [
  { name: 'GPT-4o', provider: 'OpenAI', accent: '#059669', bg: '#f0fdf4', border: '#bbf7d0', speed: 85, quality: 95, cost: 60, tags: ['Reasoning', 'Vision', 'Code'], badge: 'Most Popular' },
  { name: 'Claude 3.7', provider: 'Anthropic', accent: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe', speed: 90, quality: 98, cost: 55, tags: ['Long context', 'Safety', 'Writing'], badge: 'Recommended' },
  { name: 'Gemini 2.0', provider: 'Google', accent: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', speed: 95, quality: 90, cost: 40, tags: ['Multimodal', 'Speed', 'Search'], badge: 'Fastest' },
  { name: 'Llama 3.3', provider: 'Meta', accent: '#d97706', bg: '#fffbeb', border: '#fde68a', speed: 99, quality: 80, cost: 5, tags: ['Open source', 'Cheap', 'On-device'], badge: 'Lowest Cost' },
  { name: 'Mistral', provider: 'Mistral AI', accent: '#ea580c', bg: '#fff7ed', border: '#fed7aa', speed: 92, quality: 82, cost: 10, tags: ['EU data', 'Privacy', 'Efficient'], badge: 'EU Compliant' },
  { name: 'DeepSeek R2', provider: 'DeepSeek', accent: '#475569', bg: '#f8fafc', border: '#e2e8f0', speed: 88, quality: 88, cost: 8, tags: ['Reasoning', 'Math', 'STEM'], badge: 'Best Reasoning' },
];

function MetricBar({ label, value, accent }: { label: string; value: number; accent: string }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
        <span style={{ fontSize: '0.7rem', color: '#9ca3af' }}>{label}</span>
        <span style={{ fontSize: '0.7rem', fontWeight: 500, color: accent }}>{value}%</span>
      </div>
      <div style={{ height: '4px', borderRadius: '9999px', background: '#f3f4f6', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ height: '100%', borderRadius: '9999px', background: accent }}
        />
      </div>
    </div>
  );
}

function ModelCard({ model, index }: { model: typeof models[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        padding: '1.25rem', borderRadius: '1rem', border: `1px solid ${hovered ? model.border : '#f3f4f6'}`,
        background: hovered ? model.bg : 'white',
        boxShadow: hovered ? `0 8px 30px ${model.accent}18` : '0 1px 4px rgba(0,0,0,0.06)',
        transition: 'all 0.3s', cursor: 'default', position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', padding: '0.125rem 0.5rem', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 500, border: `1px solid ${model.border}`, color: model.accent, background: model.bg }}>
        {model.badge}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem', background: model.bg, border: `1px solid ${model.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: model.accent }} />
        </div>
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f0a1e' }}>{model.name}</div>
          <div style={{ fontSize: '0.6875rem', color: '#9ca3af' }}>{model.provider}</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '1rem' }}>
        {model.tags.map(tag => (
          <span key={tag} style={{ padding: '0.125rem 0.5rem', borderRadius: '9999px', background: '#f9fafb', fontSize: '0.6875rem', color: '#6b7280', border: '1px solid #f3f4f6' }}>{tag}</span>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        <MetricBar label="Speed" value={model.speed} accent={model.accent} />
        <MetricBar label="Quality" value={model.quality} accent={model.accent} />
        <MetricBar label="Cost efficiency" value={100 - model.cost} accent={model.accent} />
      </div>
    </motion.div>
  );
}

export default function MultiLLM() {
  return (
    <section id="models" style={{ position: 'relative', padding: '8rem 0', background: 'white' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)' }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <FadeIn direction="none">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(37,99,235,0.2)', background: 'rgba(37,99,235,0.05)', marginBottom: '1.5rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} className="animate-pulse" />
              <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#2563eb', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Multi-LLM Orchestration</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#0f0a1e', lineHeight: 1.2, marginBottom: '1.25rem', textAlign: 'center' }}>
              Choose your intelligence.<br />
              <span className="gradient-text">Route with precision.</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto', textAlign: 'center', lineHeight: 1.7 }}>
              Different tasks demand different minds. Select the right model for each step — optimize for speed, depth, cost, or compliance.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {models.map((model, i) => <ModelCard key={model.name} model={model} index={i} />)}
        </div>

        <FadeIn direction="up" delay={0.1}>
          <div style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid #f3f4f6', background: '#fafafa' }}>
            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1.5rem' }}>Intelligent routing example</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ padding: '0.625rem 1rem', borderRadius: '0.625rem', border: '1px solid #e5e7eb', background: 'white', fontSize: '0.875rem', color: '#374151' }}>User query</div>
              <span style={{ color: '#d1d5db' }}>→</span>
              <div style={{ padding: '0.625rem 1rem', borderRadius: '0.625rem', border: '1px solid #ddd6fe', background: '#f5f3ff', fontSize: '0.875rem', color: '#7c3aed', fontWeight: 500 }}>goline Router</div>
              <span style={{ color: '#d1d5db' }}>→</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {[
                  { label: 'Deep reasoning', model: 'Claude 3.7', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
                  { label: 'Quick lookup', model: 'Gemini 2.0', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
                  { label: 'Code gen', model: 'GPT-4o', color: '#059669', bg: '#f0fdf4', border: '#bbf7d0' },
                ].map(b => (
                  <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.6875rem', color: '#9ca3af', width: '6rem', textAlign: 'right' }}>{b.label}</span>
                    <span style={{ color: '#d1d5db' }}>→</span>
                    <span style={{ padding: '0.125rem 0.625rem', borderRadius: '0.5rem', border: `1px solid ${b.border}`, background: b.bg, fontSize: '0.6875rem', fontWeight: 500, color: b.color }}>{b.model}</span>
                  </div>
                ))}
              </div>
              <span style={{ color: '#d1d5db' }}>→</span>
              <div style={{ padding: '0.625rem 1rem', borderRadius: '0.625rem', border: '1px solid #bbf7d0', background: '#f0fdf4', fontSize: '0.875rem', color: '#059669', fontWeight: 500 }}>Unified response</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
