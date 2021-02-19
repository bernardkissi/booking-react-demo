import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    user: {},
    steps: 1,
    res: 'idle',
    error: null,
}

export const fetchBookings = createAsyncThunk('users/fetchBookings', async (passenger, {rejectWithValue}) => {
    try{
        const { data } = await axios.get('/getBooking', {params:passenger})
        return data
    }catch(err){
        return rejectWithValue(err.response.data)
    }
    
})

export const addDetails = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('/fakeApi/posts')
    return response.posts
})

const userSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        changeStep(state, action) {
            const step  = action.payload
            state.steps = step
        },

        resetState(state, action){
            state.user = {}
            state.steps = 1
            state.error = null
            state.status = 'idle'
        }
    },
    extraReducers: {
        [fetchBookings.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchBookings.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.user = {...action.payload}
            state.steps = state.steps + 1
        },
        [fetchBookings.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = {...action.payload}
        },
        [addDetails.fulfilled]: (state, action) => {
            state.user.details = action.payload
        },
    }
})

export const { changeStep, resetState } = userSlice.actions
export default userSlice.reducer