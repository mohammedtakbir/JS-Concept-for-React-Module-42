const products = [
    {name: 'laptop', price: 45000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 15000, brand: 'apple', color: 'black'},
    {name: 'watch', price: 1500, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 500, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 10000, brand: 'canon', color: 'gray'},
];
//? add new element
const newProduct = {name: 'keyboard', price: 600, brand: 'A4Tech', color: 'black'};
const newProducts = [...products, newProduct];
// console.log(newProducts)
//? remove element and create a new array
const remaining = newProducts.filter(p => p.brand !== 'ribon');
// console.log(remaining)

// console.log(JSON.stringify(products))

//* fetch
const url = 'fetch.json';
fetch(url)
.then(res => res.json())
.then(data => display(data))

display = (data) => {
    console.log(data)
}