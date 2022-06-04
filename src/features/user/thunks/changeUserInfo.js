import { createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from '../../../API/Api'

import { changeUserInfo } from "../userSlice";
import { setError, setPending, setFulfilled } from '../../statusFuncs';


export const changeUserInfoThunk = createAsyncThunk(
    'user/changeUserInfoThunk',
    async (userInfo, {rejectWithValue, dispatch}) => {
        console.log('userInfo', userInfo.id)
        try {
            const response = await axios.put(`${baseUrl}/users/${userInfo.id}`, userInfo);
            dispatch(changeUserInfo(response.data))
        } catch(err) {
            return rejectWithValue(err.message)
        }
    }
)

// export const changeUserInfoThunkReducer = {
//     [changeUserInfoThunk.fulfilled]: setFulfilled,
//     [changeUserInfoThunk.rejected]: setError,
//     [changeUserInfoThunk.pending]: setPending,
// }

export const changeUserInfoThunkReducer = (builder) => {
    builder
    .addCase(changeUserInfoThunk.pending, setPending)
    .addCase(changeUserInfoThunk.fulfilled, setFulfilled)
    .addCase(changeUserInfoThunk.rejected, setError)
}