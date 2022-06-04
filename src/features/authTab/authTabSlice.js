import { createSlice } from "@reduxjs/toolkit"
import { ACTIVE_ROUTES } from "../../helpers/constants"
import { registerUserThunkReducer } from './../user/thunks/registerUser';

const [LOGIN] = ACTIVE_ROUTES

const initialState = {
    authRoute: LOGIN,
    failedRegister: true
}

const authTabSlice = createSlice({
    name: 'authRoute',
    initialState,
    reducers: {
        setAuthRoute: (state, action) => {
            state.authRoute = action.payload
        }
    },
    extraReducers: (builder) => {
        registerUserThunkReducer(builder)
    }
})

export const authRouteSelector = (state) => state.authRoute.authRoute
export const failedRegisterSelector = (state) => state.authRoute.failedRegister

export const {setAuthRoute} = authTabSlice.actions

export default authTabSlice.reducer