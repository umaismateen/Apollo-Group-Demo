import type { ComponentStyleConfig } from "@chakra-ui/theme";

const button: ComponentStyleConfig = {
  baseStyle: {
    _disabled: {
      bg: "primary.400",
      color: "primary.100",
    },
    _focusVisible: {
      outline: "3px solid",
      outlineColor: "primary.300.20%",
      outlineOffset: 0,
      boxShadow: "none",
    },
  },
  variants: {
    primary: {
      bg: "primary.100",
      color: "white",
      _hover: {
        bg: "primary.200",
      },
      _active: {
        bg: "primary.400",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};

export default button;
