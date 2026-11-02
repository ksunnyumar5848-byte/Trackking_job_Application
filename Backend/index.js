const express=require("express")
require('dotenv').config();
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/api/Health',(req,res)=>{
    res.json({
        "status":"ok"
    })
})

app.listen(process.env.PORT_NUMBER,()=>{
    console.log("server are the strat 💘💘💘💘💘")
})
