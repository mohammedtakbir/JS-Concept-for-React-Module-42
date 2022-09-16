const numbers = [12, 34, 45, 56, 67, 78];
const nayok = {
    name: 'sakib khan',
    age: 42,
    movies: ['king khan', 'no. 1 sakib khan']
}
//* 1. template string
const about = `my name is ${nayok.name}. i am ${nayok.age} year old. my favourite number is ${numbers[2]}. my favourite movie is ${nayok.movies[1]}`;
// console.log(about)

//* 2. arrow function
const getFiftyFive = () => 55;
const res = getFiftyFive();
// console.log(res)

const isEven = x => x % 2 === 0;
// const result = isEven(31);
// console.log(result)
const addSixtyFive = num => num + 65;
const addThree = (a, b, c) => a + b + c;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//* 3. spread operator
// const newNumber = numbers;
const newNumber = [400, ...numbers, 1000]
numbers.push(999)
numbers.push(2222)
console.log(numbers)
console.log(newNumber)

//? create a new array from an older array and add an element
const currentNumbers = [...numbers, 55]
// console.log(currentNumbers)

