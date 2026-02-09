// require('dotenv').config({path: './env'})

import connectDb from "./db/index.js";
import app from "./app.js"
import dotenv from "dotenv";
dotenv.config();


connectDb()
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log("App is running on port ", process.env.PORT)
  })
})
.catch((error)=>{
  console.log("Mongo db connection failed")
})