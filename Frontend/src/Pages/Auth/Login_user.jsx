
import React from 'react'
import Input from '../../Componets/ui/Input'
import Button from '../../Componets/ui/Button'

const Login_user = () => {
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
               
               placeholder="Enter Your Password "
               type="password"
               label="Password"
              />
              <Input
               
               placeholder="Enter Your name "
               type="name"
               label="Name"
              
              />
            <div className='mt-3'>
               <Button text="Login"/>
            </div>
          </form>
          
       </div>
    </>
  )
}

export default Login_user

