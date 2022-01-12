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
    title: "¿Quisieras vivir una verdadera transformación personal?",
    body: "Transformarte en el Ser que quieres ser, implica despertar conciencia, descubrir creencias, reinterpretar percepciones, soltar las cargas emocionales del pasado y dar la bienvenida a nuevas posibilidades. Es un trabajo personal, indelegable y no da espera.",
  },
  {
    title: "¿Quisieras promover una verdadera transformación en tu empresa?",
    body: "to the copied scripts so you can tweak them. At this point you’re on your own.",
  },
  {
    title: "Que es transformar",
    body: "asDFLas falsThe page will reload if you make edits. You will also see any lint errors in the console.",
  },
  {
    title: "Builds the app for production",
    body: "to the copied scripts so you can tweak them. At this point you’re on your own.",
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
        height: "30vh",
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
            variant="h5"
            style={{ fontWeight: "bold", marginBottom: 15 }}
          >
            {s.title}
          </Typography>
          <Typography variant="body1">{s.body}</Typography>
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
