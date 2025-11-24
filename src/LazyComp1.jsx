import React from 'react'

export default function LazyComp1() {
    const itemsArray = Array.from({ length: 1000 })
    return (
        <div>
            {
                itemsArray.map((x, i) => <p>{i}</p>)
            }
        </div>
    )
}
