'use client';

export default function Footer() {
  return (
    <footer style={{ position: 'relative', borderTop: '1px solid #f3f4f6', paddingTop: '4rem', paddingBottom: '4rem', background: 'white', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        <div style={{ marginBottom: '3rem' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', marginBottom: '1rem' }}>
            <div style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                <circle cx="8" cy="8" r="2.5" fill="white"/>
              </svg>
            </div>
            <span style={{ fontWeight: 600, fontSize: '1.1rem', color: '#0f0a1e', letterSpacing: '-0.02em' }}>
              goline<span style={{ color: '#7c3aed' }}>.life</span>
            </span>
          </a>
          <p style={{ fontSize: '0.875rem', color: '#9ca3af', lineHeight: 1.6, maxWidth: '28rem' }}>
            Build, publish, and monetize AI agents. The internet is becoming alive — be part of it.
          </p>
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid #f3f4f6', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: '#d1d5db' }}>© 2026 goline.life. All rights reserved.</p>
          <p style={{ fontSize: '0.75rem', color: '#d1d5db', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Life, now online.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} className="animate-pulse" />
            <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
