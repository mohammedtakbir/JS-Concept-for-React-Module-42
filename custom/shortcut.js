//* falsy---> 0, '', ``, "", null, undefined, NaN, false, -0
/* let x = ``;
if(!x){
    console.log('falsy')
}else{
    console.log('truthy');
} */

//* truthy---> [], {}, ' ', ` `, " ", true, '0', 'false', 23, -45
/* let y = true;
if(y){
    console.log('truthy')
}else{
    console.log('falsy')
} */

//* shortcut for number to string conversion
let a = 55;
// console.log(a)
// console.log(a + '') //? number to string

let b = '34';
// console.log(b);
// console.log(+b); //? string to number

let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();

//* toggle boolean
isActive = !isActive
// console.log(isActive);

isActive && showUser();
isActive || hideUser();