import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

interface IValueInProcess {
  left?: boolean;
  img: string;
  message: string;
  title?: string;
  button?: boolean;
}

const ValueInProcess = ({
  left,
  img,
  message,
  title,
  button,
}: IValueInProcess) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      banner: { height: "35vh" },
      button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      className={classes.banner}
    >
      {!left && (
        <Grid item xs={5}>
          <img
            src={img}
            alt="happy person"
            style={{ objectFit: "cover", width: "100%", maxHeight: "35vh" }}
          ></img>
        </Grid>
      )}
      <Grid
        container
        item
        md={7}
        direction="column"
        justifyContent="center"
        spacing={4}
        style={{ paddingLeft: 20, height: "100%" }}
      >
        {title && (
          <Grid item>
            <Typography
              variant="h4"
              align="left"
              style={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
          </Grid>
        )}
        <Grid item>
          <Typography variant="body1" align="left">
            {message}
          </Typography>
        </Grid>
        {button && (
          <Grid item container justifyContent="flex-start">
            <Button variant="contained" className={classes.button}>
              Quiero Saber
            </Button>
          </Grid>
        )}
      </Grid>
      {left && (
        <Grid item xs={5}>
          <img
            src={img}
            alt="happy person"
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          ></img>
        </Grid>
      )}
    </Grid>
  );
};
export default ValueInProcess;
