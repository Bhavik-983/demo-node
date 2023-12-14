import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
import signupData from "./routes.js"
import router from "./routes.js";
const app = express()

dotenv.config()
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Db connection successfully.");
  })
  .catch(err => {
    console.log("Db connection error.", err);
  });

app.use(express.json())

app.use("/user",signupData)

app.listen("10000",(err) => {
   if(err) return  err
   console.log("Server is running on 10000");
})
// v18.17.1