import React from 'react';

interface BadgeProps {
  text: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = ({ text, variant = 'default', size = 'md' }: BadgeProps) => {
  const variants = {
    default: 'bg-cyan-500/20 text-cyan-400',
    success: 'bg-green-500/20 text-green-400',
    warning: 'bg-yellow-500/20 text-yellow-400',
    error: 'bg-red-500/20 text-red-400'
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  return (
    <span className={`rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {text}
    </span>
  );
};

export default Badge;