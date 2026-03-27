'use client';

import { useRef } from 'react';
import FadeIn from '@/components/ui/FadeIn';

const phrases = [
  'Software used to sit still.',
  'Pages waited to be visited.',
  'Apps waited to be opened.',
  'Intelligence waited to be asked.',
];

export default function Narrative() {
  return (
    <section style={{ position: 'relative', padding: '8rem 0', background: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <FadeIn direction="none">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.75rem', borderRadius: '9999px', border: '1px solid #e5e7eb', background: '#f9fafb', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#9ca3af', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Before</span>
              </div>
            </FadeIn>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {phrases.map((phrase, i) => (
                <FadeIn key={phrase} direction="left" delay={i * 0.12}>
                  <p style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 400, color: '#9ca3af', lineHeight: 1.4 }}>{phrase}</p>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="left" delay={0.55}>
              <p style={{ marginTop: '1.5rem', fontSize: '1rem', color: '#9ca3af', lineHeight: 1.7 }}>
                The internet was passive.<br />A library with no librarian.
              </p>
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="none">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(124,58,237,0.05)', marginBottom: '2rem' }}>
                <span style={{ position: 'relative', display: 'inline-flex', width: '6px', height: '6px' }}>
                  <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#7c3aed', opacity: 0.6 }} />
                  <span style={{ position: 'relative', width: '6px', height: '6px', borderRadius: '50%', background: '#7c3aed', display: 'inline-flex' }} />
                </span>
                <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#7c3aed', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Now</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, lineHeight: 1.15, color: '#0f0a1e', marginBottom: '1.5rem' }}>
                Agents don&apos;t wait.<br />
                <span className="gradient-text">They live.</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p style={{ fontSize: '1.0625rem', color: '#6b7280', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                goline.life is named for one idea: <span style={{ color: '#374151', fontWeight: 500 }}>agent life has come online.</span> The digital world is shifting from static tools to living intelligence — systems that work, remember, respond, evolve, and create value continuously.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p style={{ fontSize: '1.0625rem', color: '#6b7280', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                We built goline.life so that anyone — not just engineers — can create their own digital lifeforms. Agents that think, act, and earn. Online, forever.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Autonomous', 'Persistent', 'Programmable', 'Monetizable', 'Evolving'].map((tag) => (
                  <span key={tag} style={{ padding: '0.375rem 0.875rem', borderRadius: '9999px', border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(124,58,237,0.05)', fontSize: '0.8125rem', color: '#7c3aed' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        <div style={{ marginTop: '8rem' }}>
          <FadeIn direction="up" delay={0.1}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '1px', height: '4rem', background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.3))', margin: '0 auto 3rem' }} />
              <blockquote style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)', fontWeight: 300, color: '#9ca3af', lineHeight: 1.4, maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
                &ldquo;From workflow to lifeform.{' '}
                <span style={{ color: '#374151', fontWeight: 500 }}>This is what software becomes when it wakes up.</span>&rdquo;
              </blockquote>
              <div style={{ width: '1px', height: '4rem', background: 'linear-gradient(to bottom, rgba(124,58,237,0.3), transparent)', margin: '3rem auto 0' }} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
