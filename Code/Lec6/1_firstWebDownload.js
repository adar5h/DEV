// npm install axios
// node 1_firstWebDownload.js --dest=download.html --url=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results

let minimist = require("minimist");
let fs = require("fs");
let axios = require("axios");

let args = minimist(process.argv);

let dwnldKaPromise = axios.get(args.url);

dwnldKaPromise.then(function(response){ // Concept of callback is being used here.
    let html = response.data;
    fs.writeFileSync(args.dest, html, "utf-8");
}).catch(function(err){
    console.log(err);
});