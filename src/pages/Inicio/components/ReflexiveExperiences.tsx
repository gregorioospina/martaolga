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

import fotoEscritorio from "../images/fotos-inicio-16.jpg";

interface IReflexiveExperiences {}

const ReflexiveExperiences = (props: IReflexiveExperiences) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      banner: { minHeight: "50vh", marginTop: 25 },
      button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: "12px 25px",
        fontWeight: "bold"
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
      <Grid
        item
        xs={isMobile ? 12 : 5}
        style={{ height: isMobile ? window.innerHeight / 4 : "" }}
      >
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
        style={{
          paddingLeft: isMobile ? 5 : 20,
          paddingTop: isMobile ? 20 : "",
        }}
      >
        <Grid item>
          <Typography
            variant={isMobile ? "h6" : "h4"}
            align="left"
            style={{ fontWeight: "bold" }}
          >
            A lo largo de 10 años de trabajo en transformación personal y
            organizacional, en MartaOlga he desarrollado una metodología llamada
            Experiencias Reflexivas.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={isMobile ? "body2" : "body1"} align="left">
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
