
    const express = require('express');
    const EnrollmentRouter = express.Router();
    const EnrollmentController = require('../controllers/EnrollmentController');

    // Define routes...

    EnrollmentRouter
    .route('/')
    .post(EnrollmentController.createEnrollmentsController)
    .get(EnrollmentController.getAllEnrollmentsController)

    EnrollmentRouter
    .route('/EnrollmentId')
    .get(EnrollmentController.getEnrollmentsController)
    .put(EnrollmentController.updateEnrollmentController)

    module.exports = EnrollmentRouter;
  