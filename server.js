var http = require("http");
var task = require("./tasks.js");
var express = require("express");
var app = express();
var taskRoute = require("./tasks-routes.js");
console.log("working")
// app.get("/", function (req, res) {
// console.log("working")
// var i=Math.floor(Math.random()*task.tasks.length)
// res.send(task.tasks[i]);
// });

app.use(express.static(__dirname + "/public"));
app.use("/", taskRoute);

var server = app.listen(3000, function (){
});