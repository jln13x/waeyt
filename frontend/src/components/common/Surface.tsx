import React from 'react';

interface SurfaceProps {
  variant: 'dark' | 'darkest';
}

type HTMLType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Surface: React.FC<SurfaceProps & HTMLType> = ({ variant, className, ...props }) => {
  return (
    <div
      className={`overflow-hidden rounded-xl border-2 border-background-400 drop-shadow-lg ${
        variant === 'dark' ? 'bg-background-800' : 'bg-background-900'
      } ${className}`}
      {...props}
    ></div>
  );
};
