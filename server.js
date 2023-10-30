const express = require("express");
const app = express();
//
// Simple get requests.
// app.get('/', (req, res)=>{
//     console.log("We are here");

//     res.render('index', {text: "And Me"});

// })
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))



const userRouter = require('./routes/users');

app.use("/users", userRouter);











app.listen(3000);
