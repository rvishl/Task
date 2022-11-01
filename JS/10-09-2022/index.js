const text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
const vowel = ['a', 'e', 'i', 'o', 'u'];
const arr = text.split(" ");

const e_words = arr.filter(e => {
    // console.log(e.split(""))
    let e_arr = e.split('');
    e_arr.filter(e => console.log(e))

    // console.log(e_arr);

});
// console.log(arr);