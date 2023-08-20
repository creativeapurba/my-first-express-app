const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
   // res.send("App is running")
   res.sendFile(__dirname + "/index.html")
});

app.get("/home", (req, res) => {
   // res.send("This is home route")
   res.sendFile(__dirname + "/home.html")
})

app.post("/", (req, res)=>{
   console.log(req.body.username);
   res.send("Post received")
})

app.listen(port, () => {
   console.log("App is running");
})