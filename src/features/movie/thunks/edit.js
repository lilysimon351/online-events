import { createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from '../../../API/Api'

import { editMovie } from "../movieSlice";
import { setError, setPending, setFulfilled } from '../../statusFuncs';

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

export const editMovieThunkReducer = (builder) => {
    builder
      .addCase(editMovieThunk.pending, setPending)
      .addCase(editMovieThunk.fulfilled, setFulfilled)
      .addCase(editMovieThunk.rejected, setError)
}