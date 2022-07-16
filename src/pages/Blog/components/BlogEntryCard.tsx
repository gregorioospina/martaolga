import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface IBlogEntryCard {
  FOTO_1: string;
  TITULO: string;
  SUBTITULO: string;
  index: number;
  onClick: () => void;
}

const BlogEntryCard = (props: IBlogEntryCard) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      card: {
        boxShadow: "1pt 1pt 5px -2px #000000a8",
        backgroundColor: "white",
        padding: 20,
        margin: 15,
        width: "-moz-available" /* WebKit-based browsers will ignore this. */,
        //@ts-ignore
        width:
          "-webkit-fill-available" /* Mozilla-based browsers will ignore this. */,
        //@ts-ignore
        width: "fill-available",
        borderRadius: 9,
        marginLeft: "auto",
        marginRight: "auto",
        cursor: "pointer",
      },
    })
  );

  const classes = useStyles();
  return (
    <Grid
      item
      container
      className={classes.card}
      xs={12}
      md={8}
      onClick={() => props.onClick()}
    >
      <Grid item xs={12} md={5}>
        <img
          src={props.FOTO_1}
          alt="blog entry"
          height="300px"
          width="100%"
          style={{
            objectFit: "contain",
            borderRadius: 9,
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        container
        direction="column"
        justifyContent="center"
        style={{ padding: 15 }}
      >
        <Grid item>
          <Typography variant="h4">{props.TITULO}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            {props.SUBTITULO.substr(0, 150)}...
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default BlogEntryCard;
