import { theme } from "@chakra-ui/core";

// $primary-color: #ff9f2f;
// $secondary-color: #c4c4c4;
// $muted: #6c757d;
// $dark: #1b1b1b;
// $lime: #ebffeb;
// $light-gray: #f2f2f2;
// $text-color: #474d47;
// $info: #18898d;
// $blue: #2f69ff;

export default {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#ff9f2f",
    secondary: "#c4c4c4",
    lime: "#ebffeb",
    lightGray: "#f2f2f2",
    info: "#18898d",
  },
  fontSizes: {
    ...theme.fontSizes,
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
};
