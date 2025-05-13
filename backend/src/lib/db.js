import mongoose from "mongoose";

export const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected`);
    }catch(err){
        console.log("Mongodb connection error:",error);
    }
};
