import { Grid, Typography, useTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";

export interface IFormationPillar {
  title: string;
  subtitle?: string | undefined;
  body?: string | undefined;
  footer?: string | undefined;
}

const FormationPillar = (pillar: IFormationPillar) => {
  const theme = useTheme();
  return (
    <Grid item container direction="column" alignItems="center">
      <Grid
        item
        container
        alignContent="center"
        justifyContent="center"
        style={{
          backgroundColor: theme.palette.primary.main,
          width: "100%",
          minHeight: 50,
        }}
      >
        <Typography align="center" variant="h5" style={{ fontWeight: "bold" }}>
          {pillar.title}
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        {pillar.subtitle && (
          <Grid
            item
            container
            justify="center"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <Grid item xs={12}>
              <Typography style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                {pillar.subtitle}
              </Typography>
            </Grid>
          </Grid>
        )}
        {pillar.body && (
          <Grid
            item
            container
            justify="center"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <Grid item xs={12}>
              <Typography>{pillar.body}</Typography>
            </Grid>
          </Grid>
        )}
        {pillar.footer && (
          <Grid
            item
            container
            justify="center"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <Grid item xs={12}>
              <Typography style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                {pillar.footer}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
export default FormationPillar;
