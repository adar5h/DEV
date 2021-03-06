// node 2_JSONwrite.js --dest=teams.json

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

let teams = [
    {
        team: "India",
        rank: 1,
        matches: [
            {
                vs: "Australia",
                result: "Win"
            },
            {
                vs: "England",
                result: "Win"
            }
        ]
    },
    {
        team: "Australia",
        rank: 2,
        matches: [
            {
                vs: "India",
                result: "Loss"
            },
            {
                vs: "England",
                result: "Win"
            }
        ]
    },
    {
        team: "England",
        rank: 3,
        matches: [
            {
                vs: "Australia",
                result: "Loss"
            },
            {
                vs: "India",
                result: "Loss"
            }
        ]
    }
]

// console.log(teams[2].matches[1].vs);

let json = JSON.stringify(teams); // Stringify converts JSO to JSON. JSO can't be printed or saved. 
// It has to be converted to JSON via JSON.stringify() so that it can be printed or saved.
fs.writeFileSync(args.dest, json, "utf-8");