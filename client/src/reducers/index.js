import { combineReducers } from "redux";

import invoices from "./invoices";
import auth from "./auth";

export const reducers = combineReducers({
  invoices,
  auth,
});
