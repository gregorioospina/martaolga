import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Avatar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

export interface ITestimony {
  image: string;
  name: string;
  testimony: string;
}

const testimonies: ITestimony[] = [
  {
    image: "",
    name: "Carolina Rojas - Cenit",
    testimony: `"El Programa Ser Etico es una invitación a
conectarnos con nuestro Ser y esmerarnos
por vivir cada día la mejor versión de
nosotros mismos. Nos invita al respeto
propio y al de los demás, desde el lugar más
puro que puede existir, el amor."`,
  },
  {
    image: "",
    name: `Juan Gabriel Cendales - Gerente General, Clínica las Américas`,
    testimony: `"Después de dos años de haber
implementado los programas de Marta
Olga, tenemos más conciencia para reflejar
la manera de cómo debemos relacionarnos
con una mayor calidad humana. Junto a
ella, hemos capacitado a más de 600
personas con unos excelentes resultados. El
impacto organizacional es evidente tapto
interna como externamente. No dudo en
recomendar este programa que sin duda le
agrega valor a la organización."`,
  },
  {
    image: "",
    name: "Ibeth Rengifo - Christus Sinergia Salud",
    testimony: `"Además de ser un proceso formativo,
definitivamente también fue un proceso de
transformación de nuestra manera de
pensar para impulsarnos a maneras
diferentes de actuar. Eso fue lo que vivimos
los más de 297 líderes de la organización
junto a Marta Olga. 100% de satisfacción."`,
  },
];

interface ITestimonies {
  testimonies: ITestimony[];
}

const Testimonies = (props: ITestimonies) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: "60vh",
        paddingTop: 45,
      },
      title: {
        borderBottom: `solid 2pt ${theme.palette.primary.main}`,
        height: "min-content",
        fontWeight: "bold",
      },
      viewallbutton: {
        width: "100%",
        height: 40,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.root}
      justifyContent="flex-start"
      alignContent="flex-start"
    >
      <Grid
        item
        container
        justifyContent="center"
        xs={12}
        style={{ height: "min-content" }}
      >
        <Typography variant="h4" className={classes.title}>
          Testimonios
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="space-evenly"
        xs={12}
        style={{ marginTop: 80 }}
      >
        {testimonies.map((p) => {
          return <TestimonyCard {...p} />;
        })}
      </Grid>
    </Grid>
  );
};

interface ITestimonyCard {
  image: string;
  name: string;
  testimony: string;
}

const TestimonyCard = ({ image, name, testimony }: ITestimonyCard) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        position: "relative",
        boxShadow: "1pt 1pt 5px -1px #00000038",
        backgroundColor: "white",
        minHeight: 250,
      },
      avatar: {
        marginTop: -50,
        width: 100,
        height: 100,
        marginLeft: "auto",
        marginRight: "auto",
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid item container xs={3} className={classes.root} direction="column">
      <Avatar src={image} className={classes.avatar}></Avatar>
      <Grid item container direction="column" justifyContent="center">
        <Grid item style={{ padding: 10 }}>
          <Typography>{testimony}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline">{name}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Testimonies;
