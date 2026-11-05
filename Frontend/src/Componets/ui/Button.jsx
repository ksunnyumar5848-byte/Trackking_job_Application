import React from 'react'

const Button = ({text,type}) => {
  return (
    <>
     <button className='bg-orange-400 border rounded-md px-4 py-2  hover:bg-amber-300 cursor-pointer shadow text-white font-serif w-full'
      type={type}
     >{text} </button>
    </>
  )
}

export default Button
