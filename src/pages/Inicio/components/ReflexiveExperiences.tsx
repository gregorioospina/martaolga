import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

interface IReflexiveExperiences {}

const ReflexiveExperiences = (props: IReflexiveExperiences) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      banner: { height: "60vh", marginTop: 25 },
      button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      className={classes.banner}
    >
      <Grid item xs={5}>
        <img
          src="https://miro.medium.com/max/1200/1*HEoLBLidT2u4mhJ0oiDgig.png"
          alt="happy person"
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
        ></img>
      </Grid>
      <Grid
        container
        item
        md={7}
        direction="column"
        justifyContent="center"
        spacing={4}
        style={{ paddingLeft: 20 }}
      >
        <Grid item>
          <Typography variant="h4" align="left" style={{ fontWeight: "bold" }}>
            Lorem ipsun buscando le afalksd jfskjfaldkfj k
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="left">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown ...
          </Typography>
        </Grid>
        <Grid item container justifyContent="flex-start">
          <Button variant="contained" className={classes.button}>
            Quiero Saber
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ReflexiveExperiences;
