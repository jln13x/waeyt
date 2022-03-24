import { Portal } from '@headlessui/react';
import { DevTool } from '@hookform/devtools';
import { BaseSyntheticEvent } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

interface FormProps {
  form: UseFormReturn<any>;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any>) => any;
  className?: string;
}

export const Form: React.FC<FormProps> = ({ form, onSubmit, children, className, ...props }) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} {...props} className={className}>
        {children}
      </form>
      <Portal>
        <DevTool placement="top-right" control={form.control} />
      </Portal>
    </FormProvider>
  );
};
