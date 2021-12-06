// npm init
// npm install minimist
// node 1_firstJSON.js

let minimist = require("minimist");
let args = minimist(process.argv);

// JSON => JavaScript Object Notation
// JSON means saving the same data in same format as of JavaScript Objects

let s1 = {              // s1 is an object. 
    name: 'Dolcy',     // Name & age are properties, aka data members.
    age: 34
}

let s2 = {              // s2 is an object. 
    name: 'Yolo',     // Name & age are properties, aka data members.
    age: 25
}

let way1 = [s1,s2]; // JSO => (JavaScript Object). An array of objects. Even an array is an object.

let json = JSON.stringify(way1); // JSON => (JavaScript Object Notation)

// console.log(s1.name);
// console.log(s1.age);

// console.log(s2.name);
// console.log(s2.age);

// console.log(way1);
// console.log(json);

let arr = [
    {
        name: "John",
        age: 10
    },
    {
        name: "Doe",
        age: 12
    },
    {
        name: "Flow",
        age: 11
    }
]

// console.log(arr);
// console.log(arr[0].name);
// console.log(arr[0].age);

// console.log(arr[1].name);
// console.log(arr[1].age);

// console.log(arr[2].name);
// console.log(arr[2].age);