import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Title from "../../AboutMe/components/Title";

interface ITopics {
  topics: Array<{
    topic: string;
    description: string;
    subtopics: string[];
  }>;
  color: string;
}

const Topics = (props: ITopics) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      divider: {
        borderBottom: `solid 1.5pt ${
          props.color ? props.color : theme.palette.primary.main
        }`,
        width: 320,
      },
      topic: {
        fontWeight: "bold",
        fontSize: "1.2rem",
      },
      list: {
        marginTop: 20,
        paddingLeft: 40,
      },
    })
  );

  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Title color={props.color} title={"Línea Temática"} />
      </Grid>
      <Grid item>
        {props.topics.map((t, i) => {
          return (
            <div className={classes.list}>
              <Typography align="left" className={`${classes.topic}`}>
                {`${i + 1}.  ${t.topic}`}
              </Typography>
              {t.subtopics && t.subtopics.length > 0 && (
                <div className={classes.divider}></div>
              )}
              <Typography align="left" style={{ marginTop: 10 }}>
                {t.description}
              </Typography>
              {t.subtopics
                ? t.subtopics.map((st) => (
                    <Typography align="left">{`- ${st}`}</Typography>
                  ))
                : null}
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default Topics;
