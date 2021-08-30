import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Title from "../AboutMe/components/Title";

const onlinePrograms = [
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

const enterprisePrograms = [
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

interface IPrograms {}

const Programs = (props: IPrograms) => {
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
      container
      direction="column"
      style={{ marginTop: 130, padding: "0px 40px" }}
    >
      <Grid item>
        <Title title="Programas Online" />
      </Grid>
      <Grid item container justifyContent="center" style={{ marginTop: 20 }}>
        {onlinePrograms.map((p) => (
          <Grid item xs={10} sm={4} container>
            <div className={classes.programCard}>
              <Grid item>
                <img src={p.image} alt={p.name} height="200px" width="200px" />
              </Grid>
              <Grid item>
                <Typography variant="h6">{p.name}</Typography>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid item style={{ marginTop: 30 }}>
        <Title title="Programas para Empresas" />
      </Grid>
      <Grid item container justifyContent="center" style={{ marginTop: 20 }}>
        {enterprisePrograms.map((p) => (
          <Grid item xs={10} sm={4} container>
            <div className={classes.programCard}>
              <Grid item>
                <img src={p.image} alt={p.name} height="200px" width="200px" />
              </Grid>
              <Grid item>
                <Typography variant="h6">{p.name}</Typography>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default Programs;
