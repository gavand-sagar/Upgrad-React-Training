import React, { useState } from 'react'

export default function HideShow() {
    const [isVisible, setIsVisible] = useState(true)

    function handleToggle() {
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <h1>HideShow</h1>

            <button onClick={handleToggle}>Toggle Content {isVisible ? "-" : "+"}</button>


            {
                isVisible && <p>This is some Content</p>
            }

        </div>
    )
}
