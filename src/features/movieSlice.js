import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from '../API/Api'


export const getMoviesThunk = createAsyncThunk(
    'movie/getMoviesThunk',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.get(`${baseUrl}/movies`);

            dispatch(getMovies(response.data))
        } catch(err) {
            return rejectWithValue(err.message)
        }

    }
)

export const getSingleMovieThunk = createAsyncThunk(
    'movie/getSingleMovieThunk',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.get(`${baseUrl}/movies/${id}`);

            dispatch(getSingleMovie(response.data))
        } catch(err) {
            return rejectWithValue(err.message)
        }

    }
)

export const addMovieThunk = createAsyncThunk(
    'movie/addMovieThunk',
    async (movieInfo, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.post(`${baseUrl}/movies`, movieInfo);
            dispatch(addMovie(response.data))
        } catch(err) {
            return rejectWithValue(err.message)
        }
    }
)

export const editMovieThunk = createAsyncThunk(
    'movie/editMovieThunk',
    async (movieInfo, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.put(`${baseUrl}/movies/${movieInfo.id}`, movieInfo);
            dispatch(editMovie(response.data))
        } catch(err) {
            return rejectWithValue(err.message)
        }
    }
)

export const removeMovieThunk = createAsyncThunk(
    'movie/removeMovieThunk',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.delete(`${baseUrl}/movies/${id}`);
            dispatch(removeMovie(id))
        } catch(err) {
            return rejectWithValue(err.message)
        }
    }
)


const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const setPending = (state, action) => {
    state.status = 'pending';
    state.error = null;
}

const setFulfilled = (state, action) => {
    state.status = 'fulfilled';
}


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
        },
        getSingleMovie: (state, action) => {
            state.movies = action.payload
        }
    },
    extraReducers: {
        [getMoviesThunk.pending]: setPending,
        [getMoviesThunk.fulfilled]: setFulfilled,
        [getMoviesThunk.rejected]: setError,

        [addMovieThunk.fulfilled]: setFulfilled,
        [addMovieThunk.rejected]: setError,
        [addMovieThunk.pending]: setPending,

        [getSingleMovieThunk.fulfilled]: setFulfilled,
        [getSingleMovieThunk.rejected]: setError,
        [getSingleMovieThunk.pending]: setPending,

        [editMovieThunk.fulfilled]: setFulfilled,
        [editMovieThunk.rejected]: setError,
        [editMovieThunk.pending]: setPending,

        [removeMovieThunk.fulfilled]: setFulfilled,
        [removeMovieThunk.rejected]: setError,
        [removeMovieThunk.pending]: setPending,
    }
})

export const selectMovie = (state) => state.movie.movies;
export const selectStatus = (state) => state.movie.status;
export const selectError = (state) => state.movie.error;

export const {addMovie, editMovie, removeMovie, getMovies, getSingleMovie } = movieSlice.actions

export default movieSlice.reducer