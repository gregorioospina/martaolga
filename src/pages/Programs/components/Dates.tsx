import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface IDates {
  program: any;
}

const Dates = ({ program }: IDates) => {
  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      style={{
        backgroundColor: `${program.color}d1`,
        color: "white",
      }}
    >
      <Grid
        item
        style={{
          backgroundColor: `${program.color}d1`,
          width: "100%",
          padding: 15,
        }}
      >
        <Typography variant="h6">Fechas:</Typography>
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          {program.dates.dates}
        </Typography>
        <Typography variant="caption">{program.dates.times}</Typography>
      </Grid>
      <Grid
        item
        style={{ backgroundColor: `${program.color}4a`, padding: 15 }}
        container
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1">Estructura del programa:</Typography>
        </Grid>
        <ul style={{ width: "auto", marginTop: 0 }}>
          {program.dates.structure.map((d: string) => (
            <li>
              <Typography align="left" variant="subtitle2">
                {d}
              </Typography>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};
export default Dates;
