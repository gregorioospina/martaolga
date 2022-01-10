import {
  AppBar,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../images/LogoHeader.png";

const HEIGHT = 100;
const MOBILE_HEIGHT = 55;

interface IAppbar {}

const MenuAppbar = (props: IAppbar) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      yellowline: {
        height: 15,
        backgroundColor: "orange",
      },
      appbar: {
        height: HEIGHT,
        backgroundColor: "white",
        marginBottom: -15,
        boxShadow: "0pt 1pt 3px -1px #00000030",
      },
      button: {
        height: HEIGHT - 15,
        textTransform: "none",
        "&:hover": {
          background: "white",
          color: "#ccc",
        },
      },
      griditem: {
        maxWidth: "12.5%",
        flexBasis: "12.5%",
        flexGrow: 0,
        padding: "0px !important",
      },
      logoButton: {
        cursor: "pointer",
      },
    })
  );
  const classes = useStyles();

  const handleClick = (pathname: string) => {
    history.push({
      pathname,
    });
  };

  return (
    <AppBar className={classes.appbar}>
      <div className={classes.yellowline}></div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ margin: 0, maxWidth: "100%" }}
      >
        <Grid item className={classes.griditem}>
          <Button className={classes.button} onClick={() => handleClick("/")}>
            <Typography>MartaOlga</Typography>
          </Button>
        </Grid>
        <Grid item className={classes.griditem}>
          <Button
            className={classes.button}
            onClick={() => handleClick("programas")}
          >
            <Typography>Programas</Typography>
          </Button>
        </Grid>
        <Grid item className={classes.griditem}>
          <Button
            className={classes.button}
            onClick={() => handleClick("experiencia")}
          >
            <Typography>Experiencia</Typography>
          </Button>
        </Grid>
        <Grid item xs={2} style={{ padding: 0 }}>
          <img
            src={logo}
            height={HEIGHT * 0.7}
            alt="logo"
            className={classes.logoButton}
          />
        </Grid>
        <Grid item className={classes.griditem}>
          <Button
            className={classes.button}
            onClick={() => handleClick("metodologia")}
          >
            <Typography>Metodología</Typography>
          </Button>
        </Grid>
        <Grid item className={classes.griditem}>
          <Button
            className={classes.button}
            onClick={() => handleClick("blog")}
          >
            <Typography>Blog</Typography>
          </Button>
        </Grid>
        <Grid item className={classes.griditem}>
          <Button
            className={classes.button}
            onClick={() => handleClick("contacto")}
          >
            <Typography>Contáctame</Typography>
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
};
export default MenuAppbar;
