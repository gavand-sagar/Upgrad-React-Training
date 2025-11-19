import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function TodoList({ items, onDelete }) {
  return (<Paper sx={{ padding: '10px' }}>
    <Typography variant='h4'>Todo Items</Typography>
    {
      items && items.map((x, i) => <fieldset className='todo-item'><span>{x}</span><button onClick={() => onDelete(i)}>-</button></fieldset>)
    }
  </Paper>)
}

export default function SimpleTodoApp() {
  let [items, setItems] = useState([])
  let [todoText, setTodoText] = useState('')
  function handleSubmit() {
    setItems([...items, todoText])
  }
  function handleDelete(index) {
    // API CALL
    if (window.confirm("Do you want to delete?")) {
      let newArray = items.filter((x, i) => i != index);
      setItems(newArray)
    }

  }
  return (
    <div>
      <div sx={{ padding: '10px' }}>
        <h2>Todo Form</h2>
        <input onChange={(event) => setTodoText(event.target.value)} variant='outlined' />
        <button onClick={handleSubmit} variant='contained'>+</button>
      </div>
      <hr />
      <TodoList items={items} onDelete={handleDelete} />
    </div>
  )
}
