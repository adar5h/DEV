// read from source.txt, capitalize, write to dest.txt
// node FirstFiles.js --source=source.txt --dest=dest.txt
// Install minimist -> npm install minimist

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

// Read file source.txt
let stext = fs.readFileSync(args.source, "utf-8");

// Capitalize
let dtext = stext.toUpperCase();

// Write to dest.txt
fs.writeFileSync(args.dest, dtext, "utf-8");
