import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import "./fonts/stratos-semibold.woff2";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
