import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: `"YekanBakh" , "Arial", "Roboto"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },
  direction: "rtl",
});

export default theme;