import React, { ButtonHTMLAttributes, forwardRef, HTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outline';
}

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'filled', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`rounded-lg border-2 border-violet-700 ${
          variant === 'filled'
            ? 'bg-violet-700  text-white'
            : 'bg-background-700 font-bold text-violet-700 hover:text-white '
        } px-4 py-2 font-medium uppercase tracking-wider transition-colors hover:bg-violet-500  focus:border-transparent focus:outline-emerald-300 focus-visible:outline-2 focus-visible:ring-0 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
