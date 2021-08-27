import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const steps = [
  {
    title: "",
    body: "",
  },
  {
    title: "",
    body: "",
  },
  {
    title: "",
    body: "",
  },
  {
    title: "",
    body: "",
  },
];

interface IMessageCarousel {}

const MessageCarousel = (props: IMessageCarousel) => {
  const [step, setStep] = useState<number>(0);

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
      root: {},
    })
  );

  const classes = useStyles();

  return <Grid item container></Grid>;
};
export default MessageCarousel;
