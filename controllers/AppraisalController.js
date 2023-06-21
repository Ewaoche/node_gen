
    const Appraisal = require('../models/Appraisal');

    const createAppraisalsController =  asyncHandler(async(req,res,next)=> {

     const Appraisals =   await Appraisal.create(req.body);
      if(!Appraisals){
         return next(new errorResponse("Appraisals was not created",400))
     }
     res.status(200).json({
        message:" Appraisals was created successfully",
        data: Appraisals
     })
    })

     const getAllAppraisalsController =  asyncHandler(async(req,res,next)=> {

     const Appraisals =   await Appraisal.find();
      if(!Appraisals){
         return next(new errorResponse("Appraisals was not found",404))
     }
     res.status(200).json({
        message:" Appraisals was retrieved successfully",
        data: Appraisals
     })
    })

      const getAppraisalsController =  asyncHandler(async(req,res,next)=> {

     const AppraisalId =  req.params.AppraisalId || req.body.AppraisalId

     const Appraisals =   await Appraisal.findById(AppraisalId);
      
     if(!Appraisals){
         return next(new errorResponse("Appraisals was not found",404))
     }
     res.status(200).json({
        message:" Appraisal was retrieved successfully",
        data: Appraisals
     })
    })

    const updateAppraisalController =  asyncHandler(async(req,res,next)=> {

     const AppraisalId =  req.params.AppraisalId || req.body.AppraisalId
      
     if(!AppraisalId){
         return next(new errorResponse("AppraisalId was not found",404))
     }
      const Appraisals = await Appraisal.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      )
     res.status(200).json({
        message:" Appraisal was retrieved successfully",
        data: Appraisals
     })
    })

    module.exports = {
      createAppraisalsController,
      getAllAppraisalsController,
      getAppraisalsController,
      updateAppraisalController
    };
  