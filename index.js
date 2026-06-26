
const fs = require('fs');

const readStrem = fs.createReadStream('data.txt');

readStrem.on("data", (chunk)=>{
    console.log(chunk.toString());
    
});

readStrem.on("close", ()=>{
    console.log("reading complete");
    
});