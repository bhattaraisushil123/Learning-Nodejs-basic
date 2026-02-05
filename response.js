
const http = require('http');
 const age = 20


const server= http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html");
 resp.write(`
<html>
<head>
<title> Code step by step</title>
</head>
<body>
<h1> Hello world </h1>
<h2> `+age+ `</h2>
<h2> `+new Date+ ` </h2>

</body>
  </html>
    `)

resp.end();
 })
 
 server.listen(3000)