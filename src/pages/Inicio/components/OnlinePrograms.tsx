import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

const programs = [
  {
    image:
      "https://citymarteg.com/image/cache/catalog/cat/Drinks/soda/coca-cola-bottle-330-ml-1100x1100.jpg",
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "",
  },
  {
    image:
      "https://citymarteg.com/image/cache/catalog/cat/Drinks/soda/coca-cola-bottle-330-ml-1100x1100.jpg",
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "",
  },
  {
    image:
      "https://citymarteg.com/image/cache/catalog/cat/Drinks/soda/coca-cola-bottle-330-ml-1100x1100.jpg",
    name: "Transformacion del ser que queiro ser y el que puedo ser",
    pathname: "",
  },
];

interface IOnlinePrograms {}

const OnlinePrograms = (props: IOnlinePrograms) => {
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
        {programs.map((p) => {
          return (
            <Grid
              item
              container
              className={classes.programCard}
              direction="column"
              xs={3}
              wrap="nowrap"
            >
              <Grid item>
                <img src={p.image} alt={p.name} height="200px" width="200px" />
              </Grid>
              <Grid item>
                <Typography variant="h6">{p.name}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={8} style={{ marginTop: 25 }}>
        <Button
          color="primary"
          variant="contained"
          className={classes.viewallbutton}
        >
          Ver todos
        </Button>
      </Grid>
    </Grid>
  );
};
export default OnlinePrograms;
