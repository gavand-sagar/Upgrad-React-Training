import React, { useState } from 'react'

function MyButton() {
    let [btnClass, setBtnClass] = useState('btn-yellow')
    function handleClick() {
        setBtnClass(btnClass == 'btn-yellow' ? 'btn-orange' : 'btn-yellow')
    }
    return (<button onClick={handleClick} className={`btn ${btnClass}`}>Home</button>)
}


export default function ToggleButton() {
    return (
        <div>
            <h1>ToggleButton</h1>
            <MyButton className='btn-orange'/>
        </div>
    )
}
