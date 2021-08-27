import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

interface IMainBanner {}

const MainBanner = (props: IMainBanner) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      banner: { height: "60vh", marginTop: 100 },
      button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid item container justifyContent="flex-start" className={classes.banner}>
      <Grid item xs={1}></Grid>
      <Grid
        container
        item
        xs={12}
        md={7}
        direction="column"
        justifyContent="center"
        spacing={4}
        style={{ paddingLeft: 20 }}
      >
        <Grid item>
          <Typography variant="h4" align="left">
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
export default MainBanner;
