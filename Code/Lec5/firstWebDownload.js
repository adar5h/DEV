// npm install axios -> Module to download from the web
// node firstWebDownload --dest=download.html --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results" 

let minimist = require("minimist");
let axios = require("axios");
let fs = require("fs");

let args = minimist(process.argv);

let dwnldPromise = axios.get(args.url); // It will download the given argument url's content

dwnldPromise.then(function(response){ // Then after the content is downloaded 'then' function response would be called, or catch will be called if there is an error.
    let html = response.data;
    fs.writeFileSync(args.dest, html, "utf-8"); // Writing the content in html on args.dest in readable utf-8 form.
}).catch(function(err){
    console.log(err); 
})