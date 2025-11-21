import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 10
    },
    reducers: {
        // THIS IS THE ONLY PLACE FROM WHERE {count} WILL CHANGE
        globalIncrement: (state, action) => {
            // reducer function that changes the data
            return {
                count: state.count + 1
            }
        },
        globalDecrement: (state, action) => {
            return {
                count: state.count - 1
            }
        }
    }
})

// action that tells us which reducer to execute
export const { globalIncrement, globalDecrement } = counterSlice.actions

// NOTE: any change in state/data will only from reducer functions
//
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "Sagar",
        city: "Mumbai"
    }
})