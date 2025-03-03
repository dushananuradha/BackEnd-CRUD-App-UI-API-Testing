import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbTOConnect = process.env.DATABASE;
const MONGO_URI = process.env.MONGO_URI;

const connectToMongoDB = async () =>{
    try {
        await mongoose
        .connect(`${MONGO_URI}/${dbTOConnect}`)
        .then(() => console.log("Connected successfully to MongoDB Atlas"))
       
    } catch(err) {
        console.error("Connection error:", err);
    }
}

export {mongoose, connectToMongoDB};