import { createStore, applyMiddleware } from "redux";
// redux code debugger
import logger from "redux-logger";
import rootReducer from './rootReducer'

const middleware = [logger]; // doing this applyMiddleware can take however many things.

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;

