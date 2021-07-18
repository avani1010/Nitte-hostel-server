const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const Student = Schema({
    reg_no : {
        type : String ,
        required : true ,
        unique : true ,
    },
    password : {
        type : String ,
        required : true ,
        unique : false ,
    },
    name : {
        type : String ,
        required : true ,
        unique : false ,
    },
    usn : {
        type : String ,
        required : true ,
        unique : true ,
    },
    email : {
        type : String ,
        required : true ,
        unique : true ,
    },
    phoneNumber : {
        type : String ,
        required : true ,
        unique : true ,
    },
    gender : {
        type : String ,
        required : true ,
        unique : false ,
    },
    sem : {
        type : Number ,
        required : true ,
        unique : false ,
    },
    Mphone : {
        type : String ,
        required : true ,
        unique : true ,
    },
    Fphone : {
        type : String ,
        required : true ,
        unique : true ,
    },
    room_no : {
        type : Number ,
        required : true ,
        unique : false ,
    },
    hostel : {
        type : String ,
        required : true ,
        unique : false ,
    },
}) ;

module.exports = mongoose.model("Student", Student,'Student') ;
                                //(route, object, collectionName)