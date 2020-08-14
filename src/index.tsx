import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalStyle2 from "./styles/GlobalStyle2";
import theme from "./styles/theme";
import { ThemeProvider } from "./styles/theme-components";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle2 />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
