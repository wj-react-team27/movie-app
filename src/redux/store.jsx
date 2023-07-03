import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import favoritMoviesSlice from "./favoritMoviesSlice";

export const store = configureStore({
  reducer: { favoritMovieSlice: favoritMoviesSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
