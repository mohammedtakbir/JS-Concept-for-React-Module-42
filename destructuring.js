//* 1. array destructuring
const numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90];
// const x = numbers[0];
// const y = numbers[1]
// console.log(x, y)
const [a, b] = [10, 20] //? directly array thakte pare
const [x, y, ...rest] = numbers; //? variable er nam thakte pare jeta 1ta array
// console.log(x, y, rest)
// console.log(a, b)

function boxify(num1, num2){ 
    const num = [num1, num2]
    return num;
}
// const [first, second] = [10, 20]
const [first, second] = boxify(10, 20); //? function er array thakte pare

// console.log(boxify(12, 45))
// console.log(first)
const nayok = {
    name: 'sakib khan',
    age: 42,
    movies: ['king khan', 'no. 1 sakib khan']
}
const [fistMovies, secondMovies] = nayok.movies; //? object er vitore array thakle
// console.log(fistMovies, secondMovies)

//* object destructuring
const {name, q, id} = {name: 'alu', q: 10, id: 75};
// console.log(q, name, id)

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
        wath: {
            color: 'black',
            brand: 'casio',
            year: [2020, 2021, 2022]
        }
    }
}
const {machine, ide} = empolyee;
const {address, weight} = empolyee.specification;
const [firstlanguage, secondLanguage, thirdLanguage] = empolyee.language;
// const [lastYear] = empolyee.specification.watch
// console.log(lastYear)
const {brand} = empolyee.specification.watch?.brand;
console.log(brand)