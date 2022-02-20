import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface ICallToAction {
  url: string;
  message: string;
  color: string;
}

const CallToAction = (props: ICallToAction) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: 400,
        backgroundColor: props.color,
        color: "white",
      },
    })
  );

  const classes = useStyles();

  const handleClick = () => {
    window.open(props.url, "_blank");
  };

  return (
    <Grid
      item
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      className={classes.root}
      spacing={3}
    >
      <Grid item>
        <Typography variant="h4">
          {props.message ?? "¿Estás listo para transformar tu vida?"}
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={handleClick} variant="contained">
          Quiero ser parte del programa
        </Button>
      </Grid>
    </Grid>
  );
};
export default CallToAction;
