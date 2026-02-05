
// // console.log("apple1");
// let a = 20;
// let b = 0;

// setTimeout(() => {
//     // console.log("apple2");
//     b = 100;
//     console.log(a+b);   
// }, 2000);
// console.log(a+b);


// // console.log("apple3");
//   const fs = require('fs');
//   fs.readFile("text/peter bhattarai.txt",'utf-8',(error,data)=>{
//     if(error){
//         return false
//     }
//     console.log(data);
//   })

 const fs = require("fs");

const data = fs.readFileSync("text/peter bhattarai.txt", "utf-8");
console.log(data);
console.log("end script");
