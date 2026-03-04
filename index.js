console.log("hello i am index file");
const fs = require("fs");
fs.writeFileSync("index.txt", "welcome to my channel ");
if (fs.existsSync("index.txt")) {
  const data = fs.readFile("index.txt", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    // console.log("file exists");
    // console.log(data);
  });
}
