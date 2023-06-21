
    const express = require('express');
    const AppraisalRouter = express.Router();
    const AppraisalController = require('../controllers/AppraisalController');

    // Define routes...

    AppraisalRouter
    .route('/')
    .post(AppraisalController.createAppraisalsController)
    .get(AppraisalController.getAllAppraisalsController)

    AppraisalRouter
    .route('/AppraisalId')
    .get(AppraisalController.getAppraisalsController)
    .put(AppraisalController.updateAppraisalController)

    module.exports = AppraisalRouter;
  