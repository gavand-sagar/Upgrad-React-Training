import { Button, CircularProgress, Skeleton } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

function ProductListSkeleton() {
    return <div>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
    </div>
}

export default function ApiCallDemo() {
    let [isLoading, setIsLoading] = useState(false)
    let [products, setProducts] = useState([])
    // this is NOT the place to write "OnPageLoad Logic"

    useEffect(() => {
        // this is THE place to write "OnPageLoad Logic"
        fetchData()
    }, [])

    function fetchData() {
        setIsLoading(true)
        axios.get('https://dummyjson.com/products')
            .then(response => {
                //response.data
                setProducts(response.data.products)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const columns = [
        { field: 'title', headerName: 'Product Name', width: 200 },
        { field: 'brand', headerName: 'Brand', width: 300 },
        { field: 'price', headerName: 'Price', width: 300 },
        { field: 'description', headerName: 'Description', width: 300 },
    ];


    return (
        <div>
            <h1>ApiCallDemo</h1>
            <Button variant='contained' onClick={fetchData}>Load Data</Button>
            <br />
            <br />
            {
                isLoading ?
                    <ProductListSkeleton />
                    :
                    <DataGrid initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5,10,25]} columns={columns} rows={products} />
            }
        </div>
    )
}
