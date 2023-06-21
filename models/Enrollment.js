const mongoose = require('mongoose');



const EnrollmentSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:[true,"please add firstName"]
    },
    lastName:{
        type:String,
        required:[true,"please add lastName"]
    },
    middleName:{
        type:String,
        required:[true,"please add middleName"]
    },
    phone:{
        type:String,
        required:[true,"please add phone"]
    },
    email:{
        type:String,
        required:[true,"please add email"]
    },
    title:{
        type:String,
        required:[true,"please add title"]
    },
    gender:{
        type:String,
        required:[true,"please add gender"]
    },
    maritalstatus:{
        type:String,
        required:[true,"please add maritalstatus"]
    },
    ninumber:{
        type:String,
        required:[true,"please add firstName"]
    },
    designation:{
        type:String,
        required:[true,"please add firstName"]
    },
    dateofbirth:{
        type:String,
        required:[true,"please add firstName"]
    },
    dateofemployment:{
        type:String,
        required:[true,"please add firstName"]
    },
    nominalrank:{
        type:String,
        required:[true,"please add firstName"]
    },
    country:{
        type:String,
        required:[true,"please add firstName"]
    },
 
    state:{
        type:String,
        required:[true,"please add firstName"]
    },
    confirmationdate:{
        type:String,
        required:[true,"please add firstName"]
    },
    salaryentryedate:{
        type:String,
        required:[true,"please add firstName"]
    },
    temporystaffenddate:{
        type:String,
        required:[true,"please add firstName"]
    },
    branch:{
        type:String,
        required:[true,"please add firstName"]
    },
    department:{
        type:String,
        required:[true,"please add firstName"]
    },
    supervisor:{
        type:String,
        required:[true,"please add firstName"]
    },
    subsidiary:{
        type:String,
        required:[true,"please add firstName"]
    },
    employmenttype:{
        type:String,
        required:[true,"please add firstName"]
    },
    religion:{
        type:String,
        required:[true,"please add firstName"]
    },
 
    sstatus:{
        type:String,
        required:[true,"please add firstName"]
    },
    attrittion:{
        type:String,
        required:[true,"please add firstName"]
    },
    attrittiondate:{
        type:String,
        required:[true,"please add firstName"]
    },
    user:{
        type:String,
        required:[true,"please add firstName"]
    },
    lastupdate:{
        type:String,
        required:[true,"please add firstName"]
    },
    documentcode:{
        type:String,
        required:[true,"please add firstName"]
    },
    paygroup:{
        type:String,
        required:[true,"please add firstName"]
    },
    detailnotavailable:{
        type:String,
        required:[true,"please add firstName"]
    },
    height:{
        type:String,
        required:[true,"please add firstName"]
    },
    complexion:{
        type:String,
        required:[true,"please add firstName"]
    },
 
    eyecolor:{
        type:String,
        required:[true,"please add firstName"]
    },
    haircolor:{
        type:String,
        required:[true,"please add firstName"]
    },
    hobbies:{
        type:String,
        required:[true,"please add firstName"]
    },
    policecase:{
        type:String,
        required:[true,"please add firstName"]
    },
    policecasedetail:{
        type:String,
        required:[true,"please add firstName"]
    },
    birthplace:{
        type:String,
        required:[true,"please add firstName"]
    },
    emgergencycontactrelation:{
        type:String,
        required:[true,"please add firstName"]
    },
    emgergencycontactname:{
        type:String,
        required:[true,"please add firstName"]
    },
    emgergencycontactaddress:{
        type:String,
        required:[true,"please add firstName"]
    },
    emgergencycontactphone:{
        type:String,
        required:[true,"please add emgergencycontactphone"]
    },
    startingsalarygrade:{
        type:String,
        required:[true,"please add startingsalarygrade"]
    },
    startingsalarystep:{
        type:String,
        required:[true,"please add startingsalarystep"]
    },
    companyrelative:{
        type:String,
        required:[true,"please add companyrelative"]
    },
    companyrelativename:{
        type:String,
        required:[true,"please add companyrelativename"]
    },
    autogenexclude:{
        type:String,
        required:[true,"please add autogenexclude"]
    },
    unit:{
        type:String,
        required:[true,"please add unit"]
    },
    jobtitle:{
        type:String,
        required:[true,"please add jobtitle"]
    },
    currentsalarygrade:{
        type:String,
        required:[true,"please add currentsalarygrade"]
    },
    currentsalarystep:{
        type:String,
        required:[true,"please add currentsalarystep"]
    },
    staffcategory:{
        type:String,
        required:[true,"please add staffcategory"]
    }
});



module.exports = mongoose.model("Enrollment", EnrollmentSchema);