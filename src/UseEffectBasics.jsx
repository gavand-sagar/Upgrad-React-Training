import React, { useEffect, useState } from 'react'

export default function UseEffectBasics() {

    // when we want to execute some logic

    // 1. at a time of creation of component
    // 2. when a perticular stage changes
    // 3. when component gets destroys

    let [count, setCount] = useState(0)

    function inc() {
        setCount(count + 1)
    }
    function dec() {
        setCount(count - 1)
    }

    // watch function
    useEffect(()=>{
        console.log(count)
        // this fuction will execute whenever {count} changes
    },[count])

    return (
        <div>
            <h1>Use Effect Basics</h1>
            <p>count : {count}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}
