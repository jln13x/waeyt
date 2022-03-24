import { StyleConfig } from "@chakra-ui/theme-tools";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px) translateX(-10px)",
  color: "background.100",
};

export const Form: StyleConfig = {
  variants: {
    floating: {
      container: {
        my: 4,
        _focusWithin: {
          label: {
            ...activeLabelStyles,
          },
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
          {
            ...activeLabelStyles,
          },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: "absolute",
          backgroundColor: "background.800",
          color: "background.400",
          borderRadius: "full",
          pointerEvents: "none",
          mx: 3,
          px: 1,
          my: 2,
        },
      },
    },
  },
};
