import {
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Title from "./Title";

interface IWhatIs {}

const WhatIs = (props: IWhatIs) => {
  return (
    <Grid item container direction="column">
      <Grid item>
        <Title title={"¿Qué es MartaOlga como empresa?"} />
      </Grid>
      <Grid item container justifyContent="center" style={{ marginTop: 20 }}>
        <Grid item xs={12} md={8}>
          <Typography paragraph>
            Empresa dedicada a “Transformación Personal y Organizacional” y a
            procesos de “Formación del SER”, a través de la metodología de
            experiencias reflexivas que permiten despertar conciencia para
            elegir.
          </Typography>
          <Typography paragraph>
            MartaOlga es una marca para ti, y para cualquier persona que quiera
            elevar su desempeño como persona y como profesional, crecer en
            calidad humana y realizar o darle sentido a la vida por un camino
            diferente a los ya recorridos. Lo logras despertando conciencia del
            propio SER para construir el sentido del hacer. Más que mejorar el
            HACER, forma y fortalecer el SER como punto de partida del actuar.
          </Typography>
          <Typography paragraph>
            La formación como evidencia y no como aprendizaje la mediremos en
            términos de logro, impacto, paz interior, serenidad, plenitud y
            felicidad. {"\n"}Áreas de influencia: Transformación organizacional
            y personal, Formación del Ser para la cultura, Liderazgo, Ética,
            Servicio, Resiliencia y Vida con Propósito.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default WhatIs;
