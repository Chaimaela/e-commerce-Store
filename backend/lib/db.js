import mongoose from "mongoose";

export const  connectDB = async()=>{
    try {
      const DB =  await mongoose.connect(process.env.MONGO_URI )
      console.log(`MongoDB connected: ${DB.connection.host}`);
      
    } catch (error) {
        console.log('Error connectig to mongodb', error.message);
        process.exit(1)
        
    }
}