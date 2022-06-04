import { createSlice, current } from "@reduxjs/toolkit";
import { changeUserInfoThunkReducer } from "./thunks/changeUserInfo";
import { getUsersThunkReducer } from "./thunks/getUsers";
import { registerUserThunkReducer } from "./thunks/registerUser";

const initialState = {
    currentUser: localStorage.getItem('user') || false,
    isAdmin: localStorage.getItem('isAdmin') || false,
    status: null,
    error: null,
    allUsers: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.allUsers = action.payload
        },
        logInUser: (state, action) => {
            state.currentUser = action.payload.username;
            localStorage.setItem('user', state.currentUser)
            if( state.currentUser === 'admin' ) {
                state.isAdmin = true
                localStorage.setItem('isAdmin', true)
            }
        },
        logOutUser: (state, action) => {
            state.currentUser = null
            state.isAdmin = false
            localStorage.removeItem('user')
            localStorage.removeItem('isAdmin')
        },
        registerUser: (state, action) => {
            state.allUsers.push(action.payload)       
        },
        changeUserInfo: (state, action) => {
            state.allUsers = state.allUsers.map( item => {
                if( item.id === action.payload.id) {
                    item = action.payload
                }
                return item
            })
        }
    },
    extraReducers: (builder) => {
        getUsersThunkReducer(builder)
        registerUserThunkReducer(builder)
        changeUserInfoThunkReducer(builder)
    }
})

export const selectCurrentUser = (state) => state.user.currentUser
export const selectAllUsers = (state) => state.user.allUsers
export const selectIsAdmin = (state) => state.user.isAdmin;
export const selectStatus = (state) => state.user.status;
export const selectError = (state) => state.user.error;

export const {registerUser, logInUser, logOutUser, getUsers, changeUserInfo} = userSlice.actions

export default userSlice.reducer