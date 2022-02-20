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
import emailjs from "@emailjs/browser";
import useThrottle from "../../hooks/useThrottle";
import LandingSnackbar from "../../tools/Snackbar";

interface IContact {}

const Contact = (props: IContact) => {
  const theme = useTheme();
  const [sent, setSent] = useState<boolean>(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { throttleAction } = useThrottle(5000);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      input: {
        margin: 10,
      },
      button: {
        margin: 10,
      },
      bck: {
        backgroundColor: "white",
        transition: "background-color 1s ease",
        "&.sent": {
          backgroundColor: "#ddffcf",
        },
      },
    })
  );

  const classes = useStyles();

  useEffect(() => {
    if (sent === true) {
      const e = setTimeout(() => {
        setSent(false);
      }, 2000);
      return () => clearTimeout(e);
    }
  }, [sent]);

  const handleSendEmail = () => {
    const nameinput = document.getElementById("name-input") as any;
    const emailinput = document.getElementById("email-input") as any;
    const cellphoneinput = document.getElementById("phone-input") as any;
    const messageinput = document.getElementById("message-input") as any;

    const name = nameinput?.value;
    const email = emailinput?.value;
    const cellphone = cellphoneinput?.value;
    const message = messageinput?.value;

    const params = {
      name: !name || name?.length === 0 ? "NO ESCRIBIO" : name,
      email: !email || email?.length === 0 ? "NO ESCRIBIO" : email,
      cellphone:
        !cellphone || cellphone?.length === 0 ? "NO ESCRIBIO" : cellphone,
      message: !message || message?.length === 0 ? "NO ESCRIBIO" : message,
    };

    if (params.email === "NO ESCRIBIO" && params.cellphone === "NO ESCRIBIO")
      return;
    nameinput.value = "";
    emailinput.value = "";
    cellphoneinput.value = "";
    messageinput.value = "";
    setSent(true);
    // console.log(params);
    emailjs.send("service_4ptbbao", "template_kgf98rc", params);
  };

  return (
    <Grid
      container
      className={`${sent ? "sent" : ""} ${classes.bck}`}
      style={{
        padding: isMobile ? 10 : "",
        paddingTop: 30,
        paddingLeft: 20,
        paddingBottom: 20,
      }}
    >
      <Grid item xs={isMobile ? 12 : 6} container alignContent="center">
        <Grid item style={{ paddingTop: isMobile ? 10 : "" }}>
          <Typography variant={isMobile ? "h5" : "h4"}>
            ¿Quieres hablar conmigo y obtener mas hablar conmigo y obtener
            información detallada sobre alguno de mis programas?
          </Typography>
        </Grid>
        <Grid item style={{ paddingTop: isMobile ? 10 : "" }}>
          <Typography
            variant={isMobile ? "body2" : "body1"}
            style={{ width: "100%" }}
            align="center"
          >
            Llena el siguiente formulario con tus datos y te responderé tan
            pronto lea tu mensaje
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
            onClick={() => throttleAction(handleSendEmail)}
          >
            {" "}
            Enviar{" "}
          </Button>
        </Grid>
      </Grid>
      <LandingSnackbar
        open={sent}
        message={"Enviado exitosamente"}
        type="success"
      />
    </Grid>
  );
};
export default Contact;
