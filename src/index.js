import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

/**
 * action принимает тип, который будет выполняться и сами данные
 * берем пример с банком, где мы снимаем и кладем сумму
 */
// action = { type: "", payload: "" };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
