import React from 'react'
import Input from '../../Componets/ui/Input'
import Button from '../../Componets/ui/Button'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const Register = () => {

   const {register,handleSubmit}=useForm()

   function Handldeform(data)
   {
    console.log(data)
   }
  
  return (
    <>
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-indigo-100 flex flex-col justify-center items-center px-4">

  <div className="bg-white w-full max-w-lg p-8 rounded-3xl shadow-2xl border border-gray-100">

    <div className="text-center mb-8">
      <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-4xl mx-auto shadow-lg">
        💼
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mt-4">
        JOB Application Tracker
      </h1>

      <p className="text-gray-500 mt-3 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Beatae illum exercitationem eum natus quod nobis unde
        expedita, maxime excepturi.
      </p>
    </div>

    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(Handldeform)}
    >
      <Input
        placeholder="Enter Your name"
        type="name"
        label="Name"
        register={register}
        name="name"
      />

      <Input
        placeholder="Enter your email"
        type="email"
        label="Email"
        register={register}
        name="email"
      />

      <Input
        placeholder="Enter Your Password"
        type="password"
        label="Password"
        register={register}
        name="password"
      />

      <div className="mt-4 flex flex-col gap-4">
        <Button
          text="Register"
          type="submit"
        />

        <Link
          to={"/login"}
          className="text-center text-blue-600 hover:text-blue-700 font-medium transition"
        >
          Already have an account? Login
        </Link>
      </div>
    </form>

  </div>

</div>
    </>
  )
}

export default Register
