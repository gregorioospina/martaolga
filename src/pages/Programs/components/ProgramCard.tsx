import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

interface IProgramCard {
  pathname: string;
  image: string;
  name: string;
}

const ProgramCard = ({ image, pathname }: IProgramCard) => {
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        paddingTop: 30,
        minHeight: "50vh",
        // backgroundColor: "#f7f7f7",
      },
      programCard: {
        // height: "35vh",
        // width: "35vh",
        boxShadow: "1pt 1pt 5px -1px #00000038",
        // padding: 15,
        margin: 15,
        backgroundColor: "white",
        borderRadius: 27,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: isMobile ? "45vw" : "20vw",
        width: isMobile ? "45vw" : "20vw",
        maxWidth: isMobile ? "45vw" : "20vw",
      },
      title: {
        borderBottom: `solid 2pt ${theme.palette.primary.main}`,
        height: "min-content",
        fontWeight: "bold",
      },
      viewallbutton: {
        width: isMobile ? "100%" : "40%",
        height: 40,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.programCard}
      onClick={() => history.push(pathname)}
      direction="column"
      xs={isMobile ? 5 : 3}
      style={{
        backgroundImage: `url(${image})`,
      }}
      wrap="nowrap"
    >
      <Grid item style={{ width: "100%", height: "100%" }}></Grid>
    </Grid>
  );
};
export default ProgramCard;
