import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface IContact {}

const Contact = (props: IContact) => {
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
    <Grid container style={{ marginTop: 140 }}>
      <Grid item xs={6} container>
        <Grid item>
          <Typography variant="h4">
            Quieres hablar conmigo y obtener mas hablar conmigo y obtener mas
            hablar conmigo y obtener mas hablar conmigo y obtener mas
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
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
        xs={6}
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
