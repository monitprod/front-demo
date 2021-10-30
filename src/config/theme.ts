import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
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
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple!
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

declare module '@material-ui/core/styles' {
  interface TypographyVariants {
    price: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    price?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@material-ui/core/Typography' {
  interface TypographyPropsVariantOverrides {
    price: true;
  }
}