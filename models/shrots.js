import mongoose from "mongoose";


const shortSchema = new mongoose.Schema(
    {
        longurl : {
           type : String
        },
        shorturl :{
           type : String
        }
    }
      
)



const Short = mongoose.model("shorts",shortSchema)

export {Short}