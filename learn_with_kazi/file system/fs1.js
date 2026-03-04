console.log("hello i am fs1 file");
const fs = require("fs");

// fs.writefile is used to write data into a file and it will create a new file if it does not exist
// fs.writeFile("read.txt", "welcome to my whatsapp");


// fs.existsSync is used to check if a file exists or not and it returns true or false
if (fs.existsSync("read.txt")) {


  // fs.readFile is used to read the data from a file and it takes three arguments the first one is the file name the second one is the encoding and the third one is a callback function that will be called when the file is read and it will return an error if there is any error and the data if the file is read successfully
  const data = fs.readFile("read.txt", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("file exists");
    console.log(data);
  });
}


// fs.appendFile is used to append data to a file and it takes three arguments the first one is the file name the second one is the data that we want to append and the third one is a callback function that will be called when the data is appended and it will return an error if there is any error and it will return nothing if the data is appended successfully \n is used to add a new line in the file
fs.appendFile("read.txt", "\ni am learning node js", (err) => {
  if (err) {
    console.error("Error appending to file:", err);
  } else {
    console.log("Data appended successfully");
  }
});
