import React from 'react'

export default function EventDemo() {
 
  function handleClick(event){
    console.log("working.. ")
  }
  
  function handleMouseEnter(event){
    console.log("Mouse Enter")
  }

  function handleOnChange(event){
    console.log("Value Changed", event.target.value)
  }

  return (
    <div>
        <input type='date' onChange={handleOnChange}/>
        <button onClick={handleClick}>Click me</button>
        <button onMouseEnter={handleMouseEnter}>Hover</button>
    </div>
  )
}
