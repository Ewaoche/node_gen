
    const Enrollment = require('../models/Enrollment');

    const createEnrollmentsController =  asyncHandler(async(req,res,next)=> {

     const Enrollments =   await Enrollment.create(req.body);
      if(!Enrollments){
         return next(new errorResponse("Enrollments was not created",400))
     }
     res.status(200).json({
        message:" Enrollments was created successfully",
        data: Enrollments
     })
    })

     const getAllEnrollmentsController =  asyncHandler(async(req,res,next)=> {

     const Enrollments =   await Enrollment.find();
      if(!Enrollments){
         return next(new errorResponse("Enrollments was not found",404))
     }
     res.status(200).json({
        message:" Enrollments was retrieved successfully",
        data: Enrollments
     })
    })

      const getEnrollmentsController =  asyncHandler(async(req,res,next)=> {

     const EnrollmentId =  req.params.EnrollmentId || req.body.EnrollmentId

     const Enrollments =   await Enrollment.findById(EnrollmentId);
      
     if(!Enrollments){
         return next(new errorResponse("Enrollments was not found",404))
     }
     res.status(200).json({
        message:" Enrollment was retrieved successfully",
        data: Enrollments
     })
    })

    const updateEnrollmentController =  asyncHandler(async(req,res,next)=> {

     const EnrollmentId =  req.params.EnrollmentId || req.body.EnrollmentId
      
     if(!EnrollmentId){
         return next(new errorResponse("EnrollmentId was not found",404))
     }
      const Enrollments = await Enrollment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      )
     res.status(200).json({
        message:" Enrollment was retrieved successfully",
        data: Enrollments
     })
    })

    module.exports = {
      createEnrollmentsController,
      getAllEnrollmentsController,
      getEnrollmentsController,
      updateEnrollmentController
    };
  