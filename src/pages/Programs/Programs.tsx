import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Title from "../AboutMe/components/Title";
import Contact from "../Contact/Contact";
import OnlinePrograms from "../Inicio/components/OnlinePrograms";

import programa4 from "./images/iconosprogramas-04.svg";
import programa5 from "./images/iconosprogramas-05.svg";

import backgroundImage from "./images/munecos-fondo.png";

const enterprisePrograms = [
  {
    image: programa4,
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "",
  },
  {
    image: programa5,
    name: "Transformacion del ser que queiro ser y el que puedo ser",

    pathname: "",
  },
];

interface IPrograms {}

const Programs = (props: IPrograms) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: "60vh",
        backgroundColor: "#f7f7f7",
      },
      programCard: {
        height: "35vh",
        width: "35vh",
        boxShadow: "1pt 1pt 5px -1px #00000038",
        padding: 15,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 9,
      },
      title: {
        borderBottom: `solid 2pt ${theme.palette.primary.main}`,
        height: "min-content",
        fontWeight: "bold",
      },
      viewallbutton: {
        width: "100%",
        height: 40,
      },
      programName: {
        fontSize: "1.2rem",
        fontWeight: "bold",
      },
    })
  );

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        style={{
          marginTop: 30,
          padding: isMobile ? "100px 10px" : "100px 40px",
          paddingTop: 70,
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "repeat-y",
        }}
      >
        <Grid item container justifyContent="center" style={{ marginTop: 20 }}>
          <OnlinePrograms />
        </Grid>
        <Grid item style={{ marginTop: 30 }}>
          <Title title="Programas para Empresas" />
        </Grid>
        <Grid item container justifyContent="center" style={{ marginTop: 20 }}>
          {enterprisePrograms.map((p) => (
            <Grid item xs={10} sm={4} container>
              <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                className={classes.programCard}
              >
                <Grid item>
                  <img
                    src={p.image}
                    alt={p.name}
                    height="200px"
                    width="200px"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" className={classes.programName}>
                    {p.name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Contact />
    </React.Fragment>
  );
};
export default Programs;
