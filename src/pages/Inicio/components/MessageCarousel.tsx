import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

export interface IStep {
  title: string;
  body: string;
}

const ssteps: IStep[] = [
  {
    title: "¿Qué es transformar el Ser?",
    body: "Es el proceso constante de elegir con conciencia y seleccionar nuestras posibilidades de forma auténtica, positiva y funcional a nuestras vidas. \n\n Es aceptar nuevas creencias que llevamos a la acción para construir el Ser que queremos ser.\n\n Cuando transformamos nuestro Ser tomamos la decisión de renunciar, reinterpretar, neutralizar, perdonar, sanar y agradecer.",
  },
  {
    title: "¿Qué es despertar conciencia?",
    body: "Es encontrar el origen de nuestra manera de Ser dándonos cuenta del impacto que producen nuestros actos y reacciones en la vida cotidiana.",
  },
  {
    title: "¿Qué es formar el Ser?",
    body: "Es un proceso en el que desarrollamos una forma diferente de percibir la vida, descubriendo nuevas formas de usar el pensamiento para comprender, aceptar y asumir nuestra realidad. Cuando formamos nuestro Ser, aprendemos a valorar nuestras experiencias de vida y a controlar nuestras reacciones emocionales. Es ahí donde encontramos nuevas formas para interpretar la realidad, de manera que podamos convertir el sufrimiento en aprendizaje.",
  },
];

interface IMessageCarousel {
  backgroundColor: string;
  color: string;
  steps: IStep[];
}

const MessageCarousel = ({
  backgroundColor,
  color,
  steps,
}: IMessageCarousel) => {
  const [step, setStep] = useState<number>(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const prevStepRef = useRef<number | undefined>(undefined);

  const handleClick = (mod: number) => {
    const ns = step + mod;
    if (ns >= ssteps.length) {
      setStep(0);
    } else if (ns < 0) {
      setStep(ssteps.length - 1);
    } else setStep(ns);
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
      root: {
        height: "400px",
        backgroundColor,
        color,
        position: "relative",
      },
      step: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 0,
        "&.fadein": {
          opacity: 1,
          animation: "$fadein 500ms linear",
        },
        "&.fadeout": {
          animation: "$fadeout 500ms linear",
        },
      },
      leftButton: {
        position: "absolute",
        top: "50%",
        left: isMobile ? 0 : 10,
        transform: "translate(0, -50%)",
        color,
      },
      rightButton: {
        position: "absolute",
        top: "50%",
        right: isMobile ? 0 : 10,
        transform: "translate(0, -50%)",
        color,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      {ssteps.map((s, i) => (
        <Grid
          item
          xs={isMobile ? 10 : 8}
          style={{ width: isMobile ? "83%" : "" }}
          className={`${
            step === i ? "fadein" : prevStepRef.current === i ? "fadeout" : ""
          } ${classes.step}`}
        >
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            {s.title}
          </Typography>
          <Typography
            variant="h6"
            align="justify"
            style={{
              whiteSpace: "break-spaces",
            }}
          >
            {s.body}
          </Typography>
        </Grid>
      ))}
      <IconButton
        onClick={() => handleClick(-1)}
        className={classes.leftButton}
      >
        <ArrowLeftIcon />
      </IconButton>
      <IconButton
        onClick={() => handleClick(1)}
        className={classes.rightButton}
      >
        <ArrowRightIcon />
      </IconButton>
    </Grid>
  );
};
export default MessageCarousel;
