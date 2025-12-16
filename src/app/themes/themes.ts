import { createTheme } from "@mui/material/styles";
export const fontTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1em",
          fontFamily: "var(--oxygen)",
          color: "var(--total-black)",
          ":hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: "1em",
          fontFamily: "var(--oxygen)",
          color: "var(--total-black)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: "var(--oxygen)",
          fontWeight: 700,
        },
        h2: {
          fontFamily: "var(--oxygen)",
          fontWeight: 700,
        },
        h3: {
          fontFamily: "var(--oxygen)",
          fontWeight: 700,
        },
      },
    },
  },
});
