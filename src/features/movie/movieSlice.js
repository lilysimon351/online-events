import { createSlice } from "@reduxjs/toolkit";
import { addMovieThunkReducer } from "./thunks/add";
import { editMovieThunkReducer } from "./thunks/edit";
import { getMoviesThunkReducer } from "./thunks/get";
import { removeMovieThunkReducer } from "./thunks/remove";


const initialState = {
    movies: [],
    status: null,
    error: null,
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies.push(action.payload)
        },
        editMovie: (state, action) => {
            state.movies = state.movies.map(item => {
                if( item.id === action.payload.id) {
                    item = action.payload
                }
                return item
            })
        },
        removeMovie: (state, action) => {
            state.movies = state.movies.filter( item => item.id !== action.payload)
        },
        getMovies: (state, action) => {
            state.movies = action.payload
        }
    },
    extraReducers: (builder) => {
        addMovieThunkReducer(builder)
        editMovieThunkReducer(builder)
        getMoviesThunkReducer(builder)
        removeMovieThunkReducer(builder)
    }
})

export const selectMovies = (state) => state.movie.movies;
export const selectStatus = (state) => state.movie.status;
export const selectError = (state) => state.movie.error;

export const { addMovie, editMovie, removeMovie, getMovies } = movieSlice.actions

export default movieSlice.reducer