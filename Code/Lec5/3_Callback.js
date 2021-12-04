// // Task1 -> Read a file (disk)
// Task2 -> Calculate Primes (CPU)
// Task2 will be done with Task1, which is good.
// node 3_Callback.js --source=big.data --n=70000

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

function isPrime(x){

    for(let div = 2; div < x; div++){
        if(x%div==0){
            return false;
        }
    }

        return true;
}

// <---------------TASK1 STARTS------------------>

let t1 = Date.now();
console.log("Starting Task1 at: "+t1 % 100000);

// fs.readFileSync(args.source); // readFileSync blocks the flow of program and return the data only after it is available and the program waits at that time.
fs.readFile(args.source, function(err, data){ // Does not blocks the flow of program and takes a callback instead. When the data is available it parses the data to the callback or the error.

    let t2 = Date.now();
    console.log("Finishing Task1 at: "+t2 % 100000);
    
    console.log(t2-t1);
});


// <----------------TASK1 ENDS------------------->


// <---------------TASK2 STARTS------------------>

let t3 = Date.now();
console.log("Starting Task2 at: "+ t3 % 100000);

let arr = [];
for(let i = 2; i < args.n; i++){
    if(isPrime(i)){
        arr.push(i);
    }
}

let t4 = Date.now();
console.log("Finishing Task2 at: "+ t4 % 100000);

console.log(t4-t3);

// <----------------TASK2 ENDS------------------->