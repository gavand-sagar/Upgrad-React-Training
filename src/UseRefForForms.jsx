import React, { useRef } from 'react'
export default function UseRefForForms() {
  const usernameRef = useRef()
  const dobRef = useRef()
  const agreeRef = useRef()

  function handleSubmit(){
     const username = usernameRef.current.value
     const dob = dobRef.current.value
     const agree = agreeRef.current.checked
     console.log({
        username,
        dob,
        agree
     })
     
  }
  return (
    <div>
        <h1>UseRef For Forms</h1>
        <input ref={usernameRef} placeholder='Username'/><br/><br/>
        <input ref={dobRef} type='date'/><br/><br/>
        <label> I Agree
        </label>
        <input ref={agreeRef} type='checkbox'/><br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
