let express = require('express');
let app = express();
console.log("Hello, World!");
/*app.get ("/", (req, res,) => {
  res.send("Hello Express");
});*/

app.get("/", function (req, res){
    res.senFile(__dirname + "/views/index.html");
});

































 module.exports = app;
