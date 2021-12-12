// npm install pdf-lib
// node 3_firstWritingPDF.js --source=teams.json --dest=worldcup

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
        createScoreCard(teams[i].team, teams[i].matches[j], fileName);

    }
}

    // This fn creates pdf for match in appropriate folder with correct details
    // Here we will use pdf-lib to create the pdf.
     function createScoreCard(team, match ,location){

    // console.log(team);
    // console.log(match.vs);
    // console.log(match.result);
    // console.log(location);
    // console.log("------------");

    let t1 = team;
    let t2 = match.vs;
    let result = team + " " + match.result;

    let originalBytes = fs.readFileSync("Template.pdf"); // Read in bytes, therefore no "utf-8" as arguments.
    let prmToLoadDoc = pdf.PDFDocument.load(originalBytes); // Available on documentation of pdf-lib
    prmToLoadDoc.then(function(pdfdoc){
        let page = pdfdoc.getPage(0);
        
        page.drawText(t1,{
            x : 342,        // Co-ordinates to place the teamnames and content.
            y : 666,
            size: 15
        });
        page.drawText(t2,{
            x : 342,
            y : 636,
            size: 15
        });
        page.drawText(result,{
            x : 342,
            y : 603,
            size: 15
        });

        // All the code has been processed in RAM, but has to be saved in the hard disk.
        // Therefore, we have to save it to be able to retrieve it later.

        let prmToSave = pdfdoc.save();
        prmToSave.then(function(changedBytes){
            fs.writeFileSync(location, changedBytes);
        })

    })



  }