import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
// redux dev-tools
import { composeWithDevTools } from "redux-devtools-extension";
// redux persist
import { persistStore } from "redux-persist";

const middleware = [];

// ensure it's only enabled for production
const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, devTools);

export const persistor = persistStore(store);
