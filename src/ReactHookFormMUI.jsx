import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form'

export default function ReactHookFormMUI() {
  const { handleSubmit, register, formState: { errors } } = useForm();

  function mySubmit(formData) {
    console.log(formData)
  }

  return (
    <div>
      <h1>React Hook Form</h1>
      <TextField variant='outlined' error={errors.username} helperText={errors.username?.message} {...register("username", {
        required: {
          value: true,
          message: "Username is required"
        },
        minLength: {
          value: 3,
          message: "At lease 3 letters"
        },
        maxLength: {
          value: 50,
          message: "Should not greater than 50 letters"
        }
      })} type='text' label='Username' />
      <br />
      <br />
      <TextField variant='outlined' error={errors.city} helperText={errors.city?.message} {...register("city", {
        required: {
          value: true,
          message: "City is required"
        },
        minLength: {
          value: 3,
          message: "At lease 3 letters"
        },
        maxLength: {
          value: 50,
          message: "Should not greater than 20 letters"
        }
      })} type='text' label='City' />
      <br />
      <br />
      <TextField variant='outlined' error={errors.email} helperText={errors.email?.message}  {...register("email", {
        required: {
          value: true,
          message: "Email is required"
        },
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,// email regex,
          message: 'Email should be in proper format'
        }
      })} type='email' label='Email' />
      <br />
      <br />
      <Button variant='contained' onClick={handleSubmit(mySubmit)}>Submit</Button>
    </div>
  )
}
