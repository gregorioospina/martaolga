import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import program1 from "../Inicio/images/fotos-inicio-13.png";
import program4 from "../Inicio/images/fotos-inicio-15.png";
import program3 from "../Inicio/images/fotos-inicio-14.png";
import program2 from "../Inicio/images/foto-p4.png";
import program5 from "../Inicio/images/foto-p5.png";

import { useHistory } from "react-router-dom";
import ProgramCard from "./components/ProgramCard";

const programs = [
  {
    image: program1,
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "/programas/001",
  },
  {
    image: program2,
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "/programas/002",
  },
  {
    image: program3,
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "/programas/003",
  },
  {
    image: program4,
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "/programas/004",
  },
  {
    image: program5,
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "/programas/005",
  },
];

interface IOnlinePrograms {
  showAllButton?: boolean;
}

const OnlinePrograms = ({ showAllButton }: IOnlinePrograms) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        paddingTop: 30,
        minHeight: "50vh",
        // backgroundColor: "#f7f7f7",
      },
      programCard: {
        // height: "35vh",
        // width: "35vh",
        boxShadow: "1pt 1pt 5px -1px #00000038",
        // padding: 15,
        margin: 15,
        backgroundColor: "white",
        borderRadius: 27,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: isMobile ? "45vw" : "20vw",
        width: isMobile ? "45vw" : "20vw",
        maxWidth: isMobile ? "45vw" : "20vw",
      },
      title: {
        borderBottom: `solid 2pt ${theme.palette.primary.main}`,
        height: "min-content",
        fontWeight: "bold",
      },
      viewallbutton: {
        width: isMobile ? "100%" : "40%",
        height: 40,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.root}
      justifyContent="center"
      alignContent="center"
    >
      <Grid
        item
        container
        justifyContent="center"
        xs={12}
        style={{ height: "min-content" }}
      >
        <Typography variant="h4" className={classes.title}>
          Programas Online
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="space-evenly"
        xs={12}
        style={{ marginTop: 25 }}
      >
        {programs.map((p) => (
          <ProgramCard {...p} />
        ))}
      </Grid>
    </Grid>
  );
};
export default OnlinePrograms;
