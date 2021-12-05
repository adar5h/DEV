// npm install jsdom
// node 2_gettingFamiliarWithJSDOM.js --source=sample.html


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

    let btn1 = document.querySelector(".btn1"); // . here represents that btn1 is a class // querySelector would give the given first element
    // console.log(btn1.textContent); // .textContent would print out the content of the given element.
    // let buttons = document.querySelectorAll("button");  // querySelectorAll would create an array of all the elements present in that HTML.
    // console.log(buttons.length);  
    // console.log(buttons[0].textContent);
    // console.log(buttons[1].textContent);

    let elements = document.querySelectorAll(".z"); // Would output all the elements having class "z"
    // console.log(elements[0].textContent);
    // console.log(elements[1].textContent);
    let elementz = document.querySelectorAll("span.z"); // All the span element having class 'z' will be stored the variable elementz.
    // console.log(elementz[0].textContent);
    // console.log(elementz[1].textContent);



})


