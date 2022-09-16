const products = [
    { name: 'laptop', price: 45000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 15000, brand: 'apple', color: 'black' },
    { name: 'watch', price: 1500, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 500, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 10000, brand: 'canon', color: 'gray' },
];
//* map()
const brandName = products.map(p => p.brand);
// console.log(brandName);
const price = products.map(p => p.price);
// console.log(price)

const emptyArray = [];
const test = emptyArray.map(e => e);
// console.log(test)

//* forEach()
/* products.forEach(p => {
    console.log(p.name)
}) */

//* filter() 
const priceFilter = products.filter(p => p.price <= 10000);
// console.log(priceFilter); 

//* find()
const findBrand = products.find(p => p.brand === 'casio');
// console.log(findBrand);

//* reduce()
const numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90]
const reduce = numbers.reduce((previous, current) => previous + current, 0);
// console.log(reduce)