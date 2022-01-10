import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider, Typography } from "@material-ui/core";
import MenuAppbar from "./pages/MenuAppbar";
import Inicio from "./pages/Inicio/Inicio";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact/Contact";
import AboutMe from "./pages/AboutMe/AboutMe";
import Programs from "./pages/Programs/Programs";
import ProgramDetail, { IProgramDetail } from "./pages/Programs/ProgramDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import p1_main from "./pages/Programs/images/P1/main.png";
import p1_pillars from "./pages/Programs/images/P1/afterColumnImage.png";
import p1_icon from "./pages/Programs/images/P1/iconos programas-01.svg";
import BlogsMenu from "./pages/Blog/components/BlogsMenu";
import Blog from "./pages/Blog/Blog";
import Methodology from "./pages/Methodology/Methodology";
import ContactPage from "./pages/Contact/ContactPage";
import Experience from "./pages/Experience/Experience";

const programs: IProgramDetail[] = [
  {
    color: "#ff5358",
    column1: (
      <React.Fragment>
        <Typography paragraph>
          Ese programa conformado de creencias, formas de pensar, percibir e
          interpretar viene acompañado de emociones tóxicas y negativas que
          aprendimos a contener, y que sin darnos cuenta nos traicionan
          diariamente manifestándose en nuestra manera de reaccionar y
          determinando la calidad de nuestras relaciones y por ende de “nuestra
          realidad”.
        </Typography>
        <Typography paragraph>
          Hemos construido nuestra realidad, usando “de manera inconsciente” lo
          que otros nos entregaron “de manera inconsciente”. Somos transmisores
          de un pasado heredado que padecemos y repetimos, pero que no tenemos
          que perpetuar.
        </Typography>
        <Typography paragraph>
          El proceso de transformación nos llevará a “darnos cuenta” y
          evidenciar que podemos ELEGIR lo que queremos tener, lograr y hacer, y
          especialmente lo que ¡queremos SER!”. Vamos a empoderarnos con la
          libertad del SER, libertad para re - pensarnos, definirnos y
          empoderarnos.
        </Typography>
      </React.Fragment>
    ),
    column2: (
      <React.Fragment>
        <Typography paragraph>
          Tenemos la posibilidad de ser generadores de un futuro elegido, que le
          dará sentido y propósito a nuestro día a día. Podemos gestionar
          nuestra vida y actuar con integridad para hacerla realidad, teniendo
          como grandes indicadores armonía, serenidad, plenitud, paz y
          felicidad. El enfoque es formar el SER y luego orientar el HACER.
        </Typography>
        <Typography paragraph>
          Para lograrlo vamos a familiarizarnos con nueva información que nos
          permite ver la vida desde otra perspectiva, incluye observar,
          comprender, aceptar, asumir, reinterpretar, soltar, sanar, elegir,
          renunciar, perdonar y agradecer. Y ante todo darnos cuenta de que la
          herramienta fundamental es la acción para la evidencia.
        </Typography>
      </React.Fragment>
    ),
    icon: p1_icon,
    photo: p1_main,
    afterColumnImage: p1_pillars,
    subtitle: "El Ser que soy y el que puedo Ser",
    subtitle2:
      "Nacimos con la posibilidad de ser felices, y nos la dejamos robar, cubrir o enmascarar con información que recibimos en la infancia -principalmente de nuestros referentes- y que acatamos como verdadera y única, convirtiéndola en el formato (parámetros mentales) que controla el SER que hemos venido siendo. ",
    title: "Transformación personal",
    topics: [
      {
        subtopics: [],
        topic: "Conciencia de los resultados presentes",
        description:
          "Hacer un alto en el camino para darnos cuenta cómo venimos viviendo, qué resultados produce nuestra manera de SER a la luz de las 4 dimensiones humanas.",
      },
      {
        subtopics: [],
        topic: "Transformación vs Cambio",
        description:
          "Más que cambiar el pasado es crear el futuro. Con la libertad y conciencia para ELEGIR nuevas posibilidades.",
      },
      {
        subtopics: [],
        topic: "El punto de llegada",
        description: "Anclar la transformación en Visión, Propósito y Sentido",
      },
      {
        subtopics: [
          "Perfección",
          "Culpa/Víctima",
          "Miedo",
          "Carencia",
          "No merecimiento.",
        ],
        topic: "El punto de partida",
        description:
          "El formato del SER que he venido siendo. Referentes, programación de creencias, lentes perceptivos y Monstruos limitantes:",
      },
      {
        subtopics: [
          "Soltar a los referentes. Comprender, perdonar y agradecer",
          "Sanar memorias emocionales negativas",
          "Reprogramar la voz interna del adulto",
        ],
        topic: "Soltar para Liberar espacio",
        description: "",
      },
      {
        subtopics: [],
        topic: "Siempre hay una POSIBILIDAD",
        description:
          "El reto es ELEGIRLA y convertirla en realidad con la acción.",
      },
      {
        subtopics: [],
        topic: "El poder de la acción extraordinaria",
        description:
          "Declarar compromisos y sellarlos con INTEGRIDAD, para generar evidencias.",
      },
    ],
    footerImage: "",
    url: "",
  },
  {
    color: "#ff5358",
    column1: "",
    column2: "",
    icon: "",
    photo: "",
    afterColumnImage: "",
    subtitle: "",
    subtitle2: "",
    title: "",
    topics: [{ subtopics: [], topic: "", description: "" }],
    footerImage: "",
    url: "",
  },
  {
    color: "#ff5358",
    column1: "",
    column2: "",
    icon: "",
    photo: "",
    afterColumnImage: "",
    subtitle: "",
    subtitle2: "",
    title: "",
    topics: [{ subtopics: [], topic: "", description: "" }],
    footerImage: "",
    url: "",
  },
  {
    color: "#ff5358",
    column1: "",
    column2: "",
    icon: "",
    photo: "",
    afterColumnImage: "",
    subtitle: "",
    subtitle2: "",
    title: "",
    topics: [{ subtopics: [], topic: "", description: "" }],
    footerImage: "",
    url: "",
  },
  {
    color: "#ff5358",
    column1: "",
    column2: "",
    icon: "",
    photo: "",
    afterColumnImage: "",
    subtitle: "",
    subtitle2: "",
    title: "",
    topics: [{ subtopics: [], topic: "", description: "" }],
    footerImage: "",
    url: "",
  },
];

function App() {
  const theme = () => {
    return createTheme({
      palette: {
        primary: {
          main: "#ffa200",
        },
        secondary: {
          main: "#802da3",
        },
      },
      typography: {
        fontFamily: "Alegreya Sans",
      },
    });
  };

  return (
    <ThemeProvider theme={theme()}>
      <Router>
        <div className="App">
          <MenuAppbar />
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/martaolga" component={AboutMe} />
            <Route exact path="/programas" component={Programs} />
            <Route exact path="/metodologia" component={Methodology} />
            <Route exact path="/experiencia" component={Experience} />
            <Route
              exact
              path="/programas/&:programindex"
              component={ProgramDetail}
            />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contacto" component={ContactPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
