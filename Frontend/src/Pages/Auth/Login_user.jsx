

import Input from '../../Componets/ui/Input'
import Button from '../../Componets/ui/Button'

import { useForm} from "react-hook-form"
import api from '../../lib/axios.js'


const Login_user = () => {


   
    const {handleSubmit,register}= useForm()

    
    async function userLogin(user){
      try{
       let res= await api.post('/auth/login',user)

       return res.data
      }catch(error){
        console.log(error)
      }
    }


    
    function handledata(data)
    {
      console.log(data)

      userLogin(data)
    }

   

  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-slate-300 via-blue-400 to-slate-300 flex items-center justify-center px-4">

  <div className="w-full max-w-md">

    {/* Logo */}
    <div className="text-center mb-8">
      <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-600 flex items-center justify-center text-4xl shadow-lg">
        💼
      </div>

      <h1 className="text-white text-4xl font-bold mt-4">
        Job Tracker
      </h1>

      <p className="text-slate-300 mt-2">
        Manage & track your job applications easily
      </p>
    </div>

    {/* Card */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">

      <h2 className="text-white text-2xl font-semibold mb-6 text-center">
        Welcome Back 👋
      </h2>

      <form
        className="space-y-5"
        onSubmit={handleSubmit(handledata)}
      >
        <Input
          placeholder="Enter Your Password"
          type="password"
          label="Password"
          register={register}
          name="password"
        />

        <Input
          placeholder="Enter Your Email"
          type="email"
          label="Email"
          register={register}
          name="email"
        />

        <div className="pt-2">
          <Button
            text="Login"
            type="submit"
          />
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-slate-300 text-sm">
          Start tracking your dream job today 🚀
        </p>
      </div>

    </div>

  </div>

</div>
    </>
  )
}

export default Login_user

