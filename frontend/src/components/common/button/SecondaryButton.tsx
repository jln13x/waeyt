import React from 'react';

interface ButtonProps {}

type HTMLButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const SecondaryButton: React.FC<ButtonProps & HTMLButton> = ({ children, className, ...props }) => {
  return (
    <button
      className={`text-emerald-300 rounded-lg border-2 border-emerald-300 px-4 py-2 font-medium uppercase tracking-wider transition-all focus-within:outline-none hover:bg-emerald-500 focus:bg-emerald-500 focus:ring-4 focus:ring-emerald-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
