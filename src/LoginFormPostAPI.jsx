import { Box, Button, TextField, Typography, Alert, CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function LoginFormPostAPI() {
    let { handleSubmit, register, formState: { errors } } = useForm()
    let navigate = useNavigate()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function login(formData) {
        setError('')
        setLoading(true)

        try {
            const response = await axios.post(
                'https://dummyjson.com/auth/login', formData
            )

            navigate("/ApiCallDemo")

        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please check your credentials.')
            console.error('Login error:', err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box sx={{ maxWidth: 400, margin: '50px auto', padding: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Login
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <form onSubmit={handleSubmit(login)}>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        {...register("username", {
                            required: "Username is required"
                        })}
                        label="Username"
                        type="text"
                        fullWidth
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        {...register("password", {
                            required: "Password is required"
                        })}
                        label="Password"
                        type="password"
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </Box>
                <Box>
                    {
                        loading ? <CircularProgress></CircularProgress> : <Button
                            type="submit"
                            variant="contained"
                        >
                            Login
                        </Button>
                    }
                </Box>
            </form>
        </Box>
    )
}
