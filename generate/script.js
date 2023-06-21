const fs = require('fs');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);
const User = require('../models/User');
const Appraisal = require('../models/Appraisal');
const Enrollment = require('../models/Enrollment');

const AllModel = [
  User,Appraisal,Enrollment
]

function generateFilesFromSchema(schema) {
  const modelName = schema.modelName;
  const controllerFileName = `${modelName}Controller.js`;
  const routesFileName = `${modelName}Routes.js`;
  const routesIndexFileName = `index.js`;


  const controllerContent = `
    const ${modelName} = require('../models/${modelName}');

    const create${modelName}sController =  asyncHandler(async(req,res,next)=> {

     const ${modelName}s =   await ${modelName}.create(req.body);
      if(!${modelName}s){
         return next(new errorResponse("${modelName}s was not created",400))
     }
     res.status(200).json({
        message:" ${modelName}s was created successfully",
        data: ${modelName}s
     })
    })

     const getAll${modelName}sController =  asyncHandler(async(req,res,next)=> {

     const ${modelName}s =   await ${modelName}.find();
      if(!${modelName}s){
         return next(new errorResponse("${modelName}s was not found",404))
     }
     res.status(200).json({
        message:" ${modelName}s was retrieved successfully",
        data: ${modelName}s
     })
    })

      const get${modelName}sController =  asyncHandler(async(req,res,next)=> {

     const ${modelName}Id =  req.params.${modelName}Id || req.body.${modelName}Id

     const ${modelName}s =   await ${modelName}.findById(${modelName}Id);
      
     if(!${modelName}s){
         return next(new errorResponse("${modelName}s was not found",404))
     }
     res.status(200).json({
        message:" ${modelName} was retrieved successfully",
        data: ${modelName}s
     })
    })

    const update${modelName}Controller =  asyncHandler(async(req,res,next)=> {

     const ${modelName}Id =  req.params.${modelName}Id || req.body.${modelName}Id
      
     if(!${modelName}Id){
         return next(new errorResponse("${modelName}Id was not found",404))
     }
      const ${modelName}s = await ${modelName}.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      )
     res.status(200).json({
        message:" ${modelName} was retrieved successfully",
        data: ${modelName}s
     })
    })

    module.exports = {
      create${modelName}sController,
      getAll${modelName}sController,
      get${modelName}sController,
      update${modelName}Controller
    };
  `;

  const routesContent = `
    const express = require('express');
    const ${modelName}Router = express.Router();
    const ${modelName}Controller = require('../controllers/${modelName}Controller');

    // Define routes...

    ${modelName}Router
    .route('/')
    .post(${modelName}Controller.create${modelName}sController)
    .get(${modelName}Controller.getAll${modelName}sController)

    ${modelName}Router
    .route('/${modelName}Id')
    .get(${modelName}Controller.get${modelName}sController)
    .put(${modelName}Controller.update${modelName}Controller)

    module.exports = ${modelName}Router;
  `;


    const routesIndexContent = `   
        
       app.use('/${modelName}s',require('./${modelName}Router'))

        `;

  const createFile = async (fileName, content, append = false) => {
    try {
       const openFlags = append ? 'a' : 'w';
      await writeFileAsync(fileName, content,{ flag: openFlags });
      console.log(`${fileName} generated successfully.`);
    } catch (error) {
      console.error(`Error generating ${fileName}: ${error}`);
    }
  };

  createFile(`./controllers/${controllerFileName}`, controllerContent);
  createFile(`./routes/${routesFileName}`, routesContent);
  createFile(`./routes/${routesIndexFileName}`, routesIndexContent, true);
}


for(let model of AllModel){
generateFilesFromSchema(model)

}

