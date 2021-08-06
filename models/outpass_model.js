const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const Outpass = Schema({
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
    date : {
        type : String ,
        required : true ,
        unique : false ,
    },
    depatureTime : {
        type : String ,
        required : true ,
        unique : false ,
    },
    InTime : {
        type : String ,
        required : true ,
        unique : false ,
    },
    address : {
        type : String ,
        required : true ,
        unique : false ,
    },
    
    
}) ;

module.exports = mongoose.model("Outpass", Outpass,'Outpass') ;