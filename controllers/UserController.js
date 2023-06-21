
    const User = require('../models/User');

    const createUsersController =  asyncHandler(async(req,res,next)=> {

     const Users =   await User.create(req.body);
      if(!Users){
         return next(new errorResponse("Users was not created",400))
     }
     res.status(200).json({
        message:" Users was created successfully",
        data: Users
     })
    })

     const getAllUsersController =  asyncHandler(async(req,res,next)=> {

     const Users =   await User.find();
      if(!Users){
         return next(new errorResponse("Users was not found",404))
     }
     res.status(200).json({
        message:" Users was retrieved successfully",
        data: Users
     })
    })

      const getUsersController =  asyncHandler(async(req,res,next)=> {

     const UserId =  req.params.UserId || req.body.UserId

     const Users =   await User.findById(UserId);
      
     if(!Users){
         return next(new errorResponse("Users was not found",404))
     }
     res.status(200).json({
        message:" User was retrieved successfully",
        data: Users
     })
    })

    const updateUserController =  asyncHandler(async(req,res,next)=> {

     const UserId =  req.params.UserId || req.body.UserId
      
     if(!UserId){
         return next(new errorResponse("UserId was not found",404))
     }
      const Users = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      )
     res.status(200).json({
        message:" User was retrieved successfully",
        data: Users
     })
    })

    module.exports = {
      createUsersController,
      getAllUsersController,
      getUsersController,
      updateUserController
    };
  