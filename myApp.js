require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello, World!");
/*app.get ("/", (req, res,) => {
  res.send("Hello Express");
});*/

app.get("/", function (req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res){
    res.json({"message": "Hello json"})

    if (process.env.MASSAGE_STYLE === "uppercase") {
       massage = massage.toUpperCase();
    }
     res.json({"message": "HELLO JSON"})
});































 module.exports = app;
