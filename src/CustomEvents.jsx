import React, { useEffect, useState } from 'react'


function Counter({ onChange, start, limit }) {
    let [value, setValue] = useState(start)
    function inc() {
        if (value < limit) {
            setValue(value + 1)
        }
    }

    function dec() {
        if (value > start) {
            setValue(value - 1)
        }
    }

    useEffect(() => {
        if (typeof (onChange) == 'function')
            onChange(value)
    }, [value])

    return (
        <div>
            <button onClick={dec}>-</button>
            <span> {value} </span>
            <button onClick={inc}>+</button>
        </div>
    )
}

export default function CustomEvents() {
    let [parentValue, setParentValue] = useState(0)

    function handleChildChange(event) {
        setParentValue(event)
    }
    return (
        <div>
            <h1>CustomEvents</h1>
            Current Value = {parentValue}
            <hr />
            <Counter start={0} limit={10} onChange={handleChildChange} />
        </div>
    )
}
