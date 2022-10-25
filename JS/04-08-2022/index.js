// Task 1

// const checkVowel = (word) => {
//     let vowel = 0;
//     for(let i=0; i<word.length; i++) {
//         const single_character = word[i];
//         if(single_character == 'a' || single_character == 'e' || single_character == 'i' || single_character == 'o' || single_character == 'u') {
//             vowel = vowel + 1;
//         }
//     }
//     return vowel;
// }

// const getMax = (...word) => {
//     let maxCount = checkVowel(word[0].toLowerCase());
//     let maxString = word[0];
//     for(let i=0; i<word.length; i++) {
        
//         const single_count = checkVowel(word[i].toLowerCase());
        
//         if(single_count > maxCount) {
//             maxCount = single_count;
//             maxString = word[i];
//         }
//     }
    
//     return maxString;
// }

// console.log(getMax('aei', 'AEIO', 'Elephant', 'Apple', 'AEIOU'));

// TASK 2

const parent = (a) => {
    const child = (b) => {
        const grandChild = (c) => {
            console.log(a*b*c);            
        }        
        return grandChild;
    }    
    return child;
}

console.log(parent(2)(3)(4));
