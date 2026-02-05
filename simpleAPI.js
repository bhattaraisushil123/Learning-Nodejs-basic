
const http = require('http');
const usersData=[
    {
        name:"susil",
        age:20,
        email:'bhattaraisusil541@gmail.com'


    } , 
      {
        name:"suraj",
        age:30,
        email:'bhattaraisuraj541@gmail.com'


    } ,
     {
        name:"anil",
        age:40,
        email:'bhattaraianil541@gmail.com'


    } 

]
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type",'application/json')
    resp.write(JSON.stringify(usersData));
    resp.end();

}).listen(6100)