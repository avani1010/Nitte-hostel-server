const express = require("express") ;
const Student = require("../models/student_model");
const config = require("../config");
let middleware = require("../middleware");
const jwt = require("jsonwebtoken");

const router = express.Router() ;

router.route("/:reg_no").get((req, res) => {
    Student.findOne({ reg_no: req.params.reg_no }, (err, result) => {
      if (err) return res.status(500).json({ msg: err });
      return res.json({
        data: result,
        reg_no: req.params.reg_no,
      });
    });
  });

  router.route("/checkreg_no/:reg_no").get((req, res) => {
    Student.findOne({ reg_no: req.params.reg_no }, (err, result) => {
      if (err) return res.status(500).json({ msg: err });
      if (result !== null) {
        return res.json({
          Status: true,
        });
      } else
        return res.json({
          Status: false,
        });
    });
  });

  router.route("/checkusn/:usn").get((req, res) => {
    Student.findOne({ usn: req.params.usn}, (err, result) => {
      if (err) return res.status(500).json({ msg: err });
      if (result !== null) {
        return res.json({
          Status: true,
        });
      } else
        return res.json({
          Status: false,
        });
    });
  });

  router.route("/checkphoneNumber/:phoneNumber").get((req, res) => {
    Student.findOne({ phoneNumber: req.params.phoneNumber }, (err, result) => {
      if (err) return res.status(500).json({ msg: err });
      if (result !== null) {
        return res.json({
          Status: true,
        });
      } else
        return res.json({
          Status: false,
        });
    });
  });

  router.route("/checkemail/:email").get((req, res) => {
    Student.findOne({ email: req.params.email}, (err, result) => {
      if (err) return res.status(500).json({ msg: err });
      if (result !== null) {
        return res.json({
          Status: true,
        });
      } else
        return res.json({
          Status: false,
        });
    });
  });
  

router.route("/login").post((req,res) => {
    Student.findOne({reg_no : req.body.reg_no}, (err, result)=>{
        if(err){ res.status(500).json({ msg :err })}
        else if(result===null){ 
            res.status(403).json("Registration number not found. Please register if you are a new user!") 
          }
        else if(result.password===req.body.password){
            // here we implement the JWT token functionality
            console.log("reg_no is correct");
            let token = jwt.sign({ reg_no : req.body.reg_no }, config.key, {});
            res.json({
                token: token,
                msg: "success",
              });        }
        else {
            console.log(result.password)
            res.status(403).json("Password is incorrect")
        }

    })
});
module.exports = router;