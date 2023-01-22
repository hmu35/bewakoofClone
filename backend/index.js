const express=require("express")
const app=express()
require("dotenv").config()
const {connection}=require("./config/db")
const {productRouter}=require("./route/productsRoutes")
const {userRouter}=require("./route/userRoutes")
const {adminproduct}=require("./route/adminProductRoutes")
const {adminRouter}=require("./route/admintRoutes")
const cors=require("cors")
app.use(express.json())
app.use(cors())
app.use("/admin",adminRouter)
app.use("/adminproduct",adminproduct)
app.use("/product",productRouter)
app.use("/user",userRouter)
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        console.log("Something went wrong")
    }
    console.log(`Server is running on port no ${process.env.port}`)
})