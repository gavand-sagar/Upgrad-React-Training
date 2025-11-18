import React from 'react'

function MyButton({ title, className, onClick }) {

    return <button onClick={onClick} className={className}>{title}</button>
}

export default function CustomAttributes() {
    function handleClick() {
        alert("Clicked....")
    }
    return (
        <div>
            <h1>CustomAttributes</h1>
            <MyButton onClick={handleClick} className={'red'} title={"Click"} />
        </div>
    )
}
