  const express= require("express")
  
  const app=express()

  app.get('/api/Health',(req,res)=>{
     return res.json({
        "status":"ok"
     })
  })

  app.listen(3001,(req,res)=>{
    console.log("server are the start this point number 💘💘💘🛬🛬 ")
  })