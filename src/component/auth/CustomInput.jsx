import { ThemeProvider } from "@emotion/react";
import { TextField, createTheme } from "@mui/material";
import React from "react";
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
        },
      },
    },
  },
});
const CustomInput = ({...input}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField
          margin="normal"
          required
          fullWidth
         {...input}
          autoComplete="current-password"
          variant="outlined"
        />
      </ThemeProvider>
    </>
  );
};

export default CustomInput;
