'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
  duration?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
  duration = 0.7,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-8% 0px' });

  const offsets = {
    up:    { initial: { opacity: 0, y: 30 },  animate: { opacity: 1, y: 0 } },
    down:  { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
    left:  { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 },  animate: { opacity: 1, x: 0 } },
    none:  { initial: { opacity: 0 },          animate: { opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial={offsets[direction].initial}
      animate={inView ? offsets[direction].animate : offsets[direction].initial}
      transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
