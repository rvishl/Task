// Assignment 1
// const n = prompt("Enter number to check prime or not");
// let ct=false;
// for(let i=2; i<=n/2; i++) {
//     if(n%i == 0) {
//         ct = true;
//     }

// }
// if (ct == false) console.log("Prime number");
// else console.log("Not a Prime number");

//Assingment 2
for(let i=1; i<=100; i++) {
    if(i%15 == 0) {
        console.log(i + " FizzBuzz");
    } else if(i%3 == 0) {
        console.log(i + " Fizz");
    } else if(i%5 == 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i + " Number");
    }    
}
