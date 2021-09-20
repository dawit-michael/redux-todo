import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import ReduxProvider from "./redux_provider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ReduxProvider />
  </StrictMode>,
  rootElement
);
