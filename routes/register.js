const express = require("express") ;
const Student = require("../models/student_model") ;
const url = "mongodb+srv://hostelAdmin:qwerty123@@cluster0.y6vfi.mongodb.net/Hostel?retryWrites=true&w=majority" ;

const router = express.Router() ;
router.route("/register").post((req,res) => { 
    console.log("Inside register") ;
    const student = new Student({
        reg_no : req.body.reg_no,
        name : req.body.name ,
        usn : req.body.usn,
        email : req.body.email ,
        phoneNumber : req.body.phoneNumber,
        sem : req.body.sem,
        Mphone : req.body.Mphone,
        Fphone : req.body.Fphone,
        room_no : req.body.room_no,
        hostel : req.body.hostel,
        password : req.body.password ,


    });
   
        
            student
            .save()
            .then( () => {
                console.log("Student registered succesfully!") ;
                res.status(200).json("ok") ;
            })
            .catch((err) => {
                console.log(`Insertion failed due to ${err}`) ;
            })
    
});
    

   

    module.exports = router ;