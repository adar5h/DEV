// node 1_firstJSONread.js --source=teams.json

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function(err, json){

  if(err){
    console.log(err);
  }else{
    let jso = JSON.parse(json); // Parsed into an JavaScript Object, as we can't manuplate a JSON File.
    console.log(jso[2].matches[1].vs);
  }
})

// If you want to print or save a JSO, convert the JSO to JSON using JSON.stringify
// If you want to manipulate a JSON, convert the JSON to JSO using JSON.parse