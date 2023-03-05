//1.  What are the differences between mutating array methods and non-mutation array methods in JavaScript. 
//List 5 array methods that fall under each of them.

//Mutation in the context of JavaScript arrays is basically changing the array itself instead of returning a new array with the new changes whereas Non-Mutation is returning a whole new array which has all the changes.
// Mutation Methods in JavaScript are array.copyWithin(), array.fill(), array.pop(), array.push(), array.reverse(), array.shift(), array.sort(), array.splice() and array.unshift().
// Non-Mutating Methods in JavaScript are array.concat(), array.includes(), array.indexOf, array.join(), array.lastIndexOf, array.slice(), array.toString() and array.toLocaleString().


//2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

//Add ‘Kotlin’ to the end of the array
languages.push('Kotlin');
console.log(languages)

//Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java');
console.log(languages)

//Remove the first item in the array
languages.shift();
console.log(languages)

//Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages)

//Replace 'PHP' with 'Go' and 'Rust'
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages)


//3.  What will be the value of fruit after calling the function changeFruit?

let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
console.log(changeFruit(fruit))
//[ 'apple', 'mango', 'orange' ]


//4.  Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
//e.g., max([4, 5, 10, -2]) // maximum value is 10

let numberOfData = Math.max(78, 54, 95, 38, 67, 90);
console.log('The maximum number is ' + numberOfData)


//5.  Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g. valTimesIndex([1,2,3]) // [0,2,6]
// 	valTimesIndex([5,10,15]) // [0,10,30]

function valTimesIndex(num){
    return num.map((val,index,) => val*index)  
};


let array = [12, 40, 9];
let multipliedResult = valTimesIndex(array);


console.log(multipliedResult)
