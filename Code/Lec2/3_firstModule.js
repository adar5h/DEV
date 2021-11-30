//Install the library minimist //Before that remember to do npm init. 
//node is just like a interpreter ,line by line code ko compile krta hai , node is like a runtime environment
//npm is node package manager
//its like a website where the libararies are registered, we dont need to go to browser,search,download
// we can install from the terminal itself 
//Using the command npm install minimist

let minimist = require('minimist');
let args = minimist(process.argv);

let age = args.age;
let name = args.name;


console.log(args);

//node firstModule.js -x 5 -y "Hello World"
/* OUTPUT
            {
            _: [
                'C:\\Program Files\\nodejs\\node.exe',
                'D:\\PlacementProgram\\DEV\\Code\\Lec2\\firstModule.js'
            ],
            x: 5, // Unlike cli process.argv here 5 would be considered as no., thus no need of parseInt()
            y: 'Hello World'
            }
*/

//node firstModule.js --name="John" --age=21 //Quotations aren't neccesary
/* OUTPUT
            {
            _: [
                'C:\\Program Files\\nodejs\\node.exe',
                'D:\\PlacementProgram\\DEV\\Code\\Lec2\\firstModule.js'
            ],
            name: 'John',
            age: 21
            }
*/




if(args.age > 30){
    console.log("Hello, "+ args.name + ". You must be preparing for retirement.");
}else{
    console.log("Heya, "+ args.name + ". You must be doing something that fills you up with passion");
}