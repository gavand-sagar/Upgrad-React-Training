import React, { useState } from 'react'

export default function ControlledForm() {
    // let [username, setUsername] = useState('')
    // let [dob, setDOB] = useState('')
    // let [agree, setAgree] = useState(false)

    let [form, setForm] = useState({
        username: '',
        dob: '',
        agree: false
    })

    function handleSubmit() {
        console.log(form)
    }
    return (
        <div>
            <h1>Controlled Form</h1>
            <input onChange={(event) => { setForm({ ...form, username: event.target.value }) }} placeholder='Username' />
            {!form.username && <label>Username is Required.</label>}
            <br /><br />
            <input onChange={(event) => { setForm({ ...form, dob: event.target.value }) }} type='date' /><br /><br />
            <label> I Agree
            </label>
            <input type='checkbox' onChange={(event) => { setForm({ ...form, agree: event.target.checked }) }} /><br />
            <button disabled={!form.agree} onClick={handleSubmit}>Submit</button>
        </div>
    )
}
