console.log("Task 2");

const  arr1 = [10, 43, 33, 49, 21, 42, 45, 12, 16, 19];
var big = arr1[0];

for (let i=1; i<arr1.length; i++) {
    if (big < arr1[i]) {
        big = arr1[i];
    }
}

console.log(big);