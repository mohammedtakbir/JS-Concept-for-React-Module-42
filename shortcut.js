//* falsy ---> false, '', 0, null, undefined, NaN
//* truthy --> true, '0', 'false', {}, []

//* check truthy
/* const x = 5;
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
} */
//* check falsy 
/* const y = 0;
if(!y){
    console.log('falsy')
}else{
    console.log('truthy')
} */

const money = 800;
const myVar = 111;
/* let food;
if(money > 100){
    food = 'biriyani'
}else{
    food = 'cha biscuits'
}
console.log(food) */
//* ternary operator
let food1 = money > 100 ? 'biriyani' : 'cha-biscuit';
// console.log(food1)
//? multiple login with ternery operator
let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink)

//* shortcut for number to string conversion
const num1 = 50;
// console.log(50);
const numStr = num1 + '' //? convert number to a string
// console.log(numStr);

//* shortcut for string to number conversion
const input = '560';
// console.log(Number(input))
const inputNum = +input;
// console.log(inputNum)

let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();

//* use &&---> if the left side is true then right side will be executed
// isActive && showUser() //? ekhane isActive er man true hole showUser() function execute hobe.false hole execute hobe na

//* use ||---> if the left side is false then right side will be executed
// isActive || showUser() 

//* toggole boolean
isActive = !isActive;
console.log(isActive)