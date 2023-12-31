const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
   // res.send("App is running")
   res.sendFile(__dirname + "/public/index.html")
});

app.get("/home", (req, res) => {
   // res.send("This is home route")
   res.sendFile(__dirname + "/home.html")
})
app.get("/redirect", (req, res) => {
   res.redirect("/home")
})
app.get("/user", (req, res) => {
   res.send({ name: "Omprakash" })
})

app.get("/multiline", (req, res) => {
   res.write("Line 1\n")
   res.write("Line 2")
   res.send()
})

app.post("/", (req, res) => {
   console.log(req.body.username);
   res.send("Post received")
})
app.get("/status", (req, res) => {
   res.status(304).send("Status")
})

app.get("/html", (req, res) => {
   res.send("<h1 style='color:red'>Html</h1>")
})

app.get("/login", (req, res) => {
   res.sendFile(__dirname + "/public/login.html")
})

app.get("/ejs", (req, res) => {
   res.render("template.ejs", { name: "Omprakash", surname: "Biswas" })
})

app.get("/ejs2", (req, res)=>{
   res.render("template2.ejs")
})

app.listen(port, () => {
   console.log("App is running");
})


// MERN => MONGODB EXPRESSJS REACT NODEJS