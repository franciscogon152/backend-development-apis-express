require('dotenv').config();
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
console.log("Hello, World!");
/*app.get ("/", (req, res,) => {
  res.send("Hello Express");
});*/

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get("/", function (req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res){
    let message = "Hello json";

    if (process.env.MESSAGE_STYLE === "uppercase") {
       message = message.toUpperCase();
    }
     res.json({"message": message});
});

app.get("/now", function (req, res, next){
    req.time = new Date().toString();
    next(); 
    },
    function (req, res){
    res.json({time: req.time});
    }
);

app.get("/:word/echo", function (req, res){
    res.json({echo: req.params.word});

});

app.route("/name").get (function (req, res){
    let firstName = req.query.first;
    let lastName = req.query.last;
    let fullName = `${firstName} ${lastName}`;
    res.json({name: fullName});
 })
 .post (function (req, res){
    let firstName = req.body.first;
    let lastName = req.body.last;
    let fullName = `${firstName} ${lastName}`;
    res.json({name: fullName});
}); 





















 module.exports = app;
