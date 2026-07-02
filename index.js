const fs = require('fs');

const fileRead = fs.createReadStream('data.txt');

fileRead.on("data",(chunk) =>{
  console.log(chunk.toString());
});

fileRead.on("end",()=>{
  console.log("Reading complete");
});