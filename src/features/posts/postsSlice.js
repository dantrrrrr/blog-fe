import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosRequest } from "../../requests/request";

const url = "/api/posts";
const initialState = {

    posts: [],
    status: 'idle',
    error: null

}
export const fetchPost = createAsyncThunk(url, async () => {

    const response = await AxiosRequest.get(url);
    return [...response.data]


})
export const newPost = createAsyncThunk(url, async (initialPost) => {
    try {
        const response = await axios.post(url, initialPost);
        return response.data;

    } catch (error) {
        return error;
    }


})
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPost.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts = action.payload;
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
        // .addCase(newPost.fulfilled,async()=>{

        // })
    }
})
export const { postAdded } = postsSlice.actions; //action type  :same name with function

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const getPostById = (state, postId) => (
    state.posts.posts.find(post => post._id === postId)
);
export const getPostBySlug = (state, postSlug) => (
    state.posts.posts.find(post => post.slug === postSlug)
);
export const getPostByCat = (state, cat) => (
    cat !== undefined
        ? state.posts.posts.filter(post => post.categories.includes(cat))
        : state.posts.posts
);

export default postsSlice.reducer;