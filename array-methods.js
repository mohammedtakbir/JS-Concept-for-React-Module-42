const products = [
    {name: 'laptop', price: 45000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 15000, brand: 'apple', color: 'black'},
    {name: 'watch', price: 1500, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 500, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 10000, brand: 'canon', color: 'gray'},
]
//* 1. map
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
// console.log(brands);
// console.log(prices);

//* 2. forEach
// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))
products.forEach(product => {

})

//* 3. filter 
const cheap = products.filter(product => product.price <= 10000);
// console.log(cheap);

const findn = products.filter(product => product.name.includes('n'))
// console.log(findn)

//* 4. find
const special = products.find(product => product.name.includes('n'));
console.log(special)