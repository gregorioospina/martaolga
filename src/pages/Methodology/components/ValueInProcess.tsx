import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      banner: { minHeight: window.innerHeight * 0.35 },
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
        <Grid item xs={isMobile ? 12 : 5}>
          <img
            src={img}
            alt="happy person"
            style={{
              objectFit: "cover",
              width: "100%",
              maxHeight: isMobile
                ? window.innerHeight * 0.15
                : window.innerHeight * 0.35,
            }}
          ></img>
        </Grid>
      )}
      <Grid
        container
        item
        md={7}
        direction="column"
        justifyContent="center"
        spacing={isMobile ? 0 : 4}
        style={{ paddingLeft: 20, height: "100%", padding: isMobile ? 10 : "" }}
      >
        {title && (
          <Grid item>
            <Typography
              variant={isMobile ? "h6" : "h4"}
              align="left"
              style={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
          </Grid>
        )}
        <Grid item>
          <Typography variant={isMobile ? "body2" : "body1"} align="left">
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
