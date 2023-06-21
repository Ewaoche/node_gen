const mongoose = require('mongoose');



const AppraisalSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:[true,"please add firstName"]
    },
    lastName:{
        type:String,
        required:[true,"please add lastName"]
    },
    phone:{
        type:String,
        required:[true,"please add phone"]
    },
 
    email:{
        type:String,
        required:[true,"please add email"]
    },
    proficiency:{
        type:String,
        required:[true,"please add proficiency"]
    },
    qualityofwork:{
        type:String,
        required:[true,"please add firstName"]
    },
    quantityofwork:{
        type:String,
        required:[true,"please add firstName"]
    },
    planning:{
        type:String,
        required:[true,"please add firstName"]
    },
    initiative:{
        type:String,
        required:[true,"please add firstName"]
    },
    interpersonal:{
        type:String,
        required:[true,"please add firstName"]
    },
    verbal:{
        type:String,
        required:[true,"please add firstName"]
    },
    teampart:{
        type:String,
        required:[true,"please add firstName"]
    },
    discretion:{
        type:String,
        required:[true,"please add firstName"]
    },
 
    punctuality:{
        type:String,
        required:[true,"please add firstName"]
    },
    production:{
        type:String,
        required:[true,"please add firstName"]
    },
    status:{
        type:String,
        required:[true,"please add firstName"]
    },
    submissionexist:{
        type:String,
        required:[true,"please add firstName"]
    },
    managerproficiency:{
        type:String,
        required:[true,"please add firstName"]
    },
    managerqualityofwork:{
        type:String,
        required:[true,"please add firstName"]
    },
    managerquantityofwork:{
        type:String,
        required:[true,"please add firstName"]
    },
    managerplanning:{
        type:String,
        required:[true,"please add firstName"]
    },
    managerinitiative:{
        type:String,
        required:[true,"please add firstName"]
    },
    managerinterpersonal:{
        type:String,
        required:[true,"please add firstName"]
    },
 
    managerverbal:{
        type:String,
        required:[true,"please add firstName"]
    },
    managerteampart:{
        type:String,
        required:[true,"please add firstName"]
    },
    managerdiscretion:{
        type:String,
        required:[true,"please add firstName"]
    },
    managerpunctuality:{
        type:String,
        required:[true,"please add firstName"]
    },
    managerproduction:{
        type:String,
        required:[true,"please add firstName"]
    },
    appraiseecomment:{
        type:String,
        required:[true,"please add firstName"]
    },
    managercomment:{
        type:String,
        required:[true,"please add firstName"]
    },
    manager1comment:{
        type:String,
        required:[true,"please add firstName"]
    },
    managerreportto:{
        type:String,
        required:[true,"please add firstName"]
    },
    mdcomment:{
        type:String,
        required:[true,"please add firstName"]
    },
 
    vccomment:{
        type:String,
        required:[true,"please add firstName"]
    },
    arccomment:{
        type:String,
        required:[true,"please add firstName"]
    },
    appraiseetotalscore:{
        type:String,
        required:[true,"please add firstName"]
    },
    managertotalscore:{
        type:String,
        required:[true,"please add firstName"]
    },
    achievedproduction:{
        type:String,
        required:[true,"please add firstName"]
    },
    targetproduction:{
        type:String,
        required:[true,"please add firstName"]
    },
    commendation:{
        type:String,
        required:[true,"please add firstName"]
    },
    warning:{
        type:String,
        required:[true,"please add firstName"]
    },
    querywithsusp:{
        type:String,
        required:[true,"please add firstName"]
    },
    querywithoutsusp:{
        type:String,
        required:[true,"please add firstName"]
    }

});



module.exports = mongoose.model("Appraisal", AppraisalSchema);