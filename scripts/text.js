// WORK IN PROGRESS

// Script that reads from text files
var sections;
var fs = require("fs");

// Try reading from file
try {
    var obj = fs.readFileSync(textFiles.json);
    sections = JSON.parse(obj)
}
catch {
    sections = null; 
}

function readFile(i) {
    try {
        var text = fs.readFileSync("../text/" + sections[i].fileName);
    }
    catch {
        sections = null; 
    }
    document.getElementById("textTest").value = text;
}


