var express = require("express");
var router = express.Router();

var path = __dirname +"/views/";

var app = express();
var list = [];

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});

app.get("/",(req,res,next)=>{
    list.push("Resource Acquired")
    res.json(list);
});