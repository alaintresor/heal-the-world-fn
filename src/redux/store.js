import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/Auth/Auth";
import loggedUserReducer from "./slices/Auth/login";

export const reducers = {
    // Add your reducers here
    auth:authReducer,
    user:loggedUserReducer,
};


const store = configureStore({
  reducer: {
    ...reducers,
    devTools: process.env.NODE_ENV !== "production",
  },
});

export default store;