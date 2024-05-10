import mongoose from "mongoose";

const Connection=async(username,password)=>{
    const URL = `mongodb://${username}:${password}@ac-o6srikq-shard-00-00.y6hflef.mongodb.net:27017,ac-o6srikq-shard-00-01.y6hflef.mongodb.net:27017,ac-o6srikq-shard-00-02.y6hflef.mongodb.net:27017/?ssl=true&replicaSet=atlas-f0u4a0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error while connecting with the database ",error);
    }
}

export default Connection;