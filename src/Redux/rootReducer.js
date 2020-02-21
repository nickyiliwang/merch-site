import { combineReducers } from "redux";
// persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localStorage
// reducers
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"] // setting which reducers you want to persist
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

// now its persistent because the fn returns it with the ability
export default persistReducer(persistConfig, rootReducer);
