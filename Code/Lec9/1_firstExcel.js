// npm init
// - minimist
// - excel4node

// node 1_firstExcel.js --source=teams.json --dest=teams.xls

let minimist = require("minimist");
let fs = require("fs");
let excel = require("excel4node");

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

let wb = new excel.Workbook();

for(let i = 0; i < teams.length; i++){
    let sheet = wb.addWorksheet(teams[i].team);
    sheet.cell(1,1).string("Rank");
    sheet.cell(1,2).number(teams[i].rank);

    sheet.cell(2,1).string("Team");
    sheet.cell(2,2).string("Opponent");
    sheet.cell(2,3).string("Result");

    for(let j = 0; j < teams[i].matches.length; j++){
        sheet.cell(j+3,1).string(teams[i].team);
        sheet.cell(j+3,2).string(teams[i].matches[j].vs);
        sheet.cell(j+3,3).string(teams[i].matches[j].result);
    }

}

wb.write(args.dest);
