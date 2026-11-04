import React from 'react'
import Input from '../../Componets/ui/Input'
import Button from '../../Componets/ui/Button'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
        <div className=' flex flex-col  mx-auto h-screen bg-green-100 justify-center items-center gap-2 '>
                 <h1 className='text-4xl font-bold m-2'>JOB Application Tracker </h1>
                <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illum  exercitationem eum <br />
                 natus quod 
                 nobis unde expedita, maxime excepturi, non adipisci praesentium ab volupt
                 </p>
      
                  <form className='w-md'>
                    <Input
                     
                     placeholder="Enter Your name "
                     type="name"
                     label="Name"            
                    />
                    
                    <Input 
                     placeholder="Enter your email"
                     type='email'
                     label="Email"
                    />

                    <Input
                     
                     placeholder="Enter Your Password "
                     type="password"
                     label="Password"
                    />
                
                  
                <div className='mt-3 flex flex-col gap-3'>
                     <Button text="Register"/>
                     <Link to={"/login"}>user all ready create a Account..! Login ? .. </Link>
                  </div>
                </form>
                
         </div>
    </>
  )
}

export default Register
