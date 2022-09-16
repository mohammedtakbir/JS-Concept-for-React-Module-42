//* variables
//? 1.var (var is hoisted)
test = 5;
// console.log(test);
var test;

//? let
let first = 12;
// first = test;
// console.log(first)

//? const
const second = 'fixed';
// second = 'reassignable';
// console.log(second)

//* conditional statement
//? basic condtions: <, >, <=, >=., ===, !== (==, != ---> not recommended)
//? multiple condition: &&, ||
/* if(first < 15 && second === 'fixd'){
    first = 100;
    console.log(first);
}else if(first === 10 || second !== 'fixed'){
    first = 200;
    console.log(first)
}else if(first < 20 || second === true){
    first = 'winner'
    console.log(first);
} */

//? switch case
const day = 'fridays';
/* switch(day){
    case 'Saturday': console.log('saturday');
    break;

    case 'sunday': console.log('sunday');
    break;

    case 'monday': console.log('monday');
    break;

    case 'tuesday': console.log('tuesday');
    break;

    case 'wednesday': console.log('wednesday');
    break;

    case 'thursday': console.log('thursday');
    break;

    case 'friday': console.log('friday');
    break;

    default: console.log('cannot find the day you want!')
}
 */
//? ternary operator
/* const money = 100;
const getFood = money > 100 ? 'biriyani' : 'cha-biscuit';
// console.log(getFood)  */

//? multiple ternary operator 
/* const score = 65;
let grade = 
    score >= 80 ? 'A'
    : score >= 70 ? 'B'
    : score >= 60 ? 'C'
    : 'D';
console.log(grade) */

//* array
//? length, index, push, pop, unshift, shift
const numbers = [12, 23, 34, 45, 56, 67, 87, 89, 90];
// console.log(numbers[5]);
numbers[5] = 100;
const test1 = numbers.indexOf(450)
// console.log(test1)
numbers[9] = 300;
// console.log(numbers)
numbers.push(2323, 34546);
numbers.pop()
numbers.unshift(545, 55856);
numbers.shift()
// console.log(numbers)
numbers.reverse(); //? reverse the array element
// console.log(numbers)

//* loop
//? while loop
const array = [12,34,45,56,67,78,89,90,99];
/* let i = 0;
while(i<array.length){
    console.log(array[i])
    i++;
} */

//? for loop
/* for(let i = 0; i < array.length; i++){
    console.log(array[i])
} */

//? do...while loop
/* let i = 0;
do{
    console.log(array[i])
    i++
}while(i<array.length) */

//* function
function sum(a, b){
    return a + b;
}
const result = sum(2, 2);
// console.log(result)

//* array 
const nayok = {
    name: 'sakib khan',
    age: 42,
    movies: ['king khan', 'no. 1 sakib khan']
}
const movies = 'movies';
//? access the object property
// console.log(nayok.name);
// console.log(nayok['age']);
// console.log(nayok[movies])
//? set value
nayok.name = 'anonto jolil';
nayok['age'] = 40;
const moviesName = nayok[movies];
// moviesName[1] = 'no 1. jolil khan'
// console.log(nayok)
//? object.keys(), object.values()
// console.log(Object.keys(nayok), Object.values(nayok))
























