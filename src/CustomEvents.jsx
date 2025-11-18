import React, { useState } from 'react'


function Counter({ onChange }) {
    let [value, setValue] = useState(0)
    function inc() {
        setValue(value + 1)
        onChange(value + 1)
    }
    function dec() {
        setValue(value - 1)
        onChange(value + 1)
    }
    return (
        <div>
            <button onClick={dec}>-</button>
            <span> {value} </span>
            <button onClick={inc}>+</button>
        </div>
    )
}

export default function CustomEvents() {
    let [parentValue,setParentValue] = useState(0)
    
    function handleChildChange(event){
        setParentValue(event)
    }
    return (
        <div>
            <h1>CustomEvents</h1>
            Current Value = {parentValue}
            <hr/>
            <Counter onChange={handleChildChange}/>
        </div>
    )
}
