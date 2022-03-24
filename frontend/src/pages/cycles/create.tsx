import { Form } from 'components/common/form/Form';
import { DateRangePicker } from 'components/date-range';
import { ControlledInputField } from 'components/common/form/ControlledInputField';
import { InputField } from 'components/common/form/InputField';
import { format } from 'date-fns';
import { CreateCycleInput, useCreateCycleMutation, useCyclesQuery } from 'graphql/generated';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';
import { setFormErrors } from 'utils/setFormErrors';
import { toValidationErrorMap } from 'utils/toValidationErrorMap';
import { PrimaryButton } from 'components/common/button/PrimaryButton';
import { Surface } from 'components/common/Surface';

interface Props {}

const CreateCyclePage: NextPage<Props> = () => {
  const form = useForm<CreateCycleInput>({
    defaultValues: {
      startDate: format(new Date(), 'yyyy-MM-dd')
    }
  });

  const { setError } = form;
  const { mutate } = useCreateCycleMutation();
  const { t } = useTranslation(['cycle', 'common']);
  const { push, back } = useRouter();
  const queryClient = useQueryClient();

  const onSubmit = form.handleSubmit(async (data, e) => {
    if (!data.name) {
      data['name'] = t('default_name');
    }

    mutate(
      {
        input: data
      },
      {
        onSuccess: () => {
          const cyclesQueryKey = useCyclesQuery.getKey();
          return queryClient.invalidateQueries(cyclesQueryKey);
        },
        onError: error => {
          const errorMap = toValidationErrorMap(error.response.errors[0]);
          setFormErrors(errorMap, setError);
        }
      }
    );
  });

  return (
    <Form form={form} onSubmit={onSubmit}>
      <div className="grid place-items-center">
        <Surface variant="dark" className="w-2/4 py-4">
          <div className="px-8">
            <InputField
              name="name"
              label="Name of your cycle"
              // TODO Trans
              helperText="It is recommend to have a unique name for each of your cycles so it is easier to seperate them"
            />
          </div>
          <div className="mt-8">
            <DatePickerInputs />
          </div>
          <PrimaryButton type="submit" className="mx-auto mt-12 flex">
            Create your Cycle
          </PrimaryButton>
        </Surface>
      </div>
    </Form>
  );
};

const DatePickerInputs = () => {
  const { setValue, watch } = useFormContext<CreateCycleInput>();
  const [startDateField, endDateField] = watch(['startDate', 'endDate']);

  const providedEndDate = endDateField ? new Date(endDateField) : undefined;

  return (
    <div className="w-full">
      <div className="flex w-full justify-evenly gap-8 px-8">
        <ControlledInputField label="From" name="startDate" required type="date" />
        <ControlledInputField label="To" name="endDate" required type="date" />
      </div>
      <div className="mt-4">
        <DateRangePicker
          providedStartDate={new Date(startDateField)}
          providedEndDate={providedEndDate}
          onRangeSelected={({ startDate, endDate }) => {
            setValue('startDate', format(startDate, 'yyyy-MM-dd'));
            setValue('endDate', format(endDate, 'yyyy-MM-dd'));
          }}
        />
      </div>
    </div>
  );
};

export default CreateCyclePage;
