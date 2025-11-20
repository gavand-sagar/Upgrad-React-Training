import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CircularProgress,
    Skeleton,
    Chip,
    Grid,
    Rating,
    Alert
} from '@mui/material'

export default function ProductDetails() {
    const { productid } = useParams()
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (productid) {
            fetchProductDetails()
        }
    }, [productid])

    function fetchProductDetails() {
        setIsLoading(true)
        setError(null)
        axios.get(`https://dummyjson.com/products/${productid}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(err => {
                setError(err.response?.data?.message || 'Failed to fetch product details')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    if (isLoading) {
        return (
            <Box sx={{ padding: 3 }}>
                <Skeleton variant="text" sx={{ fontSize: '2rem', width: '60%' }} />
                <Skeleton variant="rectangular" height={400} sx={{ marginTop: 2, marginBottom: 2 }} />
                <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '80%' }} />
            </Box>
        )
    }

    if (error) {
        return (
            <Box sx={{ padding: 3 }}>
                <Alert severity="error">{error}</Alert>
            </Box>
        )
    }

    if (!product) {
        return (
            <Box sx={{ padding: 3 }}>
                <Typography variant="h5">No product found</Typography>
            </Box>
        )
    }

    return (
        <Box sx={{ padding: 3, maxWidth: 1200, margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom>
                Product Details
            </Typography>

            <Card sx={{ marginTop: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <CardContent>
                            <Typography variant="h4" component="h1" gutterBottom>
                                {product.title}
                            </Typography>

                            <img src={product.thumbnail}/>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginY: 2 }}>
                                <Rating readOnly value={product.rating || 0} />
                                <Typography variant="body2" color="text.secondary">
                                    ({product.rating || 0} / 5.0)
                                </Typography>
                            </Box>

                            <Typography variant="h5" color="primary" gutterBottom>
                                ${product.price}
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ marginTop: 2 }}>
                                {product.description}
                            </Typography>

                            <Box sx={{ marginTop: 3 }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Brand: <strong>{product.brand || 'N/A'}</strong>
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Category: <strong>{product.category || 'N/A'}</strong>
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Stock: <strong>{product.stock || 0} units</strong>
                                </Typography>
                            </Box>

                            {
                                product.images.map(x=><img height={'100px'} src={x}/>)
                            }

                            <hr/>

                            {
                                product.reviews.map(x=><p><Rating readOnly value={x.rating}/> {x.comment} - {x.reviewerName}</p>)
                            }
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}
