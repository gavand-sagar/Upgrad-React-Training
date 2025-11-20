import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    // need to retrive id from route
    let { productid } = useParams()
    return (
        <div>ProductDetails {productid}</div>
    )
}
