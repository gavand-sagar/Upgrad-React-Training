import React, { useState } from 'react'
import { capitalize } from './tdd-demo'

export default function GreetingComponent({ message }) {
    return (
        <div>
            <h1 data-testid='heading-tag'>{message}</h1>
        </div>
    )
}

export function Capitalize({ text }) {
    return (
        <div data-testid="capitalText">
            {capitalize(text)}
        </div>
    )
}


export function CounterForTest() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button data-testid="dec-btn" onClick={() => setCount(count - 1)}>-</button>
            <span data-testid="out-span">{count}</span>
            <button data-testid="inc-btn" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}