import React from 'react'

const Input = ({label,type,placeholder}) => {
  
    

  return (
     <>
        <div className='flex flex-col gap-2 '>
                  <label 
                   className='font-semibold text-lg'>
                       {label}
                  </label>
                   <input  className='border px-2 py-2 rounded-md'
                      type={type}
                      placeholder={placeholder}
                   />
                   
        </div>
     </>
  )
}

export default Input