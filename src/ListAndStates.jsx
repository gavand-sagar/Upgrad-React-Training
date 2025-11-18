import React, { useState } from 'react'

export default function ListAndStates() {
    let [items, setItems] = useState(["apple", "apple", "apple"])
    function handleAddApple() {
        // let newItems = [...items]
        // newItems.push("apple")
        // setItems(newItems)


        setItems([...items,"apple"])


        // setItems(items.concat(["apple"]))


        // let newItems = items.map(x=>x)
        // newItems.push("apple")
        // setItems(newItems)


        // let newItems = items.filter(x => true)
        // newItems.push("apple")
        // setItems(newItems)


        // react renders UI when state changes
        // react render only when state changes
        // if prev and current state is same then NOT
    }
    return (
        <div>
            <h1>ListAndStates</h1>
            <button onClick={handleAddApple}>Add Apple</button>
            <hr />
            {
                items.map(x => <p>{x}</p>)
            }
        </div>
    )
}
