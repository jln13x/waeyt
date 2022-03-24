import React from 'react';

type Stack = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Stack: React.FC<Stack> = ({ children, className, ...props }) => {
  return (
    <div className={`w-full flex flex-row space-x-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const HStack: React.FC<Stack> = ({ children, className, ...props }) => {
  return (
    <div className={`w-full flex flex-col space-y-2 ${className}`} {...props}>
      {children}
    </div>
  );
};
