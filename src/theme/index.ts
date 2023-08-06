import { extendTheme } from "@chakra-ui/react";
import Button from "./buttons";
import Container from "./container";
import colors from "./colors";

const theme = extendTheme({
  colors,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "black",
        padding: 0,
        margin: 0,
        color: "primary.100",
        scrollBehavior: "smooth",
      },
      "*": {
        boxSizing: "border-box",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
  fonts: {
    heading: `'Outfit', sans-serif`,
    paragraph: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button,
    Container,
  },
});

export default theme;
