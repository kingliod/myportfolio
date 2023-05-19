import { createTheme } from "@mui/material";

const typography = {
  h3: {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    "@media (min-width:960px)": {
      fontSize: "2.4rem",
    },
  },
};

const theme = createTheme({
  typography,
});

export default theme;
