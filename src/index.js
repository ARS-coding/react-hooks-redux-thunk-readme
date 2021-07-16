import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import App from "./App";
import rootReducer from "./reducer";

const thunk = applyMiddleware(thunkMiddleware);

const store = createStore( rootReducer, thunk );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
