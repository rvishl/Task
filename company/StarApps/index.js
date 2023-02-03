console.log("StarApps | Assignment");

// Array = [2,1,2,3,1];
// :-> 2 → 2→ 1. 


// Array = [1,6,3,4,5,0,0,0,6]
// :-> 1 → 6 → 5 → 6

// const array = [2, 1, 2, 3, 1];
const array = [5, 2, 1, 2, 5, 1];
// const array = [1, 6, 3, 4, 5, 0, 0, 0, 6];
// console.log(array.length);
const ct = [];
let count = 0;
for(let i=0; i<array.length; i++) {
    count += array[i];
    // console.log(count);
    ct.push(array[i]);
    if((count == array.length)){
        if(count > array.length) {
            break;
        }
    } 
    if (count > array.length) {
        ct.pop(array[i]);
        count-=array[i];
    }
}
console.log(ct);
console.log(count);