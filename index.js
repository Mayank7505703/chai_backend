require('dotenv').config()
const express= require("express")
const app= express();
app.get("/",(req,res)=>{
  res.send("Server get a request on prot 3000")
})
app.get("/twitter",(req,res)=>{
  res.send("Twitter is opened")
  console.log("Request on twitter")
})
app.get("/login",(req,res)=>{
  res.send(
    '<h1>Please login at chai or code</h1>'
  )
})
app.get("/youtube",(req,res)=>{
  console.log("Youtube get a request")
  res.send('<h2>youtube is opened</h2>')
})
const port=3000;
app.listen(process.env.port,()=>{
  console.log(`app is listening on port ${process.env.port}`)
})