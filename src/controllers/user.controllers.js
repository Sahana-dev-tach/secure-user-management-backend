import User from '../models/user.model.js';
import createError from 'http-errors';
import mongoose from 'mongoose';

export const getAllUser = async(req, res, next) => {
    try {
        console.log("req.user:", req.user);
        const page = Math.max(parseInt(req.query.page) || 1, 1);
        const limit = Math.max(parseInt(req.query.limit) || 10, 50);
        const skip = (page - 1) * limit;
        const user = await User.find().select('-password').skip(skip).limit(limit).lean();
        const totalUser = await User.countDocuments()
        res.status(200).json({
      success: true,
      meta: {
        total : totalUser,
        page,
        limit
      },
      data: user
    });
    } catch (error) {
        next(error)
    }
}

export const blockUser = async(req,res,next) =>{
  try {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
      return next(createError(400, 'Invalid user ID'));
    }
    
    if(req.user.id === id) {
      return next(createError(400, 'You cannot block yourself'));
    }

    const user = await User.findById(id);

    if(!user) {
      return next(createError(404, 'User not found'));
    }

    user.isBlocked = true;
    await user.save();

    res.status(200).json({ success: true, message: 'User blocked successfully' })

  } catch (error) {
    next(error);
  }
}