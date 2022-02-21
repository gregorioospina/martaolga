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
import React, { useCallback, useEffect, useState } from "react";
import newsletterimage from "../images/fotos-inicio-17.png";
import emailjs from "@emailjs/browser";
import { throttle } from "lodash";
import LandingSnackbar from "../../../tools/Snackbar";
interface INewsletter {}

const Newsletter = (props: INewsletter) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [sent, setSent] = useState<boolean>(false);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: window.innerHeight * (isMobile ? 0.38 : 0.32),
        backgroundColor: theme.palette.primary.main,
        color: "white",
        padding: isMobile ? 20 : "",
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

  useEffect(() => {
    if (sent === true) {
      const e = setTimeout(() => {
        setSent(false);
      }, 2000);
      return () => clearTimeout(e);
    }
  }, [sent]);

  const throttleAction = useCallback(
    throttle((action: any) => {
      console.log(action);
      action();
    }, 5000),
    []
  );

  const handleSendNewMail = () => {
    const email = (document.getElementById("newsletter-input") as any)?.value;
    if (email.length < 7) return;
    setSent(true);
    console.log({ email });
    emailjs.send("service_4ptbbao", "template_3q0l169", { email });
  };

  return (
    <Grid item container justify="center" className={classes.root}>
      {!isMobile && (
        <Grid item xs={3} style={{ position: "relative" }}>
          <img
            src={newsletterimage}
            alt="imagen de newsletter"
            height={window.innerHeight * 0.3}
            style={{
              position: "absolute",
              left: 30,
              bottom: 0,
            }}
          />
        </Grid>
      )}
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
              id="newsletter-input"
            />
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => throttleAction(handleSendNewMail)}
            >
              <Typography>ENVIAR</Typography>
            </Button>
          </Grid>
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
export default Newsletter;
