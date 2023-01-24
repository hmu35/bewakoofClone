const express=require("express")
const { Productmodel } = require("../modal/productModal")
const {adminAuthenticate}=require("../middleware/admin")
const adminproduct=express.Router()



adminproduct.get("/allproducts",async(req,res)=>
{
    try {
        const products=await Productmodel.find()
        res.send(products)
    } catch (error) {
        res.send("CANNOT GET ALL PRODUCT DATA")
    }
  
})

// adminproduct.use(adminAuthenticate)

adminproduct.post("/create",async(req,res)=>
{
    body=req.body
    // console.log(body)

    try {
        const newproduct=new Productmodel(body)
        await newproduct.save()
        
        res.json({message:"Prooduct has been added"})
    } catch (error) {
        res.json({mesage:"Cannot Create new Product"})
    }

   
})


adminproduct.patch("/edit/:id", async(req,res)=>{
    const ID=req.params.id
    const body=req.body
    // console.log(ID)

    try {
        await Productmodel.findByIdAndUpdate({_id:ID},body)
        res.json({message:"Product has been update"})
    } catch (error) {
        res.json({message:"cannot update the product"})
    }
  
})


adminproduct.delete("/delete/:id", async(req,res)=>
{
    const Id=req.params.id
    console.log(Id)

    try {
        await Productmodel.findByIdAndDelete({_id:Id})
        res.json({message:`Product has been deleted`})
    } catch (error) {
        res.json( {message:"cannot delete "})
    }
    
})
module.exports={
    adminproduct
}