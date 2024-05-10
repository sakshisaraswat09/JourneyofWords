import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
 
import Token from '../model/token.js';
import User from "../model/user.js";

dotenv.config();


export const signupUser = async (request,response)=>{
    try{

        const {username, name , password } = request.body;

        //check for missing or null values
        if(!username || !name || !password){
            return response.status(400).json({msg: 'Please provide username , name and password'});
        }
        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(request.body.password, salt)
        const hashedPassword= await bcrypt.hash(request.body.password,10);

        const userData = {username: request.body.username, name: request.body.name, password: hashedPassword};

        const newUser=new User(userData);
        await newUser.save();
        return response.status(200).json({msg:'signup successfull'});
    }catch(error){
        if(error.code === 11000 && error.keyPattern && error.keyValue){
            //duplicate key error, handle accordingly
            response.status(400).json({msg: 'Username is already taken'});
        }
        console.log('Error while signing up the user',error);
        return response.status(500).json({msg: 'Error while signing up the user'});
    }
}


export const loginUser = async (request, response) => {
    let user = await User.findOne({username:request.body.username});
    if(!user){
        return response.status(400).json({msg: 'Username does not match'});
    }

    try{
        let match = await bcrypt.compare(request.body.password, user.password);
        if(match){
            const accessToken = jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY,{expiresIn: '1h'});

            const refreshToken = jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY);

            const newToken = new Token({token: refreshToken});

            await newToken.save();


            return response.status(200).json({accessToken: accessToken, refreshToken: refreshToken, name: user.name, username: user.username});
            
        }else{
            return response.status(400).json({msg: 'Password does not match'});
        }
    }catch(error){
        return response.status(500).json({msg: 'Error while login in user'})
    }
}


