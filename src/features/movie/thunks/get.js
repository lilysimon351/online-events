import { createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from '../../../API/Api'

import { getMovies } from "../movieSlice";
import { setError, setPending, setFulfilled } from '../../statusFuncs';

export const getMoviesThunk = createAsyncThunk(
    'movie/getMoviesThunk',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.get(`${baseUrl}/movies`);
            
            console.log('dispatchBefore')
            dispatch(getMovies(response.data))
            console.log('dispatchafter')
        } catch(err) {
            return rejectWithValue(err.message)
        }

    }
)

// export const getMoviesThunkReducer = {
//     [getMoviesThunk.rejected]: setError,
//     [getMoviesThunk.pending]: setPending,
//     [getMoviesThunk.fulfilled]: setFulfilled,
// }



export const getMoviesThunkReducer = (builder) => {
    builder
      .addCase(getMoviesThunk.pending, setPending)
      .addCase(getMoviesThunk.fulfilled, setFulfilled)
      .addCase(getMoviesThunk.rejected, setError)
}