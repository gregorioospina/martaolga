import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  OutlinedInput,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface INewsletter {}

const Newsletter = (props: INewsletter) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: "40vh",
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
    <Grid item container justify="center" className={classes.root}>
      {!isMobile && <Grid item xs={3}></Grid>}
      <Grid
        item
        xs={isMobile ? 11 : 9}
        container
        alignContent="center"
        justifyContent={isMobile ? "center" : "flex-start"}
      >
        <Grid
          item
          xs={isMobile ? 12 : 10}
          container
          justifyContent="center"
          direction="column"
          spacing={3}
        >
          <Grid item>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              style={{ fontWeight: "bold" }}
            >
              Recibe en tu correo el mejor contenido para transformar tu vida y
              potenciar tu empresa.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={isMobile ? "body2" : "subtitle1"}>
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
