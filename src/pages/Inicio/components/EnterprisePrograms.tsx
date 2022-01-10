import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

import { ReactComponent as ProgramaA } from "../../Programs/images/iconosprogramas-04.svg";
import { ReactComponent as ProgramaB } from "../../Programs/images/iconosprogramas-07.svg";

const programs = [
  {
    image: (
      <ProgramaA
        style={{ maxHeight: "70%", marginTop: 10, marginBottom: 15 }}
      />
    ),
    name: "Conciencia para un FUTURO retador",
  },
  {
    image: (
      <ProgramaB
        style={{ maxHeight: "70%", marginTop: 10, marginBottom: 15 }}
      />
    ),
    name: "Formar el SER ÉTICO, el SER de la cultura",
  },
];

interface IEnterprisePrograms {}

const EnterprisePrograms = (props: IEnterprisePrograms) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        marginTop: 25,
        height: "60vh",
      },
      programCard: {
        height: "35vh",
        width: "35vh",
        boxShadow: "1pt 1pt 5px -1px #00000038",
        padding: 15,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 9,
        cursor: "pointer",
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
      programTitle: {
        fontWeight: "bold",
        fontSize: "1.4rem",
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.root}
      alignContent="center"
      justifyContent="center"
    >
      <Grid
        item
        container
        justifyContent="center"
        xs={12}
        style={{ height: "min-content" }}
      >
        <Typography variant="h4" className={classes.title}>
          Programas para Empresas
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="space-evenly"
        xs={12}
        style={{ marginTop: 25 }}
      >
        {programs.map((p) => {
          return (
            <Grid
              item
              container
              className={classes.programCard}
              direction="column"
              xs={3}
              wrap="nowrap"
              justifyContent="space-evenly"
            >
              {p.image}
              <Grid item container alignItems="center">
                <Typography variant="h6" className={classes.programTitle}>
                  {p.name}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default EnterprisePrograms;
