import mongoose from "mongoose"
mongoose.set('strictQuery', true);
export const connectDB = async()=>{
    
    const {connection}= await mongoose.connect(process.env.MONGO_URl);
    console.log(`Database is connect with ${connection.host}`)
}
