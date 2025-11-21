import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext({ username: '' })

function Username() {
  // I can access context here
  let { username } = useContext(MyContext);
  return (<fieldset>{username}</fieldset>)
}

function UserDetails() {
  // I can access context here
  let { username } = useContext(MyContext);
  return (
    <fieldset>
      from Details:{username}
      <hr />
      <Username />
    </fieldset>)
}

export default function ContextAPI() {
  let [username, setUsername] = useState("Sagar")  // Data is here
  function handleChange() {
    setUsername("Superman")
  }
  return (
    <MyContext value={{ username: username }}>
      <h1>Context API</h1>
      <button onClick={handleChange}>Change value</button>
      <UserDetails />
    </MyContext>
  )
}
