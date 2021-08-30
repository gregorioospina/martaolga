import { Grid, Typography } from "@material-ui/core";
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
  return (
    <Grid
      container
      direction="column"
      style={{ paddingTop: 30, paddingBottom: 30 }}
    >
      <Grid item>
        <Title color={props.color} title={props.title} />
      </Grid>
      <Grid item container justifyContent="center" style={{ marginTop: 20 }}>
        <Grid item xs={3}>
          <img src={props.icon} alt={props.title} width="100%" />
        </Grid>
        <Grid item xs={7} container>
          <Grid item>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {props.subtitle}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{props.subtitle2}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Header;
