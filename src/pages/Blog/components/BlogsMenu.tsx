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
import BlogEntryCard from "./BlogEntryCard";
import useBlogs from "../hooks/useBlogs";

import backgroundImage from "../images/munecos-fondo.png";
import Contact from "../../Contact/Contact";
import { HEIGHT, MOBILE_HEIGHT } from "../../MenuAppbar";

export interface IBlog {
  TITULO?: string;
  SUBTITULO?: string;
  SECCION_1?: string;
  SECCION_2?: string;
  FOTO_1?: string;
  FOTO_2?: string;
  FECHA_CREACION?: string;
}

interface IBlogsMenu {
  blogs: IBlog[];
  setBlogIndex: (n: number) => void;
}

const BlogsMenu = ({ blogs, setBlogIndex }: IBlogsMenu) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        marginTop: isMobile ? MOBILE_HEIGHT : HEIGHT,
        paddingTop: 20,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "repeat-y",
        paddingBottom: 100,
      },
    })
  );

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.root}>
        <Grid item container style={{ padding: 20, paddingLeft: "5%", paddingRight: "5%" }}>
          <Grid item xs={7}>
            <Typography variant="h1" align="left" style={{ fontWeight: 500 }}>
              Hola,
            </Typography>
            <Typography variant="h4" align="left">
              Bienvenidos a mi blog, soy Marta Olga Arango
            </Typography>
            <Typography variant="body1" align="left">
              Este es un espacio para la reflexión,para conocernos más. Para
              saber más acerca del SER y de cómo podemos transformarlo
            </Typography>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
        <Grid item container direction="column-reverse">
          {blogs.map((b: any, i) => {
            const subtitle =
              b.SUBTITULO && b.SUBTITULO !== ""
                ? b.SUBTITULO
                : b.SECCION_1!.substr(0, 150);
            return (
              <BlogEntryCard
                {...b}
                index={i}
                SUBTITULO={subtitle}
                onClick={() => setBlogIndex(i)}
              />
            );
          })}
        </Grid>
      </Grid>
      <Contact />
    </React.Fragment>
  );
};

export default BlogsMenu;
