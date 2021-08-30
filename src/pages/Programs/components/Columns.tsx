import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface IColumns {
  column1: string;
  column2: string;
}

const Columns = (props: IColumns) => {
  return (
    <Grid container>
      <Grid item md={6} xs={12} style={{ padding: 30 }}>
        {props.column1}
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        style={{ backgroundColor: "#fff8eb", padding: 30 }}
      >
        {props.column2}
      </Grid>
    </Grid>
  );
};
export default Columns;
