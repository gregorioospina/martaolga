import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Avatar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

export interface ITestimony {
  image: string;
  name: string;
  testimony: string;
}

interface ITestimonies {
  testimonies: ITestimony[];
}

const Testimonies = ({ testimonies }: ITestimonies) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: "60vh",
        paddingTop: 45,
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
      justifyContent="flex-start"
      alignContent="flex-start"
    >
      <Grid
        item
        container
        justifyContent="center"
        xs={12}
        style={{ height: "min-content" }}
      >
        <Typography variant="h4" className={classes.title}>
          Testimonios
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="space-evenly"
        xs={12}
        style={{ marginTop: 80 }}
      >
        {testimonies.map((p) => {
          return <TestimonyCard {...p} />;
        })}
      </Grid>
    </Grid>
  );
};

interface ITestimonyCard {
  image: string;
  name: string;
  testimony: string;
}

const TestimonyCard = ({ image, name, testimony }: ITestimonyCard) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        position: "relative",
        boxShadow: "1pt 1pt 5px -1px #00000038",
        backgroundColor: "white",
        minHeight: 250,
      },
      avatar: {
        marginTop: -50,
        width: 100,
        height: 100,
        marginLeft: "auto",
        marginRight: "auto",
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid item container xs={3} className={classes.root} direction="column">
      <Avatar src={image} className={classes.avatar}></Avatar>
      <Grid item style={{ padding: 10 }}>
        <Typography>{testimony}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="overline">{name}</Typography>
      </Grid>
    </Grid>
  );
};

export default Testimonies;
