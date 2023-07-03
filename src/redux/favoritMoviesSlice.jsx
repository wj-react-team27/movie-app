import { createSlice } from "@reduxjs/toolkit";

export const favoritMoviesSlice = createSlice({
  name: "counter",
  initialState: {
    favoritMovies: [],
  },
  reducers: {
    addMovie: (state, action) => {
      return {
        favoritMovies: [...state.favoritMovies, action.payload],
      };
    },
    delelteMovie: (state, action) => {
      return {
        favoritMovies: state.favoritMovies.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    },
    resetList: () => {
      return {
        favoritMovies: [],
      };
    },
  },
});

export const { addMovie, addCheckMovie, delelteMovie, resetList } =
  favoritMoviesSlice.actions;

export default favoritMoviesSlice.reducer;
