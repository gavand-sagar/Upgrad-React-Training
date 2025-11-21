import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { globalIncrement, globalDecrement } from './features/counter/counterSlice'

export default function ReduxDataChange() {
    const { count } = useSelector(store => store.counter)
    const dispatch = useDispatch();
    function inc() {
        // change data from Redux
        // console.log(globalIncrement())
        // dispatch(globalIncrement())
        dispatch(globalDecrement())
        // dispatch({ type: 'counter/globalIncrement'})
    }
    return (
        <div>
            <h1>ReduxDataChange</h1>
            <button onClick={inc}>INC</button>
            <p>Redux Count Value: {count}</p>
        </div>
    )
}
