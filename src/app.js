import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app= express();

// cors ek middleware hai jo cross-origin requests ko handle karta hai. Iska use tab hota hai jab aapka frontend aur backend alag-alag domains ya ports par host ho rahe hote hain. CORS (Cross-Origin Resource Sharing) ek security feature hai jo browsers mein implement kiya gaya hai, jisse ek web page apne origin ke alawa kisi aur origin se resources ko access karne ki permission de sakta hai.

app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}))

// express.json() ek built-in middleware hai jo incoming requests ke body ko JSON format mein parse karta hai. Iska use tab hota hai jab aapka frontend apne requests ke body mein JSON data bhej raha hota hai. Ye middleware request body ko JavaScript object mein convert kar deta hai, jisse aap apne route handlers mein easily access kar sakte hain.
app.use(express.json({limit:"16kb"}))
export default app;

app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public"))  

app.use(cookieParser())

