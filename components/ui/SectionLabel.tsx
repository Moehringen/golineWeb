import { ReactNode } from 'react';

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-6">
      <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
      <span className="text-xs font-medium text-violet-300 tracking-widest uppercase">{children}</span>
    </div>
  );
}
