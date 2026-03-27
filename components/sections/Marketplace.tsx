'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';

const categories = ['All', 'Research', 'Code', 'Finance', 'Writing', 'Data', 'Sales', 'Creative'];

const agents = [
  { name: 'DeepResearch Pro', creator: 'nova_labs', verified: true, description: 'Autonomous research agent. Reads papers, synthesizes insights, generates structured reports.', category: 'Research', initial: 'R', accent: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe', price: '$29/mo', users: '12.4K', rating: 4.9, tags: ['GPT-4o', 'Claude 3.7', 'Web Search'] },
  { name: 'CodeCraft Agent', creator: 'devforge', verified: true, description: 'Full-stack code generation, review, and refactoring. Understands your entire codebase.', category: 'Code', initial: 'C', accent: '#059669', bg: '#f0fdf4', border: '#bbf7d0', price: '$19/mo', users: '8.1K', rating: 4.8, tags: ['GPT-4o', 'DeepSeek R2'] },
  { name: 'MarketPulse', creator: 'alpha_signals', verified: true, description: 'Real-time financial intelligence. Monitors signals, summarizes news, flags anomalies.', category: 'Finance', initial: 'F', accent: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', price: '$49/mo', users: '5.6K', rating: 4.7, tags: ['Claude 3.7', 'Gemini 2.0'] },
  { name: 'NarrativeOS', creator: 'story_engine', verified: false, description: 'Generates long-form content with brand voice consistency. Blogs, threads, scripts.', category: 'Writing', initial: 'W', accent: '#db2777', bg: '#fdf2f8', border: '#fbcfe8', price: '$12/mo', users: '22K', rating: 4.6, tags: ['Claude 3.7', 'Llama 3.3'] },
  { name: 'DataWeaver', creator: 'ml_forge', verified: true, description: 'Connects to databases, runs analysis, creates visualizations. Ask data in plain English.', category: 'Data', initial: 'D', accent: '#d97706', bg: '#fffbeb', border: '#fde68a', price: '$35/mo', users: '4.2K', rating: 4.9, tags: ['GPT-4o', 'Llama 3.3'] },
  { name: 'SalesIntel', creator: 'pipeline_ai', verified: true, description: 'Lead research, personalized outreach, CRM enrichment. Your tireless SDR.', category: 'Sales', initial: 'S', accent: '#ea580c', bg: '#fff7ed', border: '#fed7aa', price: '$59/mo', users: '3.8K', rating: 4.5, tags: ['GPT-4o', 'Gemini 2.0'] },
];

function AgentCard({ agent, index }: { agent: typeof agents[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', borderRadius: '1rem', border: `1px solid ${hovered ? agent.border : '#f3f4f6'}`, background: 'white', boxShadow: hovered ? `0 12px 40px ${agent.accent}12` : '0 1px 4px rgba(0,0,0,0.06)', transition: 'all 0.3s', cursor: 'pointer' }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: agent.bg, border: `1px solid ${agent.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', fontWeight: 700, color: agent.accent }}>{agent.initial}</div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f0a1e' }}>{agent.name}</span>
              {agent.verified && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="7" fill={agent.accent} />
                  <path d="M4.5 7l2 2 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span style={{ fontSize: '0.6875rem', color: '#9ca3af' }}>by @{agent.creator}</span>
          </div>
        </div>
        <span style={{ padding: '0.125rem 0.5rem', borderRadius: '9999px', background: '#f9fafb', fontSize: '0.6875rem', color: '#9ca3af', border: '1px solid #f3f4f6' }}>{agent.category}</span>
      </div>
      <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>{agent.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '1rem' }}>
        {agent.tags.map(tag => <span key={tag} style={{ padding: '0.125rem 0.5rem', borderRadius: '9999px', background: '#f9fafb', fontSize: '0.6875rem', color: '#6b7280', border: '1px solid #f3f4f6' }}>{tag}</span>)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #f9fafb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ color: '#f59e0b', fontSize: '0.75rem' }}>★ {agent.rating}</span>
          <span style={{ fontSize: '0.6875rem', color: '#9ca3af' }}>{agent.users} users</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f0a1e' }}>{agent.price}</span>
          <button style={{ padding: '0.375rem 0.875rem', borderRadius: '0.5rem', background: agent.bg, border: `1px solid ${agent.border}`, fontSize: '0.75rem', color: agent.accent, fontWeight: 500, cursor: 'pointer' }}>Deploy</button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? agents : agents.filter(a => a.category === activeCategory);

  return (
    <section id="marketplace" style={{ position: 'relative', padding: '8rem 0', background: '#fafafa' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)' }} />
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <FadeIn direction="none">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(5,150,105,0.2)', background: 'rgba(5,150,105,0.05)', marginBottom: '1.5rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#059669' }} className="animate-pulse" />
              <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#059669', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Agent Marketplace</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#0f0a1e', lineHeight: 1.2, marginBottom: '1.25rem', textAlign: 'center' }}>
              An economy of<br /><span className="gradient-text">digital lifeforms.</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '36rem', margin: '0 auto', textAlign: 'center', lineHeight: 1.7 }}>
              Discover, deploy, and monetize AI agents built by creators worldwide. Every agent is a living product.
            </p>
          </FadeIn>
        </div>
        <FadeIn direction="up" delay={0.25}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{ padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s', border: activeCategory === cat ? 'none' : '1px solid #e5e7eb', background: activeCategory === cat ? '#7c3aed' : 'white', color: activeCategory === cat ? 'white' : '#6b7280', boxShadow: activeCategory === cat ? '0 4px 12px rgba(124,58,237,0.3)' : 'none' }}>{cat}</button>
            ))}
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filtered.map((agent, i) => <AgentCard key={agent.name} agent={agent} index={i} />)}
        </div>
        <FadeIn direction="up" delay={0.1}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2rem', padding: '1.25rem 2rem', borderRadius: '1rem', border: '1px solid #e5e7eb', background: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f0a1e' }}>2,400+</div><div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>agents available</div></div>
              <div style={{ width: '1px', height: '2.5rem', background: '#f3f4f6' }} />
              <div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f0a1e' }}>840</div><div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>active creators</div></div>
              <div style={{ width: '1px', height: '2.5rem', background: '#f3f4f6' }} />
              <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ padding: '0.625rem 1.25rem', borderRadius: '9999px', background: '#7c3aed', color: 'white', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', boxShadow: '0 4px 12px rgba(124,58,237,0.3)' }}>Browse all agents →</motion.a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
