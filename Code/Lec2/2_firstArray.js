let clargs = process.argv;
let n = parseInt(clargs[2]);

let arr = []; // An array is initialized, size need not to be declared.

for(let i = 0; i < n; i++){ // n -> Length of the array
    let val = parseInt(clargs[i + 3]); // 3rd column that is the 0th index of the array will be the first element of array
    // arr.push(val);
    // console.log(arr[i]);
    arr[i] = val; // Could also be used.
}

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log(arr);
console.log(arr.length);

// Terminal Things
// node firstArray.js 5 10 20 30 40 50