import {
  AppBar,
  Button,
  createStyles,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  SwipeableDrawer,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../images/LogoHeader.png";
import { Menu } from "@material-ui/icons";

export const HEIGHT = 100;
export const MOBILE_HEIGHT = 45;

interface IAppbar {}

const MenuAppbar = (props: IAppbar) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const history = useHistory();
  const location = useLocation();

  const [open, setOpen] = useState<boolean>(false);

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
      mobileAppbar: {
        height: MOBILE_HEIGHT,
        backgroundColor: "white",
        marginBottom: -15,
        boxShadow: "0pt 1pt 3px -1px #00000030",
        // position: "relative",
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
    setOpen(false);
    history.push({
      pathname,
    });
  };

  const mobileRender = () => {
    return (
      <AppBar className={classes.mobileAppbar}>
        <Grid container justify="space-between" style={{ height: "100%" }}>
          <Grid item xs={2} container alignContent="center">
            <IconButton
              style={{ padding: 4 }}
              onClick={() => setOpen((p) => !p)}
            >
              <Menu color="primary" />
            </IconButton>
          </Grid>
          <Grid
            item
            container
            xs={4}
            alignContent="center"
            justifyContent="flex-end"
            style={{ paddingRight: 5 }}
          >
            <img src={logo} height={MOBILE_HEIGHT - 8} alt="logo" />
          </Grid>
        </Grid>
        <SwipeableDrawer
          anchor={"left"}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <List>
            <ListItem button onClick={() => handleClick("/")}>
              <ListItemText primary="MartaOlga" />
            </ListItem>
            <ListItem button onClick={() => handleClick("programas")}>
              <ListItemText primary="Programas" />
            </ListItem>
            <ListItem button onClick={() => handleClick("experiencia")}>
              <ListItemText primary="Experiencia" />
            </ListItem>
            <ListItem button onClick={() => handleClick("metodologia")}>
              <ListItemText primary="Metodología" />
            </ListItem>
            <ListItem button onClick={() => handleClick("blog")}>
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem button onClick={() => handleClick("contacto")}>
              <ListItemText primary="Contáctame" />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </AppBar>
    );
  };

  return isMobile ? (
    mobileRender()
  ) : (
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
