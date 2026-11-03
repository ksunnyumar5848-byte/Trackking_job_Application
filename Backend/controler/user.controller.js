const User=require('../modal/user_modal')

async function Register(req,res){


   const {name,email,password}=req.body

   let user= await User.create({
        name,
        email,
        password
    })
    
    res.json({
        "message":"user are Register successful ... ",
        "user":user
    })

}




module.exports={Register}