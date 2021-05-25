import { StrictMode } from "react";
import ReactDOM from "react-dom";
//Імпортуємо Provider
import { Provider } from "react-redux";
//імпортуємо сюди все, що є в store з папки redux
import { store } from "./redux";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
