import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// Code which will not work in react (not ideal react code)
// export default function StateDemo() {
//   // normal variable
//   // react don't re-render the UI if normal variable changes
//   let value = 1;
//   function handleClick(){
//     value = value + 1;
//     console.log(value)
//   }
//   return (
//     <div>
//         <h1>StateDemo</h1>
//         <p>{value}</p>
//         <button onClick={handleClick}>Increment</button>
//     </div>
//   )
// }


/// ideal react code
export default function StateDemo() {

  // state variable
  // react does re-render the UI if state variable changes
  let [value, setValue] = useState(0)

  function handleClick() {
    let newValue = value + 1
    setValue(newValue) // this is the way to change the value
  }

  let { username,city } = useSelector(store => store.user)

  return (
    <div>
      <h1>StateDemo {username} {city}</h1>
      <p>{value}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}