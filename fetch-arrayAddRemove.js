//* JSON---> stringfy, parse
const nayok = {
    name: 'sakib khan',
    age: 42,
    movies: ['king khan', 'no. 1 sakib khan']
}
const nayokJSON = JSON.stringify(nayok);
const nayokObject = JSON.parse(nayokJSON);
// console.log(nayokJSON)
// console.log(nayokObject)

//* 2. fetch
/* fetch('url')
.then(response => response.json())
.then(data => console.log(data)); */

//* 3. object keys and object values
const keys = Object.keys(nayok);
const values = Object.values(nayok);
// console.log(keys, values)

//* for
const numbers = [12, 23, 34, 45, 56, 67];
// numbers.forEach(number => console.log(number))
const getReturn = numbers.map(number => number * 2);
// console.log(getReturn)

//* use for of on array like object (arguments, getElementByClassName, querySelectorAll)
//* loop on an object using for in to get keys and values

//* add or remove from an array
const products = [
    {name: 'laptop', price: 45000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 15000, brand: 'apple', color: 'black'},
    {name: 'watch', price: 1500, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 500, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 10000, brand: 'canon', color: 'gray'},
]
//? add new element to an array
/* const newProduct = {name: 'webcam', price: 1000, brand: 'logitech', color: 'white'};
products[5] = newProduct;
console.log(products) */
//? copy products array and then add newProduct
const newProduct = {name: 'webcam', price: 1000, brand: 'logitech', color: 'white'};
const newProducts = [...products, newProduct];
// console.log(newProducts)

//? create a new array without one specific item
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining)