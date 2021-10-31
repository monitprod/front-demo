import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ED2E7E",
    }
  },
  typography: {
    price: {
      fontWeight: "bold",
      fontStyle: "normal",
      fontSize: "19px",
      letterSpacing: "1px",
      color: '#19D284',
    },
    button: {
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: "16px",
      textTransform: "none"
    },
    h1: {
      fontWeight: "bold",
      fontStyle: "normal",
      fontSize: "32px",
    },
    h2: {
      fontWeight: "bold",
      fontStyle: "normal",
      fontSize: "24px",
    },
    subtitle1: {
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: "19px",
      letterSpacing: "1px",
      color: "#66738F",
      lineHeight: "25px"
    },
    body1: {
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: "24px",
      letterSpacing: "0.75px",
      color: "#14142B",
      lineHeight: "38px"
    },
    fontFamily: ["Poppins"].join(","),
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
      },
      variants: [],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
        },      
      }
    },
    MuiButtonBase: {
      defaultProps: {
      },
    },
    MuiToolbar: {
      defaultProps: {
        style: {
          background: "white"
        }
      }
    }
  },
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    price: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    price?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    price: true;
  }
}