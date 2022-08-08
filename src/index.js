import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Router from "./routes";
import store from "./redux/store";
function FashionCart() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
}
ReactDOM.render(<FashionCart/>, document.getElementById("root"));
