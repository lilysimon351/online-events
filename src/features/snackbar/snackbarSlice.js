
import { createSlice } from '@reduxjs/toolkit';
import { removeMovie } from '../movie/movieSlice';
import { removeMovieThunk } from './../movie/thunks/remove';

const initialState = {
    isOpen: false,
    message: 'def'
}

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        showSnackbar: (state, action) => {
            console.log('state.message', state.message)
            console.log('snack action', action)
            state.isOpen = true
            state.message = action.payload
        },
        hideSnackbar: (state, action) => {
            state.isOpen = false,
            state.message = 'gdfgd'
        },
    },
    extraReducers: {
        [removeMovieThunk.rejected]: (state, action) => {
            console.log("sdfasd")
            console.log("action", action)
          state.isLoggedIn = false;
        },
        [removeMovieThunk.fulfilled]: (state, action) => {
            console.log("sdfasd fulfilled")
            console.log("action", action)
        }
    }
})

export const thunkFunction = (dispatch, getState) => {
    console.log(getState())
}
export const selectSnackbar= (state) => state.snackbar;

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions

export default snackbarSlice.reducer