import mongoose from "mongoose";
const Schema = mongoose.Schema
const UserSchema = new Schema({
    username:{
        type:String
    },
    email:{
        type:String
    }
})
export const UserModel = mongoose.model("user",UserSchema)