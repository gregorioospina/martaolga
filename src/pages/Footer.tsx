import {
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Facebook, Instagram, Mail, Phone, WhatsApp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

interface IFooter {}

const Footer = (props: IFooter) => {
  const history = useHistory();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: "30vh",
      },
      button: {
        height: 100,
        textTransform: "none",
        "&:hover": {
          background: "#f7f7f7",
          textDecoration: "underline",
        },
      },
      griditem: {
        maxWidth: "10%",
        flexBasis: "10%",
        flexGrow: 0,
        padding: "0px !important",
      },
      divider: {
        borderBottom: `solid 2pt ${theme.palette.primary.main}`,
      },
    })
  );

  const handleClick = (pathname: string) => {
    history.push({
      pathname,
    });
  };

  const classes = useStyles();

  return (
    <Grid item container direction="column" className={classes.root}>
      <Grid item container justifyContent="center">
        <Grid item className={classes.griditem}>
          <Button className={classes.button} onClick={() => handleClick("")}>
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
            onClick={() => handleClick("contactame")}
          >
            <Typography>Contáctame</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignContent="center"
        style={{ height: 100 }}
      >
        <IconButton color="primary">
          <Facebook />
        </IconButton>
        <IconButton color="primary">
          <Instagram />
        </IconButton>
        <IconButton color="primary">
          <WhatsApp />
        </IconButton>
        <IconButton color="primary">
          <Mail />
        </IconButton>
        <IconButton color="primary">
          <Phone />
        </IconButton>
      </Grid>
      <Grid item className={classes.divider}></Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignContent="center"
        style={{ height: 100 }}
      >
        <Typography variant="overline">Copyright &#169; Marta Olga</Typography>
      </Grid>
    </Grid>
  );
};
export default Footer;
