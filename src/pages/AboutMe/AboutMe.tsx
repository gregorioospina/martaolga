import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import Contact from "../Contact/Contact";
import OnlinePrograms from "../Inicio/components/OnlinePrograms";
import FormationPillar, {
  IFormationPillar,
} from "./components/FormationPillar";
import WhatIs from "./components/WhatIs";
import WhoIs from "./components/WhoIs";
import banner from "./images/banner.png";

const pillars: IFormationPillar[] = [
  {
    title: "DESPERTAR CONCIENCIA",
    subtitle:
      "Despertar nuestro Ser consciente a través de un proceso de parar, observar y “darnos cuenta”.",
    body: `Darnos cuenta del impacto de nuestra manera de SER (de actuar y reaccionar) y los resultados que produce en la vida cotidiana. 
    \n• Darnos cuenta del origen de nuestra manera de ser recibido de los referentes: “software” o programa de creencias, lentes perceptivos, formas de pensar e interpretar. 
    \n• Darnos cuenta de las memorias emocionales y sus manifestaciones que se traducen en una identidad que determina nuestra calidad de vida. `,
    footer: "Darnos cuenta de que podemos elegir",
  },
  {
    title: "LA TRANSFORMACIÓN",
    subtitle:
      "Proceso reflexivo para darnos cuenta de que no tenemos seguir siendo el “Ser que hemos venido siendo”, podemos ELEGIR y vivir desde “el Ser que queremos Ser”.",
    body: `Es un proceso para elegir nuevas posibilidades (nuevas creencias, forma de percibir, pensar e interpretar) que, al llevarlas a la realidad a través de la acción, \
    construyen una nueva manera de ser, o desactivando el impacto de los frenos y limitaciones mentales. 
    El proceso de transformación no se enfoca en cambiar lo que hemos venido siendo, sino en elegir lo que queremos ser. 
    No se cambia el pasado, se crea el futuro. \n
    Este proceso lo realiza el Ser consciente cuando se permite encontrar en su interior nuevas posibilidades, 
    sabe qué elegir y a qué renunciar: elige lo que debe aceptar y lo que puede asumir, elige lo que podría sanar, 
    soltar y reinterpretar. Vincula cabeza y emociones, frenos y posibilidades, elecciones y compromiso, acciones y resultados. 
    La transformación se valida en la evidencia que sorprende y empodera.    `,
  },
  {
    title: "FORMAR EL SER",
    body: "Es un proceso permanente de introspección, para fortalecer en la vida cotidiana al Ser que elegimos Ser, que por sus evidencias comienza a ser realidad. Es entregarle al Ser consciente, el timón de su propio barco, para llegar a través de su propia ruta, al destino final. Formar el SER es darle nueva información para que, desde su libre albedrío, desarrolle su maestría para este recorrido de la vida, que desde cualquier lente perceptivo que se mire, significa el camino de evolucionar para humanizarnos. ",
    footer:
      "Formar el Ser es darle al capitán nueva información para que además de saber lo que es un barco, despierte consciencia de lo que es la inmensidad del mar. ",
  },
];

interface IAboutMe {}

const AboutMe = (props: IAboutMe) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        style={{ marginTop: 100, backgroundColor: "white" }}
      >
        <Grid item style={{ position: "relative" }}>
          <img
            src={banner}
            width="100%"
            style={{ objectFit: "contain" }}
            alt="about me banner"
          />
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ position: "absolute", bottom: 15 }}
          >
            <Typography
              style={{
                display: "block",
                color: "white",
                fontSize: isMobile ? "0.85rem" : "1.8rem",
              }}
            >
              La semilla de un propósito
            </Typography>
            <Typography
              style={{
                display: "block",
                color: "white",
                fontSize: isMobile ? "0.85rem" : "1.8rem",
                fontWeight: "bold",
              }}
            >
              MartaOlga
            </Typography>
          </Grid>
        </Grid>
        <WhoIs />
        <WhatIs />
        {pillars.map((p) => (
          <FormationPillar {...p} />
        ))}
        <div style={{ height: 30 }}></div>
        <OnlinePrograms />
      </Grid>
      <Contact />
    </React.Fragment>
  );
};
export default AboutMe;
