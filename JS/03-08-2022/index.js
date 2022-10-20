// Swap to numbers
// let a = 30;
// let b = 25;
// {
//     a = a + b;
//     b = a - b;
//     a = a - b;
// }

// console.log(a, b);

// Generate random string
const generateRandom = (length) => {
    let randomStr = "";
    const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    while(randomStr.length < length) {
        let random = Math.random();
        random = random * characters.length;
        random = Math.floor(random);
        // console.log(random);
        const singleCharacter = characters[random];
        randomStr = randomStr + singleCharacter;
    }
    return randomStr;
}

console.log(generateRandom(3));
