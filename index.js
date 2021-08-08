const express = require("express") ;
const mongoose = require("mongoose") ;
const app = express();
const port = process.env.PORT || 5000
//use your own mongoDB link to connect with cluster
mongoose.connect("mongodb+srv://************************************************?retryWrites=true&w=majority" , {useNewUrlParser : true, useCreateIndex : true , useUnifiedTopology : true})
.then( () => {
    console.log('Connected to MongoDB ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})


const studentRoute = require("./routes/register") ;
const loginRoute = require("./routes/login") ;
const complaintRoute = require("./routes/complaint") ;


app.use(express.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use("/", studentRoute) ;
app.use("/",loginRoute);
app.use("/",complaintRoute);

app.route("/").get((req,res) => { res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.json("Hostel server!")});


app.listen(port,()=> console.log(`Your server is running on port ${port}`)) ;
