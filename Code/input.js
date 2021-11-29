// 3. Input


// To take input through Command Line Arguments in JavaScript, process.argv is used. Just like we use Scanner class in Java to take input.
let args = process.argv;
// console.log(args);

// let i = args[2];
// // console.log(i);

// console.log("At 0 " + args[0]);
// console.log("At 1 " + args[1]);
// console.log("At 2 " + args[2]);
// console.log("At 3 " + args[3]);
// console.log("At 4 " + args[4]);



//  Everything is coming as a string in JS

let i = args[2];
console.log("Input is "+i);
console.log("Typeof of Input is "+ typeof i);
i = i + 30;
console.log("Value of i is "+i);
console.log("Typeof of i is also "+ typeof i);

let j = parseInt(args[2], 10); // As everything is coming as a string, parseInt(string, radix) function is used to parse the given string into a number;
console.log("Input is "+j);
console.log("Typeof of Input is "+ typeof j);
j = j + 30;
console.log("Value of j is "+ j);
console.log("Typeof of j is also "+ typeof j);
