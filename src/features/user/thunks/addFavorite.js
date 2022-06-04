import { createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from '../../../API/Api'

import { addFavorite } from "../userSlice";
import { setError, setPending, setFulfilled } from '../../statusFuncs';


export const addFavoriteThunk = createAsyncThunk(
    'movie/addFavoriteThunk',
    async (userInfo, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.put(`${baseUrl}/users/${userInfo.id}}`, userInfo);
            dispatch(addFavorite(response.data))
        } catch(err) {
            return rejectWithValue(err.message)
        }
    }
)

export const addFavoriteThunkReducer = {
    [addFavoriteThunk.fulfilled]: setFulfilled,
    [addFavoriteThunk.rejected]: setError,
    [addFavoriteThunk.pending]: setPending,
}