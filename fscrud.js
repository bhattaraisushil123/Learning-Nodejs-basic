
const fs = require('fs');

const operation = process.argv[2];
const name = process.argv[3];
const content = process.argv[4];

const fullName = "files/" + name + ".txt";

if (operation === 'write') {

    fs.writeFileSync(fullName, content);
    console.log("File created successfully");

} else if (operation === 'append') {

    fs.appendFileSync(fullName, content);
    console.log("Content appended successfully");

} else if (operation === 'delete') {

    fs.unlinkSync(fullName);
    console.log("File deleted successfully");

} else {
    console.log("Invalid operation");
}

// fs.writeFileSync("files/banana.txt","    This is a fruit");
// fs.unlinkSync("files/banana.txt")
// const data = fs.readFileSync('files/apple.txt',"utf-8");
// console.log(data);
// fs.appendFileSync("files/apple.txt","and this is a good for health ")