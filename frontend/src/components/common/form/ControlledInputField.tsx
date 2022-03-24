import { Input } from 'components/common/form/Input';
import { InputFieldType } from 'components/common/form/InputField';
import React from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { Transformer } from 'utils/transform';

interface ControlledInputFieldProps {
  controller?: Omit<UseControllerProps<FieldValues, string>, 'name'>;
  transformer?: Transformer<any, any>;
}

export const ControlledInputField: React.FC<ControlledInputFieldProps & InputFieldType> = ({
  label,
  name,
  required,
  controller,
  transformer,
  ...props
}) => {
  const {
    field: { value, onChange, ...field }
  } = useController({
    name,
    ...controller
  });

  let fieldValue = value;

  if (fieldValue && transformer) {
    fieldValue = transformer.transform(value);
  }

  let fieldOnChange = onChange;

  if (transformer?.reverseTransform) {
    fieldOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = e.target.value;
      onChange(transformer.reverseTransform(targetValue));
    };
  }
  return (
    <div className="flex w-full flex-col">
      <div>
        <label htmlFor={name} className="text-sm uppercase tracking-wide text-white">
          {label}
        </label>
        {required && <span className="text-emerald-300">*</span>}
      </div>
      <Input required={required} id={name} {...field} value={fieldValue} onChange={fieldOnChange} {...props} />
    </div>
  );
};
