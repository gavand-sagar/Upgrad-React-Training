import React from 'react'
import { useForm } from 'react-hook-form'

export default function ReactHookForm() {
  const { handleSubmit, register, formState: { errors } } = useForm();

  function mySubmit(formData) {
    console.log(formData)
  }

  return (
    <div>
      <h1>React Hook Form</h1>
      <input className={errors.username ? 'error' : ''} {...register("username", {
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
      })} type='text' placeholder='Username' />
      <br />
      <label>{errors.username?.message}</label>
      <br />
      <input className={errors.city ? 'error' : ''} {...register("city", {
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
      })} type='text' placeholder='City' />
      <br />
      <label>{errors.city?.message}</label>
      <br />
      <input className={errors.email ? 'error' : ''}  {...register("email", {
        required: {
          value: true,
          message: "Email is required"
        },
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,// email regex,
          message: 'Email should be in proper format'
        }
      })} type='text' placeholder='Email' />
      <br />
      <label>{errors.email?.message}</label>
      <br />
      <button onClick={handleSubmit(mySubmit)}>Submit</button>
    </div>
  )
}
