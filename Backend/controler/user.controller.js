const User=require('../modal/user_modal')
const bcrypt=require('bcrypt')

const jwt=require("jsonwebtoken")


async function Register(req,res){

     try{
            const {name,email,password}=req.body


            let hashpassword = await bcrypt.hash(password,10)

            let user= await User.create({
                name,
                email,
                password:hashpassword
            })
            
            res.json({
                "message":"user are Register successful ... ",
                "user":user
            })
     }catch(error){

      console.log(error)

    }
   

}
async function Login(req,res){

    const {email,password}=req.body

    const user=await User.findOne({email})
    

    if(!user){
        return res.status(400).json({
            message:"Invalid user email and password "
        })
    }


    let ismatched=await bcrypt.compare(password,user.password)

    if(!ismatched){
        return res.status(400).json({message:"user email and password are the invalid "})
    }


   let token=await jwt.sign({
        _id:user._id,
        email:user.email,
        name:user.name
    },process.env.JWT_SECRAT)

    res.json({
        "message":"User are login successful...😉😉😉🙃",
        "user":{
            "_id":user._id,
            "name":user.name,
            "email":user.email
        },
        token
    })


}



module.exports={Register,Login}