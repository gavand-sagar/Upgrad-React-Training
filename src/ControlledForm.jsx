import React, { useState } from 'react'

export default function ControlledForm() {
    let [username, setUsername] = useState('')
    let [dob, setDOB] = useState('')
    let [agree, setAgree] = useState(false)

    function handleSubmit() {
        console.log({
            username,
            dob,
            agree
        })
    }
    return (
        <div>
            <h1>Controlled Form</h1>
            <input onChange={(event) => { setUsername(event.target.value) }} placeholder='Username' />
            {!username && <label>Username is Required.</label>}
            <br /><br />
            <input onChange={(event) => { setDOB(event.target.value) }} type='date' /><br /><br />
            <label> I Agree
            </label>
            <input type='checkbox' onChange={(event) => { setAgree(event.target.checked) }} /><br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
