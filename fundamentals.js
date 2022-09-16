//* 1. how to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'winter';
season = 'summer';

//* 2. conditional statement
//? 6 basic conditions: >, <, ===, !==, <=, >=
//? multiple conditions: &&, ||

if(fatherName === 'arnold' || season === 'summer'){

}
else if(fatherName === 'Arnold'){

}else{

}

//* 3. array
//? array declare, length, index, push, pop
const numbers = [12, 34, 45, 56, 67, 78];
numbers[0] = 100;

//* 4. loop
//? for loop, while loop
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i]
    console.log(number);
}

//* 5. function
function multiply(a,b){
    return a * b;
}
const result = multiply(2,2);

//* 6. object
//? 3 ways to access property by name
const nayok = {
    name: 'sakib khan',
    age: 42,
    movies: ['king khan', 'no. 1 sakib khan']
}
const naMe = 'name';
console.log(nayok.movies); //? access by dot notation (direct by property)
console.log(nayok['age']); //? access via property name string
console.log(nayok[naMe]); //? access via property name in a variable