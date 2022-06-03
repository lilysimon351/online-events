import { createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from '../../../API/Api'

import { registerUser } from "../userSlice";
import { setError, setPending, setFulfilled } from '../../statusFuncs';

export const registerUserThunk = createAsyncThunk(
    'user/registerUserThunk',
    async (userInfo, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.put(`${baseUrl}/users`, userInfo);
            dispatch(registerUser(response.data))
        } catch(err) {
            return rejectWithValue(err.message)
        }
    }
)

// export const registerUserThunkReducer = {
//     [registerUserThunk.rejected]: setError,
//     [registerUserThunk.pending]: setPending,
//     [registerUserThunk.fulfilled]: setFulfilled,
// }

export const registerUserThunkReducer = (builder) => {
    builder
      .addCase(registerUserThunk.pending, setPending)
      .addCase(registerUserThunk.fulfilled, setFulfilled)
      .addCase(registerUserThunk.rejected, setError)
}
