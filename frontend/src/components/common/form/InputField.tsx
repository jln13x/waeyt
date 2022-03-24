import { Input, InputType } from 'components/common/form/Input';
import { forwardRef, InputHTMLAttributes } from 'react';
import { useFormContext, useFormState } from 'react-hook-form';

interface InputFieldProps {
  name: string;
  label: string;
  helperText?: string;
}

export type InputFieldType = InputFieldProps & InputType;

export const InputField: React.FC<InputFieldType> = ({ name, label, required, helperText, ...props }) => {
  const { register } = useFormContext();
  const { errors } = useFormState({ name, exact: true });

  return (
    <div className="flex w-full flex-col">
      <div className="absolute -translate-y-7">
        <label htmlFor={name} className="text-sm uppercase tracking-wide text-white">
          {label}
        </label>
        {required && <span className="text-emerald-300">*</span>}
      </div>
      <Input {...register(name)} required={required} id={name} {...props} />
      {helperText && <p className="mt-2 text-sm text-white text-opacity-30">{helperText}</p>}
    </div>
  );
};
