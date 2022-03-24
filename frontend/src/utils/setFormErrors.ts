import { UseFormSetError } from "react-hook-form";
import { ValidationError } from "utils/toValidationErrorMap";

export const setFormErrors = (
  errors: ValidationError[],
  setError: UseFormSetError<any>
) => {
  errors.forEach(({ property, message }) => setError(property, { message }));
};
