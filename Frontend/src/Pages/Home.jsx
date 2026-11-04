import React from 'react'

import { useEffect } from 'react'
import {cheakHealth} from '../services/health.services.js'


const Home = () => {


    async function Health(){
       const res= await  cheakHealth()
       console.log(res)
    }

    useEffect(function(){
       Health()
    },[])


  return (
    <>
      <h1>Welcome to Home Page </h1>
    </>
  )
}

export default Home
