// npm init
// npm install minimist
// npm install excel4node
// node 2_firstExcelFile.js --source=teams.json --dest=teams.csv

let minimist = require("minimist");
let fs = require("fs");
let excel = require("excel4node");

let args = minimist(process.argv);

let json = fs.readFileSync(args.source, "utf-8"); // Reading the JSON file through fs
let teams = JSON.parse(json); // Creating an object of the JSO to JSO using JSON.parse(source).

// Check documentation of new modules, don't cram them.
let wb = new excel.Workbook(); // Creating new workbook, i.e. Excel sheet. 

for(let i = 0; i < teams.length; i++){
    let sheet = wb.addWorksheet(teams[i].team); // Will create a worksheet in the workbook of every object i's team name.
    sheet.cell(1, 1).string("Rank:");
    sheet.cell(1,2).number(teams[i].rank);

    // sheet.cell(2,1).string(teams[i].team);
    // sheet.cell(3,1).string(teams[i].team);
    sheet.cell(2,1).string("Team");
    sheet.cell(2,2).string("VS");
    sheet.cell(2,3).string("Result");

    for(let j = 0; j < teams[i].matches.length; j++){
        sheet.cell(3+j,1).string(teams[i].team);
        sheet.cell(3+j,2).string(teams[i].matches[j].vs);
        sheet.cell(3+j,3).string(teams[i].matches[j].result);
    }
}

wb.write(args.dest); // Writing the code above this point to the excel destination file.


