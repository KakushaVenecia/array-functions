// QUESTION TWO
// Here is an array of languages:
 let languages= ["C#","Javascript", "Ruby", "PHP", "Python"]
// Perform this operation on them
// Add ‘Kotlin’ to the end of the array
function addKotlin(languages) {
    languages.push("Kotlin")
    return languages
} 
console.log(addKotlin(languages))
// Add ‘Java’ after ‘Ruby’

function addJavaAfterRuby(languages){
    languages.splice(3, 0, "Java");
    return languages
}
console.log(addJavaAfterRuby(languages))
// Remove the first item in the array

function removeFirstItem (languages){
    languages.shift();
    return languages
}
console.log(removeFirstItem(languages))
// Add ’Scala’ and ‘Swift’ to the beginning of the array
function addScalaSwiftBeginning(languages){
    languages.unshift("Scala", "Swift");
    return languages
}
console.log(addScalaSwiftBeginning(languages))

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
 function replacePhpWithGoRust(languages){
    languages.splice(5, 1, "Go", "Rust");
    return languages
 }
 console.log(replacePhpWithGoRust(languages))


// QUESTION FOUR
// Write a function that accepts an array of numbers as an argument.
//  Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10

const arrayOfNumbers = [3, 8, 9, 15];
function maxValue(arrayOfNumbers) {
  let max = arrayOfNumbers[0]; // Assuming the first element is the maximum
//   looping through the array 
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > max) { // If the current element is greater than max
      max = arrayOfNumbers[i]; // Updating max to the current element
    }
  }
  
  console.log(max);
}
maxValue(arrayOfNumbers)

//  OR 

const arrayOfNumber = [3, 8, 9, 19];

function maxValue(arrayOfNumber) {
  const max = Math.max(...arrayOfNumber);
  console.log(max);
}

maxValue(arrayOfNumber); 


// QUESTION FIVE
// Write a function called valTimesIndex which accepts an array of numbers
//  and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]
const originalArray = [1,2,3,4,6]
function valTimesIndex (originalArray){
     const timesArray = originalArray.map((value, index) => value * index);
     return timesArray;
    }
console.log(valTimesIndex(originalArray)); 