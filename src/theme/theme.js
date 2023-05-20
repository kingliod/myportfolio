import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(144, 170, 147, 1)",
      main: "#fff", //NAV BAR
      dark: "rgba(64, 83, 67, 1)",
      contrastText: "#fff",
    },

    //645CBB A084DC BFACE2 EBC7E6
    secondary: {
      light: "rgba(240, 244, 210, 1)",
      main: "#3F3B6C",
      dark: "rgba(173, 178, 136, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    fontFamily: "BlinkMacSystemFont",
    fontSize: 16,
  },
});

export default theme;
