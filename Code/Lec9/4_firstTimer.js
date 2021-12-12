// node 4_firstTimer.js --n=10 --d=500 

let minimist = require("minimist");
let args = minimist(process.argv);

let count = args.n;
let time = args.d;

console.log("Houston, Lets begin the countdown!");

let id = setInterval(function(){
            console.log("T minus " + count );
            count--;
            
            if(count==0){
                clearInterval(id); // To stop the Interval.
                console.log('>>>>>================================================>');
            }
},time);


