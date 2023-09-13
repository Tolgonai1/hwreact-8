import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {

        const resp = await axios.get('https://dummyjson.com/posts?limit=15')
        return resp.data
    }
)
export const editPost = createAsyncThunk(
    'posts/editPost',
    async({id,title,body}) =>{
        console.log(id)
        const resp = await axios.put(`https://dummyjson.com/posts/${id}` , {
            title,body
        })
        return resp.data
    }
)
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        error: null,
        post: {}
    },
    reducer: {},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchPosts.pending,(state,action)=>{
                state.posts= []
                state.loading=true
                state.error = null
            })
            .addCase(fetchPosts.fulfilled, (state,action) =>{
                state.loading = false
                state.posts = action.payload.posts
            })
            .addCase(fetchPosts.rejected,(state,action)=>{
                state.loading = false
                state.error= action.error.message
            })
            .addCase(editPost.fulfilled, (state,action) => {
                console.log(action)
                state.post = action.payload.posts
                state.posts.find(p=>p.id===action.payload.id).title = action.payload.title
                state.posts.find(post=>post.id===action.payload.id).body = action.payload.body
            })
    }
})
export const postsReducers = postsSlice.reducer