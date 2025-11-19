import React, { useRef, useState } from 'react'

export default function UseRefDemo() {
    let [count1, setCount1] = useState(0) // we create state if we want UI to be re-rendered
    let [count2, setCount2] = useState(0) // we create state if we want UI to be re-rendered

    let total = useRef(0); // variables that changes but do not cause UI - rerender

    function handleChange1() {
        setCount1(count1 + 1)
        total.current = total.current + 1;
    }

    function handleChange2() {
       
        total.current = total.current + 1;
    }
    return (
        <div>
            <h1>UseRefDemo</h1>
            Totol Re-Renders: {total.current}
            <hr />
            <div>count : {count1}</div>
            <button onClick={handleChange1}>Change State 1</button>

            <hr />
            <div>count : {count2}</div>
            <button onClick={handleChange2}>Change State 2</button>
        </div>
    )
}
