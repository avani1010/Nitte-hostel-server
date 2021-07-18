const express = require("express") ;
const mongoose = require("mongoose") ;
const app = express();
const port = process.env.PORT || 5000

mongoose.connect("mongodb+srv://hostelAdmin:qwerty123@@cluster0.y6vfi.mongodb.net/Hostel?retryWrites=true&w=majority" , {useNewUrlParser : true, useCreateIndex : true , useUnifiedTopology : true})
.then( () => {
    console.l0g('Connected to MongoDB ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})


const studentRoute = require("./routes/register") ;
const loginRoute = require("./routes/login") ;

app.use(express.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use("/", studentRoute) ;
app.use("/",loginRoute);
app.route("/").get((req,res) => { res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.json("Rest api1")});


app.listen(port,()=> console.log(`Your server is running on port ${port}`)) ;