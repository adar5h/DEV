// npm install jsdom
// node 3_firstProcessingHTML.js --source=sample.html


// DOM -> Data Object Model is an object tree which is created by the browser for the programmer.
// Programmer can interact with view of page using DOM.

/*                                  |-> 1. Present the given html in a presentable way to the user.
-> A Browser has 2 responsibilites -|
                                    |-> 2. Make a DOM Tree for the programmer to interact with the view of page.
*/                            

let minimist = require('minimist');
let fs = require("fs");
let jsdom = require("jsdom"); // It will upload HTML and prepare the DOM tree for programmer just like a browser would.

let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function(err, html){

    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document; // Accessing the page elements using document. 

    let descs = document.querySelectorAll("div.match-info > div.description"); 
    // We will get all div's with class description whose parent is a div with class match-info

    for(let i = 0; i < descs.length; i++){
        console.log(descs[i].textContent);
    }


})


