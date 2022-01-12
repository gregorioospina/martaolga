import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MessageCarousel from "../Inicio/components/MessageCarousel";
import Newsletter from "../Inicio/components/Newsletter";
import Testimonies from "../Inicio/components/Testimonies";
import { testimonies } from "../Inicio/Inicio";
import MainBanner from "./components/MainBanner";
import ValueInProcess from "./components/ValueInProcess";

import Muneco from "./images/munecos-07.svg";
import photo1 from "./images/fotosmetodologia-08.png";
import Contact from "../Contact/Contact";

interface IMethodology {}

const Methodology = (props: IMethodology) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      orangeDiv: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        minHeight: window.innerHeight * 0.35,
        padding: isMobile ? 8 : 20,
      },
    })
  );

  const classes = useStyles();

  return (
    <React.Fragment>
      <MainBanner />
      <ValueInProcess
        img={Muneco}
        title={
          "Son sesiones de discernimiento en las que oriento un proceso de introspección por medio de diferentes módulos temáticos."
        }
        message={` Con el fin de lograr una verdadera transformación, estas jornadas buscan generar conciencia y no un simple aprendizaje de conocimientos acumulados.`}
      />
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        className={classes.orangeDiv}
      >
        <Typography
          variant={isMobile ? "h6" : "h4"}
          paragraph
          style={{ whiteSpace: "pre-wrap", fontWeight: "bold" }}
        >
          Mi metodología busca sensibilizar a las personas para hacerlas
          conscientes de su realidad interior: creencias, emociones, formas de
          percibir, pensar e interpretar.
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h6"}
          style={{ whiteSpace: "pre-wrap", maxWidth: isMobile ? "90%" : "80%" }}
        >
          Esto con el fin de liberar, reinterpretar, sanar y finalmente elegir.
          El valor del proceso se encuentra en tu capacidad natural para
          reflexionar y convertir tus propias declaraciones en compromisos y
          acciones reales.
        </Typography>
      </Grid>
      <ValueInProcess
        img={photo1}
        title={`Las Experiencias Reflexivas se fortalecen cuando escribes tus declaraciones con el fin de generar conciencia sobre ellas mismas.`}
        message={
          "El lápiz actúa como una antena que sintoniza tu “emisora interior”, permitiendo que nuevas posibilidades surjan en ti."
        }
        button
      />
      <MessageCarousel backgroundColor={"#ffa200"} steps={[]} color={"white"} />
      <Testimonies testimonies={testimonies} />
      <Newsletter />
      <Contact />
    </React.Fragment>
  );
};
export default Methodology;
