const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const Complaint = Schema({
    reg_no : {
        type : String ,
        required : true ,
        unique : false,
    },
    name : {
        type : String ,
        required : true ,
        unique : false ,
    },
    usn : {
        type : String ,
        required : true ,
        unique : false ,
    },
    email : {
        type : String ,
        required : true ,
        unique : false ,
    },
    phoneNumber : {
        type : String ,
        required : true ,
        unique : false 
    },
    room_no : {
        type : String,
        required : true ,
        unique : false ,
    },
    hostel : {
        type : String ,
        required : true ,
        unique : false ,
    },
    complaint : {
        type : String ,
        required : true,
        unique : false
    }
}) ;

module.exports = mongoose.model("Complaint", Complaint,'Complaint') ;