import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

const LandingSnackbar = ({ open, message, type }: any) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      key={"template-snackbar"}
      autoHideDuration={2000}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  );
};

export default LandingSnackbar;
