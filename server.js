const express=require("express")

const app=express()

app.get("/homepage",(req,res)=>{
    res.send("coding amster is wokring in node js")
})

app.listen(3000,()=>{
    console.log("express is running....");
})