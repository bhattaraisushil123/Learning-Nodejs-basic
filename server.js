
const http = require('http');
http.createServer((request,response)=>{
    response.write("<h2>hello this is sushil </h2>");
response.end("Hello");
}).listen(3000);


