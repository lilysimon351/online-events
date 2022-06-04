import { createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from '../../../API/Api'

import { addMovie } from "../movieSlice";
import { setError, setPending, setFulfilled } from '../../statusFuncs';


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

// export const addMovieThunkReducer = {
//     [addMovieThunk.fulfilled]: setFulfilled,
//     [addMovieThunk.rejected]: setError,
//     [addMovieThunk.pending]: setPending,
// }

export const addMovieThunkReducer = (builder) => {
    builder
      .addCase(addMovieThunk.pending, setPending)
      .addCase(addMovieThunk.fulfilled, setFulfilled)
      .addCase(addMovieThunk.rejected, setError)
}