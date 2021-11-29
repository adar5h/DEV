let clargs = process.argv;
let n = parseInt(clargs[2]);


for(let i = 2; i <= n; i++){

    let isPrime = ISPRIME(i);
    if(isPrime){
        console.log(i);
    }
}

function ISPRIME(x){

    for(let div = 2; div*div <= x; div++){
        if(x%div==0){
            return false;
        }
    }

    return true;
}


// for(let i = 2; i <= n; i++){ // intialization is from 2, Because 1 is not a prime number.

//     let isPrime = true;

//     for(let div = 2; div*div <= i; div++){
        
//         if(i % div == 0){
//             isPrime = false;
//             break;
//           }
//     }
    
//     if(isPrime==true){
//         console.log(i);
//     }

// }