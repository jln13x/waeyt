import { DateRangePicker } from "react-date-range";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Input,
} from "@chakra-ui/react";
import { Divider } from "components/common/Divider";
import { Form } from "components/common/form/Form";
import { InputField } from "components/common/form/InputField";
import { QueryModal } from "components/common/modal/QueryModal";
import { Surface } from "components/common/Surface";
import { queryClient } from "config/queryClient";
import {
  CreateCycleInput,
  useCreateCycleMutation,
  useCyclesQuery,
} from "graphql/generated";
import { useModalContext } from "hooks/useModalContext";
import { useRouter } from "next/router";
import { cyclesPath } from "pages/cycles";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { setFormErrors } from "utils/setFormErrors";
import { toValidationErrorMap } from "utils/toValidationErrorMap";

export const createCycleQueryParam = "create_cycle_url_param";

export const CreateCycleModal: React.FC = () => {
  const { t } = useTranslation("cycle");

  return (
    <QueryModal urlParam={t(createCycleQueryParam)} title={t("create_cycle")}>
      <CreateCycleForm />
    </QueryModal>
  );
};

const CreateCycleForm = () => {
  const form = useForm<CreateCycleInput>();
  const { setError } = form;
  const { mutate } = useCreateCycleMutation();
  const { t } = useTranslation(["cycle", "common"]);
  const { push, back } = useRouter();

  const onSubmit = form.handleSubmit(async (data, e) => {
    if (!data.name) {
      data["name"] = t("default_name");
    }

    mutate(
      {
        input: data,
      },
      {
        onSuccess: () => {
          const cyclesQueryKey = useCyclesQuery.getKey();
          push(cyclesPath);
          return queryClient.invalidateQueries(cyclesQueryKey);
        },
        onError: (error) => {
          const errorMap = toValidationErrorMap(error.response.errors[0]);
          setFormErrors(errorMap, setError);
        },
      }
    );
  });

  return (
    <Form form={form} onSubmit={onSubmit}>
      <InputField name="name" label="Name" autoComplete="off" />
      <HStack>
        <InputField
          name="startDate"
          label="Start"
          type="date"
          isRequired={true}
        />
        <InputField name="endDate" label="End" type="date" isRequired={true} />
      </HStack>
      <Box>
      </Box>

      <Divider mt={4} />
      <ButtonGroup mt={4} as={Flex} justifyContent="flex-end" w="full">
        <Button onClick={back}>Cancel</Button>
        <Button type="submit" variant="primary">
          {t("create", { ns: "common" })}
        </Button>
      </ButtonGroup>
    </Form>
  );
};
