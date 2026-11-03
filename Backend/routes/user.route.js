const express=require("express")

const route=express.Router()

const {Register,Login}=require('../controler/user.controller.js')

route.post('/register',Register)


route.post('/login',Login)


module.exports=route