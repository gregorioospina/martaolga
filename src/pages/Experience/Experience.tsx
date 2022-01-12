import {
  createStyles,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import Contact from "../Contact/Contact";
import useExperiences from "./hooks/useExperiences";

import backgroundImage from "./images/munecos-fondo.png";

const typeToName = {
  0: "IMPACTO ORGANIZACIONAL",
  1: "IMPACTO EN RELACION CON COMUNIDADES",
  2: "FORMACION PARENTAL",
  3: "CONFERENCIA REFLEXIVA",
};

const nameToType = {
  "IMPACTO ORGANIZACIONAL": 0,
  "IMPACTO EN RELACION CON COMUNIDADES": 1,
  "FORMACION PARENTAL": 2,
  "CONFERENCIA REFLEXIVA": 3,
};

const headerToType = {
  image: "FOTO",
  year: "AÑO",
  description: "DESCRIPCION",
  name: "NOMBRE COMPAÑIA",
  type: "TIPO",
};

interface ISingleExperience {
  year: string;
  description: string[];
  image: string | null;
  name: string;
  type: number;
}

interface IExperience {}

const Experience = (props: IExperience) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const experiences = useExperiences();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      picturecard: {
        backgroundColor: "white",
        borderRadius: 9,
        boxShadow: "1px 1px 3px -1px #00000070",
        marginTop: 10,
        marginBottom: 5,
        padding: 20,
      },
      root: {
        paddingTop: 100,
        paddingBottom: 100,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "repeat-y",
      },
    })
  );

  const classes = useStyles();

  const experiencesToRender = useMemo(() => {
    let exs: ISingleExperience[][] = [[], [], [], []];

    const copy = (experiences.experiences ?? []).map((e) => ({
      year: e[headerToType.year],
      description: ((e[headerToType.description] as string) ?? "")
        .split("##")
        .filter((d) => d !== ""),
      image: e[headerToType.image],
      name: e[headerToType.name],
      type: e[headerToType.type],
    }));

    copy.forEach((e) => {
      exs[e.type].push(e);
    });

    exs = exs.map((ex) =>
      ex.sort((a, b) => (a.year.split("-")[0] > b.year.split("-")[0] ? -1 : 1))
    );

    console.log({ exs });
    return exs;
  }, [experiences]);

  return (
    <React.Fragment>
      <Grid container justifyContent="center" className={classes.root}>
        <Grid item container direction="column" style={{ maxWidth: 900 }}>
          {experiencesToRender[0].map((ex) => (
            <PictureExperience classes={classes} ex={ex} isMobile={isMobile} />
          ))}
          {experiencesToRender[1].map((ex) => (
            <PictureExperience classes={classes} ex={ex} isMobile={isMobile} />
          ))}
          <Grid item container className={classes.picturecard}>
            <List>
              {experiencesToRender[2].map((ex) => (
                <ListItem>
                  <ListItemText
                    primary={`${ex.name} / ${ex.year}`}
                    secondary={ex.description}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item container className={classes.picturecard}>
            <List>
              {experiencesToRender[3].map((ex) => (
                <ListItem>
                  <ListItemText
                    primary={`${ex.name} / ${ex.year}`}
                    secondary={ex.description}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Contact />
    </React.Fragment>
  );
};
export default Experience;

const PictureExperience = ({ classes, ex, isMobile }: any) => {
  return (
    <Grid
      item
      container
      justifyContent="space-evenly"
      className={classes.picturecard}
    >
      {" "}
      {isMobile ? (
        <React.Fragment>
          <Grid item xs={12} container alignItems="center">
            <img
              src={ex.image ?? ""}
              style={{ maxWidth: "100%", maxHeight: isMobile ? 90 : "" }}
              alt="companylogo"
            />
          </Grid>
          <Grid item style={{ padding: 16 }} xs={12}>
            <Typography
              variant={isMobile ? "h6" : "h4"}
              align="left"
              style={{ fontWeight: "bold" }}
            >
              {ex.name}
            </Typography>
          </Grid>
          <Grid item xs={12} container direction="column">
            <Grid item>
              <List>
                {ex.description.map((d: string) => (
                  <ListItem>
                    <ListItemText primary={d} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item>
              <Typography variant="overline">{ex.year}</Typography>
            </Grid>
          </Grid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Grid item xs={3} container alignItems="center">
            <img
              src={ex.image ?? ""}
              style={{ maxWidth: "100%" }}
              alt="companylogo"
            />
          </Grid>
          <Grid item xs={7} container direction="column">
            <Grid item style={{ padding: 16 }}>
              <Typography
                variant="h4"
                align="left"
                style={{ fontWeight: "bold" }}
              >
                {ex.name}
              </Typography>
            </Grid>
            <Grid item>
              <List>
                {ex.description.map((d: string) => (
                  <ListItem>
                    <ListItemText primary={d} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item>
              <Typography variant="overline">{ex.year}</Typography>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </Grid>
  );
};
