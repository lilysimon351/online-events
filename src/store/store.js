import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../features/movie/movieSlice';
import userReducer from '../features/user/userSlice';
import authTabReducer from '../features/authTab/authTabSlice';


export const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        authRoute: authTabReducer,
    },
    middleware:  getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})