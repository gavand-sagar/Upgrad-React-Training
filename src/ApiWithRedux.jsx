import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { factApiCall } from './features/counter/counterSlice'

export default function ApiWithRedux() {
    const dispatch = useDispatch()
    function handleCallAPI() {
        //call api and store value in redux
        dispatch(factApiCall())
    }
    const { fact, factsLoading } = useSelector(store => store.facts)
    return (
        <div>
            <h1>Api With Redux</h1>
            <button onClick={handleCallAPI}>Call  API</button>
            <p>{
                factsLoading ?
                    "Loading..." :
                    fact
            }</p>
        </div>
    )
}
