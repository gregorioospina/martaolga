import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core";
import MenuAppbar from "./pages/MenuAppbar";
import Inicio from "./pages/Inicio/Inicio";

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
        fontFamily: "Inter",
      },
    });
  };

  return (
    <ThemeProvider theme={theme()}>
      <div className="App">
        <MenuAppbar />
        <Inicio />
      </div>
    </ThemeProvider>
  );
}

export default App;
