const express = require("express") ;
const Complaint = require("../models/complaint_model") ;
const url = "mongodb+srv://hostelAdmin:qwerty123@@cluster0.y6vfi.mongodb.net/Hostel?retryWrites=true&w=majority" ;

const router = express.Router() ;
router.route("/student/complaint").post((req,res) => { 
    console.log("Inside Complaint portal") ;
    const complaint = new Complaint({
        reg_no : req.body.reg_no,
        name : req.body.name ,
        usn : req.body.usn,
        email : req.body.email ,
        phoneNumber : req.body.phoneNumber,
        room_no : req.body.room_no,
        hostel : req.body.hostel,
        complaint : req.body.complaint
});
   
        
            complaint
            .save()
            .then( () => {
                console.log("Complaint filed succesfully!") ;
                res.status(200).json("complaint filed!") ;
            })
            .catch((err) => {
                console.log(`Filing failed due to ${err}`) ;
            })
    
});
    

   

    module.exports = router ;