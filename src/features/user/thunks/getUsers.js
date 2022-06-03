import { createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from '../../../API/Api'

import { getUsers } from "../userSlice";
import { setError, setPending, setFulfilled } from '../../statusFuncs';

export const getUsersThunk = createAsyncThunk(
    'user/getUsersThunk',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.get(`${baseUrl}/users`);
            dispatch(getUsers(response.data))
        } catch(err) {
            return rejectWithValue(err.message)
        }
    }
)

// export const getUsersThunkReducer = {
//     [getUsersThunk.rejected]: setError,
//     [getUsersThunk.pending]: setPending,
//     [getUsersThunk.fulfilled]: setFulfilled,
// }

export const getUsersThunkReducer = (builder) => {
    builder
      .addCase(getUsersThunk.pending, setPending)
      .addCase(getUsersThunk.fulfilled, setFulfilled)
      .addCase(getUsersThunk.rejected, setError)
}