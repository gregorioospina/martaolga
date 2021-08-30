import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  OutlinedInput,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface INewsletter {}

const Newsletter = (props: INewsletter) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: "50vh",
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
      input: {
        borderColor: "white",
        borderRadius: 25,
        height: 45,
        color: "white",
        "& ::placeholder": {
          color: "white",
        },
      },
      notchedOutline: {
        borderColor: "white",
        "&:hover": {
          borderColor: "white",
        },
      },
      focused: {
        borderColor: "white",
      },
      inputroot: {
        borderColor: "white",
      },
      button: {
        marginTop: 15,
        backgroundColor: "white",
        color: theme.palette.primary.main,
        borderRadius: 25,
        "&:hover": {
          backgroundColor: "white",
          boxShadow: "1pt 1pt 5px 0px #0000008c",
        },
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid item container className={classes.root}>
      <Grid item xs={3}></Grid>
      <Grid
        item
        xs={9}
        container
        alignContent="center"
        justifyContent="flex-start"
      >
        <Grid
          item
          xs={10}
          container
          justifyContent="center"
          direction="column"
          spacing={3}
        >
          <Grid item>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              Recibe en tu correo el mejor contenido para transformar tu vida y
              potenciar tu empresa.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              Subscríbete a mi boletín informativo y entérate de los próximos
              programas.
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <OutlinedInput
              classes={{
                notchedOutline: classes.notchedOutline,
                focused: classes.focused,
                root: classes.inputroot,
              }}
              className={classes.input}
              placeholder="tu correo"
            />
            <Button variant="contained" className={classes.button}>
              <Typography>ENVIAR</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Newsletter;
