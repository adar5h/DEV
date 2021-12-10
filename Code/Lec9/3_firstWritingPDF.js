// npm install pdf-lib
// node 3_firstWritingPDF.js --source=teams.json --dest=root

let minimist = require("minimist");
let fs = require("fs");
let path = require("path");
let pdf = require("pdf-lib");

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

fs.mkdirSync(args.dest); // To make root folder

for(let i = 0; i < teams.length; i++){
    let teamFolder = path.join(args.dest, teams[i].team);
    fs.mkdirSync(teamFolder); // To create folder of respective teams under the root folder.

    for(let j = 0; j < teams[i].matches.length; j++){
        let fileName = path.join(teamFolder, teams[i].matches[j].vs + ".pdf"); // To create .pdf files in their respective folders.
        createScoreCard(teams[i].team, teams[i].matches[j].vs, teams[i].matches[j].result);

    }
}

async function createScoreCard(team, Opponent, result){


  }



