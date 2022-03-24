import React from 'react';
import NextLink, { LinkProps } from 'next/link';

export interface PrimaryLinkProps extends LinkProps {
  className?: string;
}

export const PrimaryLink: React.FC<PrimaryLinkProps & LinkProps> = ({ children, className, ...props }) => {
  return (
    <NextLink {...props}>
      <a
        className={`h-fit rounded-lg bg-violet-700 px-4 py-2 font-medium uppercase tracking-wider text-white transition-all focus-within:outline-none hover:bg-violet-500 focus:ring-4 focus:ring-emerald-300 ${className}`}
      >
        {children}
      </a>
    </NextLink>
  );
};
