import { configureStore } from '@reduxjs/toolkit'
import { counterSlice, userSlice } from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer
    },
})