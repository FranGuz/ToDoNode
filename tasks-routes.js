var express = require("express");
var routes = express.Router();

routes.get("/",function(req,res){
    res.send("This is your baseline endpoint");
});

routes.get("/tasks", function (req, res) {
res.send("Get");
console.log("GET request successful");
    });
routes.post("/tasks", function (req, res) {
res.send("post");
console.log("POST request successful");
    });
routes.put("/tasks", function (req, res) {
res.send("put");
console.log("PUT request successful")
    });
routes.delete("/tasks", function (req, res) {
res.send("delete");
console.log("DELETE request successful")
    });

    module.exports = routes;