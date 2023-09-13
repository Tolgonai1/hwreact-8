import {configureStore} from "@reduxjs/toolkit";
import {postsReducers} from "./postsSlice.js";

export const store = configureStore({
    reducer:{
        posts: postsReducers
    }
})