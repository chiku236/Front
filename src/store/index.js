import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";

const reducer = {
  auth: authReducer,
};
export const store = configureStore({
  reducer,
  devTools: true,
});
