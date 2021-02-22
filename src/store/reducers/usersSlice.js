import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { useSelector } from 'react-redux'

const initialState = {
    user: {},
    steps: 1,
    res: 'idle',
    error: null,
    profile: {}
}

export const fetchBookings = createAsyncThunk('users/fetchBookings', async (passenger, {rejectWithValue}) => {
    try{
        const { data } = await axios.get('/getBooking', {params:passenger })
        return data
    }catch(err){
        return rejectWithValue(err.response.data)
    }
})

export const addDetails = createAsyncThunk('users/addDetails', async (profile, {rejectWithValue}) => {
    try{
    const response = await axios.post('/profiles', {...profile})
      return response.data
    }catch(err){
        return rejectWithValue(err.response.data)
    }
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
        [addDetails.pending]: (state, action) => {
            state.status = 'loading'
        },
        [addDetails.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.profile = action.payload
            state.steps = state.steps + 1
        },
        [addDetails.rejected]: (state, action) => {
            state.status = 'failed'
            // state.error = action.payload
        },
    }
})

export const { changeStep, resetState } = userSlice.actions
export default userSlice.reducer