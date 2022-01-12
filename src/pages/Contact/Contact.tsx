import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface IContact {}

const Contact = (props: IContact) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      input: {
        margin: 10,
      },
      button: {
        margin: 10,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid
      container
      style={{
        paddingTop: 30,
        paddingLeft: 20,
        padding: isMobile ? 10 : "",
        paddingBottom: 20,
        backgroundColor: "white",
      }}
    >
      <Grid item xs={isMobile ? 12 : 6} container>
        <Grid item style={{ paddingTop: isMobile ? 10 : "" }}>
          <Typography variant={isMobile ? "h5" : "h4"}>
            Quieres hablar conmigo y obtener mas hablar conmigo y obtener mas
            hablar conmigo y obtener mas hablar conmigo y obtener mas
          </Typography>
        </Grid>
        <Grid item style={{ paddingTop: isMobile ? 10 : "" }}>
          <Typography variant={isMobile ? "body2" : "body1"}>
            Quieres hablar conmigo y obtener mas hablar conmigo y obtener mas
            hablar conmigo y obtener mas hablar conmigo y obtener mas
          </Typography>
        </Grid>
        <Grid item>
          <img />
        </Grid>
      </Grid>
      <Grid
        item
        xs={isMobile ? 12 : 6}
        container
        justifyContent="flex-start"
        alignContent="center"
      >
        <Grid item xs={12} container direction="column">
          <TextField
            variant="outlined"
            label="Nombre"
            placeholder="Escribe tu nombre acá"
            id="name-input"
            className={classes.input}
          />
          <TextField
            variant="outlined"
            label="Correo"
            placeholder="Escribe tu correo acá"
            id="email-input"
            className={classes.input}
          />
          <TextField
            variant="outlined"
            label="Teléfono"
            placeholder="Escribe acá un teléfono donde pueda contactarte"
            id="phone-input"
            className={classes.input}
          />
          <TextField
            variant="outlined"
            id="message-input"
            label="Mensaje"
            placeholder="Escribe tu mensaje"
            className={classes.input}
            multiline
            rows={5}
          />
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {" "}
            Enviar{" "}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Contact;
