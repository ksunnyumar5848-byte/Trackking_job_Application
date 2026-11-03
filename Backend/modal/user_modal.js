const mongoose=require("mongoose")




let userSchema=mongoose.Schema({
    "name":{
        type:String,
        require:true,
        minLength:3
    },
    "email":{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
},{
    timestamp:true
})

let User=mongoose.model("User",userSchema)

module.exports=User