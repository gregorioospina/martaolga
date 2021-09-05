import {
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Title from "../../AboutMe/components/Title";

interface IHeader {
  title: string;
  subtitle: string;
  subtitle2: string;
  icon: string;
  color: string;
}

const Header = (props: IHeader) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="column"
      style={{ paddingTop: 30, paddingBottom: 30, backgroundColor: "white" }}
    >
      <Grid item>
        <Title color={props.color} title={props.title} />
      </Grid>
      <Grid item container justifyContent="center" style={{ marginTop: 20 }}>
        <Grid item xs={3}>
          <img
            src={props.icon}
            alt={props.title}
            width="100%"
            style={{ maxWidth: 200 }}
          />
        </Grid>
        <Grid item xs={7} container alignContent="center">
          <Grid item style={{ height: "max-content" }}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              {props.subtitle}
            </Typography>
          </Grid>
          <Hidden smDown={isMobile}>
            <Grid item xs={12}>
              <Typography variant="body1">{props.subtitle2}</Typography>
            </Grid>
          </Hidden>
        </Grid>
        <Hidden smUp={!isMobile}>
          <Grid item>
            <Typography variant="body1">{props.subtitle2}</Typography>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};
export default Header;
