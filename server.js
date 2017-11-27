var http = require("http");
var task = require("./tasks.js")

console.log(task);

http.createServer(onRequest).listen(3000);
function onRequest(request, response) {
    console.log(task.tasks);
response.writeHead(200, { "Content-type": "text/plain" });
var i=Math.floor(Math.random()*task.tasks.length)
console.log(i)
response.write(task.tasks[i]);
response.end();
}