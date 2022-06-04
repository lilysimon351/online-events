import { createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from '../../../API/Api'

import { registerUser } from "../userSlice";
import { ACTIVE_ROUTES } from '../../../helpers/constants'

const [LOGIN] = ACTIVE_ROUTES

export const registerUserThunk = createAsyncThunk(
    'user/registerUserThunk',
    async (userInfo, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.post(`${baseUrl}/users`, userInfo);
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

const setFulfilled = (state, action) => {
    state.error = null
    state.failedRegister = false
    state.authRoute = LOGIN
}
const setPending = (state, action) => {
    state.error = null
    state.failedRegister = true
}
const setError = (state, action) => {
    state.error = action.payload
    state.failedRegister = true
    
}
export const registerUserThunkReducer = (builder) => {
    builder
      .addCase(registerUserThunk.pending, setPending)
      .addCase(registerUserThunk.fulfilled, setFulfilled)
      .addCase(registerUserThunk.rejected, setError)
}
