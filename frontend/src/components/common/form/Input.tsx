import { forwardRef, InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export type InputType = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <>
        <input
          autoComplete="false"
          className={`
        ${className || ''} 
         w-full rounded-xl border-2 border-background-200 bg-background-500 py-2 px-4 text-white focus-within:outline-2 focus-within:outline-emerald-300 focus:border-transparent focus:shadow-none  focus:outline-offset-0 focus:ring-0`}
          type="text"
          ref={ref}
          {...props}
        />
        <style jsx>
          {`
            input:-webkit-autofill {
              -webkit-box-shadow: 0 0 0 1000px #1b1b1b inset !important;
              -webkit-text-fill-color: white !important;
            }
          `}
        </style>
      </>
    );
  }
);
