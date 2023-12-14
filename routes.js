import express from "express"
import { Signup, getUser } from "./controller.js"
const router = express.Router()

router.post("/signup",Signup)

router.get("/profile-data",getUser)



export default router