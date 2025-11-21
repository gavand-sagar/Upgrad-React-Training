import React, { createContext, useContext, useState } from 'react'

let MyContext = createContext({ items: [], handleDelete: () => { } })

function Item({ text }) {
    let { handleDelete } = useContext(MyContext)
    return (
        <fieldset>{text} <button onClick={handleDelete}>delete</button></fieldset>
    )
}

function ItemsList() {
    let { items } = useContext(MyContext)
    return (
        <div>
            {
                items?.map(x => <Item text={x} />)
            }
        </div>
    )
}

export default function ContextAPIDataChangeDemo() {
    let [items, setItems] = useState(["apple", "mango", "banana"])
    function handleDelete() {
        let newArray = [...items]
        newArray.pop()
        setItems(newArray)
    }
    return (
        <MyContext value={{ items: items, handleDelete: handleDelete }}>
            <h1>ContextAPIDataChangeDemo</h1>
            <p>DATA IS HERE</p>
            <ItemsList />
        </MyContext>
    )
}
