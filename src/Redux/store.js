import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
// redux code debugger
import logger from "redux-logger";
// redux persist
import { persistStore } from "redux-persist";

const middleware = []; // doing this applyMiddleware can take however many things.

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

// exporting the store for persist to wrap it
export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);
