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

interface IWhoIs {}

const WhoIs = (props: IWhoIs) => {
  return (
    <React.Fragment>
      <Grid item container direction="row-reverse" style={{ padding: 30 }}>
        <Grid item xs={12} style={{ marginBottom: 20 }}>
          <Title title={"¿Quién es MartaOlga Arango?"} />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Typography paragraph align="left">
            <strong>
              Soy una mujer, casada, con 3 hijos, entusiasta y ante todo
              apasionada por mi trabajo, que no solo es fuente de ingresos, sino
              ante todo una pasión de servicio y entrega a los demás, desde el
              “don” que la vida me dio. {"\n"}
            </strong>
          </Typography>
          <Typography paragraph align="left">
            Un don que, apoyado en 10 años de educación formal y 40 años de
            estudio en comprensión de Ser humano, me han dado herramientas para
            mi vida laboral en el sector real y en el de la educación. En los
            últimos 12 años me he desempeño como formadora independiente a
            través de mi empresa “MartaOlga”.
          </Typography>
          <Typography paragraph align="left">
            Inicié este camino, muy temprano en la vida. Siendo muy niña,
            comencé a experimentar lo feliz que me hacía compartir mi vida con
            aquellas personas que poco esperaban de mí, que me miraban solo
            desde el agradecimiento y no desde las expectativas.
          </Typography>
          <Typography paragraph align="left">
            Después descubrir que había temas que me gustaba conocer, que no
            dependían del conocimiento ni de la inteligencia. Temas que cuando
            los vivía con acciones, me enriquecían y me llenaban la vida de una
            sensación de plenitud espectacular: servir, amar, acompañar,
            compartir, respetar, relacionarme desde el ser y no desde la
            apariencia, mirar al otro con dignidad, comenzar el día feliz y no
            esperar hasta el resultado del día para ser feliz.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid item xs={12} md={10}>
          <Typography align="left">
            <strong>
              Me impactó mucho descubrir que para la vida laboral me habían
              formado la cabeza, pero no el corazón. Me sentía incompleta,
              miraba al otro primero como obrero, operario, pobre, analfabeta….
              ¡¡¡QUÉ HORROR!!!
              {"\n"}
            </strong>
          </Typography>
          <Typography paragraph align="left">
            Decidí, contra la corriente y lo esperado, formarme para mirarlos
            primero como personas, porque desde ahí sí teníamos algo en común.
            Podíamos hablar el mismo idioma. Sentíamos y nos gustaba ser
            respetados y amados, teníamos deseos de pertenecer y aportar para
            avanzar.
          </Typography>

          <Typography paragraph align="left">
            Hasta hoy he dedicado mi vida a recuperar el valor del ser humano en
            las empresas, las familias y la sociedad. Y ante todo en SÍ MISMO.
            El valor humano se origina en la consciencia personal del valor del
            propio SER (no del ego).
          </Typography>
          <Typography paragraph align="left">
            Hoy lo hago a través de mi empresa, inspirada en usar el don que la
            vida me dio, acompañada por un carisma que se alimenta en un real
            amor incondicional por el otro y reforzado con la metodología de
            experiencias reflexivas, a través de la cual logro hacer un aporte
            diferente: despertar conciencia. Lo hago con la humildad sincera de
            no identificarme como una fuente de conocimiento sino como “un
            medio” que ha recibido y sigue recibiendo información, y que –a
            través de su estilo– lo pone al servicio de todas aquellas personas
            que quieren enriquecer su propia vida de humanismo, para evolucionar
            desde una mirada espiritual (no religiosa).
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default WhoIs;
