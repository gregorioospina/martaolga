import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

import fotoEscritorio from "../images/fotos-inicio-16.png";

interface IReflexiveExperiences {}

const ReflexiveExperiences = (props: IReflexiveExperiences) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      banner: { height: "60vh", marginTop: 25 },
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
      <Grid item xs={5}>
        <img
          src={`${fotoEscritorio}`}
          alt="happy person"
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
        ></img>
      </Grid>
      <Grid
        container
        item
        md={7}
        direction="column"
        justifyContent="center"
        spacing={4}
        style={{ paddingLeft: 20 }}
      >
        <Grid item>
          <Typography variant="h4" align="left" style={{ fontWeight: "bold" }}>
            A lo largo de 10 años de trabajo en transformación personal y
            organizacional, en MartaOlga he desarrollado una metodología llamada
            Experiencias Reflexivas.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="left">
            Son sesiones de discernimiento en las que se orienta un proceso de
            introspección por medio de diferentes módulos temáticos.
          </Typography>
        </Grid>
        <Grid item container justifyContent="flex-start">
          <Button variant="contained" className={classes.button}>
            Quiero Saber
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ReflexiveExperiences;
