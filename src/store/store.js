import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../features/movie/movieSlice';
import snackbarReducer from '../features/snackbar/snackbarSlice';
import userReducer from '../features/user/userSlice';


export const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        snackbar: snackbarReducer,
    },
    middleware:  getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})