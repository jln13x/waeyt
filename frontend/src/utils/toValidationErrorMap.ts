import { GraphQLError } from "graphql-request/dist/types";

export interface ValidationError {
  message: string;
  property: string;
}

export const toValidationErrorMap = (
  graphQLError: GraphQLError
): ValidationError[] => {
  const errors = graphQLError?.extensions?.errors;

  if (!errors) return [];

  if (!Array.isArray(errors)) return [];

  return errors.filter((error) => error?.message && error?.property);
};
