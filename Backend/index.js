const express=require("express")
require('dotenv').config();
const app=express()

const cors=require('cors')



const { connectDB}=require('./config/mongodb.js')

const UserRouter=require('./routes/user.route.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

connectDB()



app.use(cors())



app.get('/api/health',(req,res)=>{
    res.json({
        "status":"ok"
    })
})


app.use('/api/Auth',UserRouter)

//inside the mongoose create the user 





app.listen(process.env.PORT_NUMBER,()=>{
    console.log("server are the strat 💘💘💘💘💘")
})
