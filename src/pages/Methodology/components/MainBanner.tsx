import {
  Button,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

import backgroundImage from "../images/fotosmetodologia-09.png";

interface IMainBanner {}

const MainBanner = (props: IMainBanner) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      banner: {
        height: "60vh",
        marginTop: 100,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      },
      button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid item container justifyContent="flex-start" className={classes.banner}>
      <Hidden smDown>
        <Grid item xs={1}></Grid>
      </Hidden>
      <Grid
        container
        item
        xs={12}
        md={7}
        direction="column"
        justifyContent="center"
        spacing={4}
        wrap="nowrap"
        style={{ paddingLeft: 20 }}
      >
        <Grid item>
          <Typography
            variant="h4"
            align="left"
            style={{ fontWeight: "bold", color: "white" }}
          >
            A lo largo de 10 años de trabajo en transformación personal y
            organizacional
          </Typography>
        </Grid>
        <Grid item style={{ maxWidth: "60%" }}>
          <Typography variant="body1" align="left" style={{ color: "white" }}>
            He desarrollado una metodología llamada Experiencias Reflexivas
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default MainBanner;
