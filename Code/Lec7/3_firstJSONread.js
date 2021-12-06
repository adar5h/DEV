// node 3_firstJSONread.js --source=teams.json

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function (err, json) {
  if (err) {
    console.log(err);
  } else {
    // console.log(json);
    let jso = JSON.parse(json); // JSON to JSO, so that you can manipulate the object.
    console.log(jso[2].matches[1].vs);
  }
});

// If you want to print or save a JSO, convert the JSO to JSON using JSON.stringify
// If you want to manipulate a JSON, convert the JSON to JSO using JSON.parse