// require('dotenv').config({path: './env'})

import connectDb from "./db/index.js";
import app from "./app.js"
import dotenv from "dotenv";
dotenv.config();

// Connect to the database and start the server
2
// connectDb() is the function that establishes a connection to the MongoDB database using Mongoose. It returns a promise that resolves when the connection is successful and rejects if there is an error.

connectDb()
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log("App is running on port ", process.env.PORT)
  })
})
.catch((error)=>{
  console.log("Mongo db connection failed")
})