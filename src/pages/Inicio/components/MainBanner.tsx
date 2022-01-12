import {
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";

import banner1 from "../images/banner-inicio-07.png";
import banner2 from "../images/banner-inicio-08.png";
import banner3 from "../images/banner-inicio-09.png";

const mainBannerSlides = [
  {
    title: "¿Quisieras vivir una verdadera transformación personal?",
    body: `Transformarte en el Ser que quieres ser, implica despertar conciencia, descubrir creencias, reinterpretar percepciones, soltar las cargas emocionales del pasado y dar la bienvenida a nuevas posibilidades. Es un trabajo personal, indelegable y no da espera.`,
    buttonText: "Caminos para lograrlo",
    buttonAction: "/programas",
    image: banner1,
  },
  {
    title: "¿Quisieras promover una verdadera transformación en tu empresa?",
    body: "Para lograr una verdadera transformación organizacional es necesario transformar el Ser de todas las personas independientemente de su rol.  Invitarlas a que descubran nuevas posibilidades “en su propio ser” para responder a un entorno retador.  Formar su SER para empoderarlas en su HACER.",
    buttonText: "Caminos para lograrlo",
    buttonAction: "/metodologia",
    image: banner2,
  },
  {
    title:
      "¿Te gustaría encontrar el liderazgo que transforma tu organización?",
    body: "Es el liderazgo entendido como una manera de SER y no como una manera de HACER. Es el liderazgo que brota de la calidad humana y de la fuerza de un propósito colectivo superior a la individualidad.  Es el líder que comprende que su esencia es humanismo y que solo tiene influencia en los demás, cuando la voluntad de ellos se activa por convicción, confianza y autoridad moral.",
    buttonText: "Caminos para lograrlo",
    buttonAction: "/programas",
    image: banner3,
  },
];

interface IMainBanner {}

const MainBanner = (props: IMainBanner) => {
  const [slide, setSlide] = useState<number>(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const prevSlideRef = useRef<number | undefined>(undefined);

  const handleClick = (mod: number) => {
    const ns = slide + mod;
    if (ns >= mainBannerSlides.length) {
      setSlide(0);
    } else if (ns < 0) {
      setSlide(mainBannerSlides.length - 1);
    } else setSlide(ns);
  };

  const history = useHistory();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: "60vh",
        marginTop: 100,
        position: "relative",
      },
      banner: {
        position: "absolute",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        minWidth: "100vw",
        opacity: 0,
        "&.fadein": {
          opacity: 1,
          animation: "$fadein 500ms linear",
        },
        "&.fadeout": {
          animation: "$fadeout 500ms linear",
        },
      },
      button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      "@keyframes fadeout": {
        "0%": {
          opacity: 1,
        },
        "100%": {
          opacity: 0,
        },
      },
      "@keyframes fadein": {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },
      leftButton: {
        position: "absolute",
        top: "50%",
        left: isMobile ? 0 : 10,
        padding: isMobile ? 0 : "",
        transform: "translate(0, -50%)",
        // color,
      },
      rightButton: {
        position: "absolute",
        padding: isMobile ? 0 : "",
        top: "50%",
        right: isMobile ? 0 : 10,
        transform: "translate(0, -50%)",
        // color,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid item container justifyContent="flex-start" className={classes.root}>
      {/* <Button onClick={() => handleClick(1)}>CLICKK</Button> */}
      <Grid item xs={1}></Grid>
      {mainBannerSlides.map((s, i) => (
        <Grid
          container
          item
          className={`${
            slide === i ? "fadein" : prevSlideRef.current === i ? "fadeout" : ""
          } ${classes.banner}`}
          xs={12}
          md={7}
          justifyContent="space-evenly"
          alignContent="center"
          style={{
            paddingLeft: 20,
            backgroundImage: `url(${s.image})`,
          }}
        >
          <Grid
            container
            item
            xs={isMobile ? 12 : 6}
            direction="column"
            spacing={2}
          >
            <Grid item>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                align="left"
                style={{ fontWeight: "bold" }}
              >
                {s.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant={isMobile ? "body2" : "body1"} align="left">
                {s.body}
              </Typography>
            </Grid>
            <Grid item container justifyContent="flex-start">
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => history.push(s.buttonAction)}
              >
                {s.buttonText}
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
          <IconButton
            onClick={() => handleClick(-1)}
            className={classes.leftButton}
          >
            <ArrowLeft />
          </IconButton>
          <IconButton
            onClick={() => handleClick(1)}
            className={classes.rightButton}
          >
            <ArrowRight />
          </IconButton>
        </Grid>
      ))}
    </Grid>
  );
};
export default MainBanner;
