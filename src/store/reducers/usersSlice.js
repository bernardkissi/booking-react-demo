import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    user: {name:'owiredu', flight:'KLMOP657'},
    steps: 1,
    status: 'idle',
    error: null,
}

export const fetchBookings = createAsyncThunk('users/fetchBookings', async () => {
    const { data } = await axios.get('/getBooking', {params:{lastName:'owiredu', flightNumber:'KLMOP5707'}})
    return data.booking
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
            state.user = action.payload
        },
        [fetchBookings.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [addDetails.fulfilled]: (state, action) => {
            state.user.details = action.payload
        },
    }
})

export const { changeStep, resetState } = userSlice.actions
export default userSlice.reducer