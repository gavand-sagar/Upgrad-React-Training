import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 10
    }
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "Sagar",
        city:"Mumbai"
    }
})