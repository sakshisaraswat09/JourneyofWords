import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

import Token from "../model/token.js";

dotenv.config();


export const authenticateToken = (request, response, next) => {
    const authHeader = request.headers.authorization;
    
    const token = authHeader && authHeader.split(' ')[1];

    

    if(token == null){
        // console.log('Token is missing');
        return response.status(401).json({msg: ' token is missing'});
    }


    jwt.verify(token,process.env.ACCESS_SECRET_KEY, (error, user) => {
        // console.log("Token is: ",token);
    
        // console.log("access key: ",process.env.ACCESS_SECRET_KEY);
        if(error){
            return response.status(403).json({msg: 'invalid token'})
        }

        request.user = user;
        next();
    })
}