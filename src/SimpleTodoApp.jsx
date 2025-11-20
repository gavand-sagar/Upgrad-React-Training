import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function TodoList({ items, onDelete }) {
  return (
    <Paper sx={{ padding: '10px' }}>
      <Typography variant='h4'>Todo Items</Typography>
      {
        items && items.map((x, i) => (
          <fieldset key={i} className='todo-item'>
            <span>{x}</span>
            <Button onClick={() => onDelete(i)} variant='outlined' size='small'>-</Button>
          </fieldset>
        ))
      }
    </Paper>
  )
}

export default function SimpleTodoApp() {
  let [items, setItems] = useState([])
  let [todoText, setTodoText] = useState('')
  let [error, setError] = useState('')

  function handleSubmit(e) {
    e?.preventDefault()
    const trimmedText = todoText.trim()
    
    if (!trimmedText) {
      setError('Todo text cannot be empty')
      return
    }
    
    setItems([...items, trimmedText])
    setTodoText('')
    setError('')
  }

  function handleDelete(index) {
    // API CALL
    if (window.confirm("Do you want to delete?")) {
      let newArray = items.filter((x, i) => i !== index);
      setItems(newArray)
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div>
      <Paper sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant='h5' sx={{ marginBottom: '15px' }}>Todo Form</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            value={todoText}
            onChange={(event) => {
              setTodoText(event.target.value)
              setError('')
            }}
            onKeyPress={handleKeyPress}
            variant='outlined'
            placeholder='Enter todo item'
            error={!!error}
            helperText={error}
            sx={{ marginRight: '10px', marginBottom: '10px' }}
          />
          <br />
          <Button onClick={handleSubmit} variant='contained' type='submit'>
            Add Todo
          </Button>
        </form>
      </Paper>
      <TodoList items={items} onDelete={handleDelete} />
    </div>
  )
}
