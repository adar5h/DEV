// npm install path -> Path is used for solving the path addressing issues in different OSs // Already Installed in NodeJS
// node 2_firstFolderCreation.js --source=teams.json --dest=root

let minimist = require('minimist');
let fs = require('fs');
let path = require('path'); // To make folder paths, never append '/' manually.
// Use path.join

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

for(let i = 0; i < teams.length; i++){
    // fs.mkdirSync(args.dest + "/" + teams[i].team); // Would cause problem while making folders in MacOS or Linux, as they use \ .
    
    let folderName = path.join(args.dest, teams[i].team);
    fs.mkdirSync(folderName); // To make directories.
}