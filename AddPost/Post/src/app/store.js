import { configureStore} from "@reduxjs/toolkit"
import postsReducer from '../features/posts/postSlice'
import userReducer from '../features/users/userSlice'
import userSlice from "../features/users/userSlice"


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: userSlice
    }
})