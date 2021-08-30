import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface ITitle {
  title: string;
  color?: string;
}

const Title = (props: ITitle) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      divider: {
        backgroundColor: props.color ? props.color : theme.palette.primary.main,
        height: 3,
        maxWidth: 300,
        margin: "0 auto",
      },
    })
  );

  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        {props.title}
      </Typography>
      <Divider className={classes.divider} variant="middle"></Divider>
    </React.Fragment>
  );
};
export default Title;
