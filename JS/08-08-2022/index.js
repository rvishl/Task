// TAsk 1

// const str = "How are you!!!";
// const string = str.split(" ");
// console.log(string.length);

// Task 2
const array = [1, 2, 4, 1, 9, 5, 3, 2];
const sorted_array = array.sort();

//mean
// let sum=0;
// let mean=0;
// for(let i=0; i<array.length; i++) {
//     sum+=array[i];
// }

// mean = sum/array.length;
// console.log(mean);

//median
if(array.length%2 == 0) {
    const median = (array[Math.floor((array.length-1)/2)] + array[array.length/2]) / 2;
    console.log(median);
} else {
    console.log(sorted_array[Math.floor(3.5)])
}



