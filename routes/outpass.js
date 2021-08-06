const express = require("express") ;
const Complaint = require("../models/outpass_model") ;
const url = "mongodb+srv://hostelAdmin:qwerty123@@cluster0.y6vfi.mongodb.net/Hostel?retryWrites=true&w=majority" ;

const router = express.Router() ;
router.route("/student/outpass").post((req,res) => { 
    console.log("Inside Complaint portal") ;
    const complaint = new Complaint({
        reg_no : req.body.reg_no,
        name : req.body.name ,
        usn : req.body.usn,
        email : req.body.email ,
        phoneNumber : req.body.phoneNumber,
        room_no : req.body.room_no,
        hostel : req.body.hostel,
        date : req.body.date ,
        departureTime : req.body.departureTime ,
        inTime : req.body.inTime ,
        address : req.body.address
});
   
        
            complaint
            .save()
            .then( () => {
                console.log("Outpass request added!") ;
                res.status(200).json("Outpass requested!") ;
            })
            .catch((err) => {
                console.log(`request failed due to ${err}`) ;
            })
    
});
    

   

    module.exports = router ;