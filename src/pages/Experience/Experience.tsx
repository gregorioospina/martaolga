import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Newsletter from "../Inicio/components/Newsletter";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";

interface IExperience {}

const Experience = (props: IExperience) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      image: {
        width: "100vw",
        maxWidth: 1100,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item>
        <img className={classes.image} src={img1} alt="first" />
      </Grid>
      <Grid item>
        <img className={classes.image} src={img2} alt="second" />
      </Grid>
      <Grid item>
        <img className={classes.image} src={img3} alt="third" />
      </Grid>
      <Newsletter />
    </Grid>
  );
};
export default Experience;
