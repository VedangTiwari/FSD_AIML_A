const fs = require("node:fs");
function myReadFile() {
    try {
        const data = fs.readFileSync("dummy.txt");

        console.log("file data ", data.toString());
    }
    catch (err) {
        console.log("File Error", err.message);
    }
}

function myWriteFile() {
    try {
        const data = "Hello How are you?"
        fs.writeFileSync("dummy.txt", data);
    }
    catch (err) {
        console.log("File Writing Error", err.message)
    }
}
async function appendFile(fileName, data) {
    try{
        if (!data){
            throw new Error("Data not provided");
        }
        fs.appendFileSync(filename, data);
    } catch(err){
        console.log(err.message);
    }   
}
module.exports = {
    myReadFile: myReadFile,
    myWriteFile: myWriteFile,
    username: "vedang1"
}
//myReadFile();
//myWriteFile();
//myReadFile();
