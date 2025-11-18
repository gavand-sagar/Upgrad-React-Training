import React, { useState } from 'react'

export default function ColorChangeWithState() {
  
  let [myClassName,setMyClassName] = useState('red')

  function handleClick(){
    if(myClassName == 'red'){
        setMyClassName('green')
    }else{
        setMyClassName('red')
    }
  }

  return (
    <div>
        <h3>Color Change With State</h3>
        <button onClick={handleClick}>Toggle Color</button>
        <p className={myClassName}>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Praesentium, voluptatem illo! Aliquam, 
            at inventore et quam dolores illo magnam dicta.
        </p>
    </div>
  )
}
