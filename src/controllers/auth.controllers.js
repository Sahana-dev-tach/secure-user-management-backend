import User from '../models/user.model.js';
import { sendAuthCookies } from '../utils/generateTokens.js';
import createError from 'http-errors';

export const register = async(req,res,next)=>{
    try {

        console.log(req.body);
        const userExists = await User.findOne({email: req.body.email});
        if(userExists) throw createError(400, 'Email already registered');

        const user = await User.create(req.body)
        sendAuthCookies(res, user);
        res.status(201).json({success:true, user});

    } catch (error) {
        next(error);
    }
}

export const login = async( req, res, next)=>{
    try {
        const user = await User.findOne({email:req.body.email}).select('+password'); //security measure to prevent accidentally exposing hashed passwords in API responses.

        if (!user || !(await user.matchPassword(req.body.password))) {
            throw createError(401, "Invalid email or password");
        }

        sendAuthCookies(res, user);
        res.status(200).json({success:true, user});

    } catch (error) {
        // console.log("error in login controller:", error);
        next(error);
    }
  
}

export const logout = async (req, res) =>{
        try {
            res.clearCookie('accessToken');
            res.clearCookie('refreshToken');
            res.json({success:true, message:"Logged out successfully"});

        } catch(error) {
            next(error);
        }
}