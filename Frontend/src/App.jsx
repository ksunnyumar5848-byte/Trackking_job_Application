
import './App.css'

import { Routes ,Route } from 'react-router-dom'

import Home from './Pages/Home'

import Register from './Pages/Auth/Register'
import Login_user from './Pages/Auth/Login_user'


function App() {
 

  return (
    <>
       {/* <h1 className='bg-green-400 h-15 flex flex-col justify-center items-center'>Welcome to the Frontend </h1> */}

       <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/login' element={<Login_user/>}/>
             <Route path='/register' element={<Register/>}/>         
       </Routes>

    </>
  )
}

export default App
