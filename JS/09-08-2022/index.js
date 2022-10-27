const product = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' }
]

// Task 1
let sum=0;
product.forEach(e => { if( typeof e.price === 'number' ) sum += e.price; });
console.log(sum);

// Task 2
const filter_product = product.filter(e => {
    if(!Number.isInteger(e.price))
        return true;
    else 
        return false;
});
console.log(filter_product);

// Task 3
const find_product = product.find(e => {
    if(e.product == "avocado") {
        return true;
    } else {
        return false;
    }
});

console.log(find_product);
console.log(find_product.price);