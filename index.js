const express = require('express');
const app = express();
const port = 8080;

app.get("/", (req, res) => {
   // res.send("App is running")
   res.sendFile(__dirname + "/index.html")
});

app.get("/home", (req, res) => {
   // res.send("This is home route")
   res.sendFile(__dirname + "/demo.txt")
})

app.listen(port, () => {
   console.log("App is running");
})