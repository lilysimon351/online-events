import { createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from '../../../API/Api'

import { removeMovie } from "../movieSlice";
import { setError, setPending, setFulfilled } from '../../statusFuncs';

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

export const removeMovieThunkReducer = {
    [removeMovieThunk.fulfilled]: setFulfilled,
    [removeMovieThunk.rejected]: setError,
    [removeMovieThunk.pending]: setPending,
}
