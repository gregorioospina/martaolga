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

import Blog from "./pages/Blog/Blog";
import Methodology from "./pages/Methodology/Methodology";
import ContactPage from "./pages/Contact/ContactPage";
import Experience from "./pages/Experience/Experience";

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
              path="/programas/:programindex"
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
