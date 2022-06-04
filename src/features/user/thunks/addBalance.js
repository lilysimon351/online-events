import { createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from '../../../API/Api'

import { addBalance } from "../userSlice";
import { setError, setPending, setFulfilled } from '../../statusFuncs';


export const addBalanceThunk = createAsyncThunk(
    'movie/addBalanceThunk',
    // userInfo object with balance
    async (userInfo, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.put(`${baseUrl}/users/${userInfo.id}}`, userInfo);
            dispatch(addBalance(response.data))
        } catch(err) {
            return rejectWithValue(err.message)
        }
    }
)

export const addBalanceThunkReducer = {
    [addBalanceThunk.fulfilled]: setFulfilled,
    [addBalanceThunk.rejected]: setError,
    [addBalanceThunk.pending]: setPending,
}