import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core";
import MenuAppbar from "./pages/MenuAppbar";
import Inicio from "./pages/Inicio/Inicio";
import Footer from "./pages/Footer";
import AboutMe from "./pages/AboutMe/AboutMe";
import Programs from "./pages/Programs/Programs";
import ProgramDetail from "./pages/Programs/ProgramDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Blog from "./pages/Blog/Blog";
import Methodology from "./pages/Methodology/Methodology";
import ContactPage from "./pages/Contact/ContactPage";
import Experience from "./pages/Experience/Experience";
import { init } from "@emailjs/browser";
init("user_2biTaF3OD8tw0qMVkcSjQ");

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
          <div
            style={{
              maxWidth: 1300,
              margin: "0 auto",
            }}
          >
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
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
