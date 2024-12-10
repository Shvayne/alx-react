import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Provider } from "react-redux";

const store = createStore(uiReducer, initialState, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);