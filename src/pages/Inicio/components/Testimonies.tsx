import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Avatar,
  Typography,
  useMediaQuery,
  useTheme,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        minHeight: "60vh",
        paddingTop: 45,
        marginBottom: 30,
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
        justifyContent={isMobile ? "flex-start" : "space-evenly"}
        wrap="nowrap"
        xs={12}
        style={{
          marginTop: isMobile ? 30 : 80,
          overflowX: isMobile ? "auto" : undefined,
          paddingLeft: isMobile ? 40 : "",
          paddingBottom: isMobile ? 20 : "",
        }}
      >
        {testimonies.map((p) => {
          return <TestimonyCard {...p} isMobile={isMobile} />;
        })}
      </Grid>
    </Grid>
  );
};

interface ITestimonyCard {
  image: string;
  name: string;
  testimony: string;
  isMobile: boolean;
}

const TestimonyCard = ({
  image,
  name,
  testimony,
  isMobile,
}: ITestimonyCard) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        position: "relative",
        boxShadow: "1pt 1pt 5px -1px #00000038",
        backgroundColor: "white",
        minHeight: 250,
        maxHeight: "60vh",
        minWidth: isMobile ? "86%" : "",
        marginRight: isMobile ? 15 : "",
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
    <Grid
      item
      container
      xs={isMobile ? 8 : 3}
      className={classes.root}
      direction="column"
      wrap="nowrap"
    >
      {!isMobile && <Avatar src={image} className={classes.avatar}></Avatar>}
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        wrap="nowrap"
      >
        <Grid item style={{ padding: 10 }}>
          <Typography>{testimony}</Typography>
          <Typography variant="overline">{name}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Testimonies;
