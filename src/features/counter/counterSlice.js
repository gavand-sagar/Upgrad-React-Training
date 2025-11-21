import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const factApiCall = createAsyncThunk("", () => {
    // return new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res({ data: { fact: "HEY THIS IS DUMMY" } })
    //     }, 6000)
    // })
    return axios.get("https://catfact.ninja/fact")
})

export const factsSlice = createSlice({
    name: 'facts',
    initialState: {
        fact: "",
        factsLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(factApiCall.fulfilled, (state, action) => {
            // set the state
            return {
                fact: action.payload.data.fact,
                factsLoading: false
            }
        })

        builder.addCase(factApiCall.rejected, (state, action) => {
            // set the state
            return {
                fact: "",
                factsLoading: false
            }
        })

        builder.addCase(factApiCall.pending, (state, action) => {
            // set the state
            return {
                fact: "",
                factsLoading: true
            }
        })
    }
})


