// task1 -> Read a file (Disk Process)
// task2 -> Calculate Primes (CPU Process)

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


// Asynchronous Callback
fs.readFile(args.source, function(data){    // While the file is being read from the disk, Task2 will start executing at the same time as it is the working of CPU.

    let t2 = Date.now(); 
    console.log("Starting task1 at: "+t2 % 100000);
    
    console.log(t2 - t1); // Estimated time to read the file

}); // Reading the file asynchronously

// <---------------------------- TASK 1 ENDS ----------------------------> 


// <---------------------------- TASK 2 BEGINS ----------------------------> 

let t3 = Date.now();
console.log("Starting task2 at: "+t3 % 100000);

let arr = [];
for(let i = 2; i <= args.n ; i++){     // Check primes and push them in arr array
    if(IsPrime(i)){
        arr.push(i);
    }
} 

let t4 = Date.now();
console.log("Starting task2 at: "+t4 % 100000);
console.log(t4 - t3);

// <---------------------------- TASK 2 ENDS ----------------------------> 
 
// console.log((t2-t1) + (t4-t3));
console.log(t4-t1); // Total Time taken by both tasks