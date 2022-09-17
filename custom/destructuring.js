const numbers = [12, 234, 54, 56, 6787, 90];
const [firstNum, secondNum] = numbers;
// console.log(firstNum, secondNum);
const [num1, num2] = [12, 23, 45, 56, 67];
// console.log(num1, num2)
const [, , , , highest] = numbers; //? skip the element
// console.log(highest)

const [, , third, ...rest] = numbers; //? using spread operator(...)
// console.log(third, rest);

function arrayFunction() {
    return [98, 65, 23, 58, 452, 97, 21, 378];
}
const [, , , , largest, , lowest] = arrayFunction();
// console.log(largest, lowest);

//? swaping values
let a = 10;
let b = 20;
[a, b] = [b, a];
// console.log(a, b);

//? object er vitore jodi array thake
const nayok = {
    name: 'sakib khan',
    age: 42,
    movies: ['king khan', 'no. 1 sakib khan']
}
/* const movies = nayok.movies;
const [firstMovie] = movies;
console.log(firstMovie) */
const [, secondMovie] = nayok.movies;
// console.log(secondMovie)

//* object destructuring
// const {name, age} = {name: 'takbir', age: 22};

/* const person = {name: 'takbir', age: 22, country: 'bangladesh'};
let name, age, country;
({name, age, country} = person);
// console.log(name, age, country) */

//? using a new variable name
const person = {name: 'takbir', age: 22, country: 'bangladesh'};
const {name: foo = 'mohammed', country: bar} = person;
// console.log(foo, bar)





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
const {year} = empolyee.specification.watch;
// console.log(year[0] = 2222)