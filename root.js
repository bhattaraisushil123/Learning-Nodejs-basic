
const http = require('http');
const userForm = require('./userform');
const userDataSumit = require('./userdatasubmit')
http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":'text/html'})
    if(req.url=="/"){
 userForm(req,  resp) 
    } else if(req.url=="/submit"){
    userDataSumit(req,  resp)
    }
resp.end();
}).listen(3200)