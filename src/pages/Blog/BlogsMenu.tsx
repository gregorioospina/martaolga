import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useBlogs from "./hooks/useBlogs";

const BlogsMenu = () => {
  const { data } = useBlogs();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        marginTop: 100,
        paddingTop: 20,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item container>
        <Typography variant="h1">Hola,</Typography>
        <Typography variant="h4">
          Bienvenidos a mi blog Soy MartaOlga Arango
        </Typography>
        <Typography variant="body1">
          Este es un espacio para la reflexión,para conocernos más. Para saber
          más acerca del SER y de cómo podemos transformarlo
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BlogsMenu;
