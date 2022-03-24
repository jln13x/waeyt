import { StyleConfig } from "@chakra-ui/theme-tools";

export const Input: StyleConfig = {
  variants: {
    outline: {
      field: {
        outline: "none",
        boxShadow: "none",
        _hover: {
          borderColor: "primary.300",
        },
        _focus: {
          boxShadow: "none",
          borderColor: "primary.300",
        },
      },
    },
  },
};
