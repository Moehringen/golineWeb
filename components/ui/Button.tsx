'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  href,
}: ButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const base = `relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${sizes[size]} ${className}`;

  const variants = {
    primary: 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50',
    secondary: 'bg-transparent border border-white/20 hover:border-white/40 text-white hover:bg-white/5',
    ghost: 'bg-transparent text-white/60 hover:text-white',
  };

  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
    </motion.button>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
