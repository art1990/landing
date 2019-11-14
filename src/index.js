//react
import React from "react";
import ReactDOM from "react-dom";
//components
import App from "pages/App";
//assets
import { GlobalStyle } from "assets/styles/styles";
//serviceWorker
import * as serviceWorker from "./serviceWorker";

const Root = () => (
  <>
    <GlobalStyle />
    <App />
  </>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
