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
import program6 from "../Inicio/images/p6.jpg";
import program7 from "../Inicio/images/p7.jpg";
import program8 from "../Inicio/images/p8.jpg";
import program9 from "../Inicio/images/p9.jpg";
import program10 from "../Inicio/images/p10.jpg";

import { useHistory } from "react-router-dom";
import ProgramCard from "./components/ProgramCard";

const programs = [
  {
    image: program6,
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "/programas/006",
  },
  {
    image: program9,
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "/programas/007",
  },
  {
    image: program8,
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "/programas/008",
  },
  {
    image: program7,
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "/programas/009",
  },
  {
    image: program10,
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "/programas/010",
  },
];

interface IEnterprisePrograms {
  showAllButton?: boolean;
}

const EnterprisePrograms = ({ showAllButton }: IEnterprisePrograms) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const history = useHistory();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        paddingTop: 30,
        minHeight: "50vh",
        // backgroundColor: "#f7f7f7",
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
          Programas Empresariales
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
export default EnterprisePrograms;
