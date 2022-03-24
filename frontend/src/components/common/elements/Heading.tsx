import { DetailedHTMLProps, HTMLAttributes } from 'react';

export const H1: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ children, className, ...props }) => {
  return (
    <h1 className={`text-5xl text-white ${className} tracking-normal`} {...props}>
      {children}
    </h1>
  );
};

export const H2: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ children, className, ...props }) => {
  return (
    <h2 className={`text-4xl text-white ${className}`} {...props}>
      {children}
    </h2>
  );
};

export const H3: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ children, className, ...props }) => {
  return (
    <h3 className={`text-3xl text-white ${className}`} {...props}>
      {children}
    </h3>
  );
};

export const H4: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ children, className, ...props }) => {
  return (
    <h3 className={`text-2xl text-white ${className}`} {...props}>
      {children}
    </h3>
  );
};




