import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

type HTMLLabelType = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

interface LabelProps {
  label: string;
}

export type LabelType = LabelProps & HTMLLabelType;

export const Label: React.FC<LabelType> = ({ label, className, ...props }) => {
  return (
    <label className={`${className} uppercase tracking-wide text-white`} {...props}>
      {label}
    </label>
  );
};
