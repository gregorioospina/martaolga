import {
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {
  ArrowBack,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Contact from "../../Contact/Contact";
import { IBlog } from "./BlogsMenu";

interface IBlogDetail {
  blog: IBlog;
  index: number;
  amountBlogs: number;
  setBlogIndex: (i: number | undefined) => void;
}

const BlogDetail = ({
  blog,
  index,
  amountBlogs,
  setBlogIndex,
}: IBlogDetail) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: "#f7f7f7",
        marginTop: 115,
      },
      img: {
        maxHeight: 750,
        height: "100%",
        width: "auto",
        objectFit: "contain",
      },
      body: {
        whiteSpace: "pre-wrap",
        textAlign: "justify",
      },
      title: {
        marginTop: 25,
        fontWeight: 700,
      },
    })
  );

  const classes = useStyles();

  useEffect(() => {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <React.Fragment>
      <Box px={isMobile ? 2 : 10} className={classes.root}>
        <Grid container justify="flex-start">
          <Button
            startIcon={<ArrowBack />}
            onClick={() => setBlogIndex(undefined)}
          >
            Volver
          </Button>
        </Grid>
        <Grid container direction="column" style={{ backgroundColor: "white" }}>
          <Grid item>
            <img
              src={blog.FOTO_1}
              className={classes.img}
              width="100%"
              height="auto"
              alt="foto blog"
            />
          </Grid>
          <Grid item>
            <Typography variant="h4" className={classes.title}>
              {blog.TITULO}
            </Typography>
            <Typography variant="h6" paragraph>
              {blog.SUBTITULO}
            </Typography>
          </Grid>
          <Grid item style={{ padding: 10 }}>
            <Typography variant="body1" className={classes.body}>
              {blog.SECCION_1}
            </Typography>
          </Grid>
          {blog.FOTO_2 && blog.FOTO_2.length > 0 && (
            <Grid item>
              <img src={blog.FOTO_2} alt="foto blog" />
            </Grid>
          )}
          <Grid item style={{ padding: 10 }}>
            <Typography variant="body1" className={classes.body}>
              {blog.SECCION_2}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          {index > 0 && (
            <Button
              onClick={() => setBlogIndex(index - 1)}
              startIcon={<KeyboardArrowLeft />}
            >
              Entrada anterior
            </Button>
          )}
          {amountBlogs - 1 > index && (
            <Button
              onClick={() => setBlogIndex(index + 1)}
              endIcon={<KeyboardArrowRight />}
            >
              Siguiente entrada
            </Button>
          )}
        </Grid>
      </Box>
      <Contact />
    </React.Fragment>
  );
};
export default BlogDetail;
