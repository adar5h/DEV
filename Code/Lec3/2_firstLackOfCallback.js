// task1 -> Read a file (Disk Process)
// task2 -> Calculate Primes (CPU Process)

// Now measure the time tasken by task 1 including its start and the end time
// task2 will be started after task 1 is completed
// Then measure the time taken by task 2 including its start and the end time
// Then measure the total time taken by task 1 and task 2

// TASK2 here will begin after the completion of TASK1. Therefore, total time would be (t2-t1) + (t4-t3)

// node 2_firstLackOfCallback.js --source=source.txt --dest=dest.txt --n=50000

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

function IsPrime(x){
    
    for(let div = 2; div < x; div++){
        if(x % div == 0){
            return false;
        }
    }
    return true;
}


// <---------------------------- TASK 1 BEGINS ----------------------------> 
let t1 = Date.now();  // No.of milliseconds elapsed since 1 Jan 1970 
console.log("Starting task1 at: "+t1 % 100000); // Getting the time, taking modulus to just show the last 5 on console.

let stext = fs.readFileSync(args.source); // Reading the file
// let dummyText = fs.readFileSync(args.source); // Reading dummyFile of biggerSize in bits&bytes
// console.log(dummyText);

let t2 = Date.now(); 
console.log("Starting task2 at: "+t2 % 100000);

console.log(t2 - t1); // Estimated time to read the file
// <---------------------------- TASK 1 ENDS ----------------------------> 


// <---------------------------- TASK 2 BEGINS ----------------------------> 
let t3 = Date.now();
console.log("Starting task3 at: "+t3 % 100000);

let arr = [];
for(let i = 2; i <= args.n ; i++){     // Check primes and push them in arr array
    if(IsPrime(i)){
        arr.push(i);
    }
} 

let t4 = Date.now();
console.log("Starting task4 at: "+t4 % 100000);
console.log(t4 - t3);
// <---------------------------- TASK 2 ENDS ----------------------------> 
 
// console.log((t2-t1) + (t4-t3));
console.log(t4-t1); // Total Time taken by both tasks

