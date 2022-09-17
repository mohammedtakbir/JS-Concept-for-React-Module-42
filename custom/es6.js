//* template literals
const nayok = {
    name: 'sakib khan',
    age: 42,
    movies: ['king khan', 'no. 1 sakib khan'],
    test: function () {
        console.log(this.movies)
    },
    activities: () => {
        console.log(this.document);
    }
};
const about = `my name is ${nayok.name}. iam ${nayok.age} years old and my favourite movie is ${nayok.movies[1]}`;
// console.log(about)

//* arrow function
const sum = (a, b) => a + b;
const res = sum(1, 2);
// console.log(res)

/* const multiLineArrow = (x, y) => {
    const sum = x + y;
    return sum;
}
const result = multiLineArrow(5, 5); */
// console.log(result)
// nayok.activities();
// nayok.test()

//* spread operator
let num1 = [12, 23, 34, 45, 56, 67];
let num2 = [435, 567, 788, 8900];
// const num3 = num2;
// num3.push(5000);
// console.log(num3, num2);
let num3 = [9999, ...num1, 5555,...num2, 1111];
num3.push(8888);
// console.log(num1, num2)
// console.log(num3)
num1 = num1.concat(num2);
num2.push(666);
// console.log(num1, num2)

let obj1 = {foo: 'bar', x: 12};
let obj2 = {foo: 'baz', y: 34};
let cloneObj = {...obj1};
cloneObj.foo = 'bas';
// console.log(cloneObj, obj1)
let mergeObj = {...obj1, ...obj2};
// console.log(mergeObj)
const empolyee = {
    ide: 'VS code',
    designation: 'Developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        hight: 76,
        weight: 67,
        address: 'Kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            brand: 'casio',
            year: [2020, 2021, 2022]
        }
    }
};
const newObj = {...nayok, ...empolyee};
console.log(newObj)