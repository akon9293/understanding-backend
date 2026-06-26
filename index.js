
const fs = require("fs");

const readStream = fs.createReadStream("data.txt" ,{
     highWaterMark: 20
});

let chunkCount = 0;

readStream.on("data", (chunk) => {
  chunkCount++;
  console.log(`Chunk ${chunkCount} received`);
});

readStream.on("end", () => {
  console.log(`Total Chunks: ${chunkCount}`);
});

readStream.on("error", (err) => {
  console.log(err.message);
});