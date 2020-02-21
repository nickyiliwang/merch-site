import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// redux
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
// persist
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
