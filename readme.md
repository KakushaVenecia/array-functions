### QUESTION ONE 
##### What are the differences between mutating array methods and non-mutation array methods in JavaScript.
 - Mutating array methods modify the original array directly while non mutating array methods return a new array without modifying the original array. 


###### List 5 array methods that fall under each of them.
 
###### Mutating array methods

- push(): adds one or more elements to the end of an array and modifies the original array

- pop(): removes the last element from an array and modifies the original array. 

- splice(): removes, adds or replaces elements from an array and modifies the original array.

- shift(): removes the first element from an array and modifies the original array

- sort(): sorts the elements of an array in place and modifies the original array.

###### Non- mutating array methods

- concat(): concatenates two or more arrays and returns a new array.
Example:


- slice(): returns a shallow copy of a portion of an array selected from start to end.

- map(): creates a new array with the results of calling a provided function on every element in the array.

- filter(): creates a new array with all the elements that pass the test implemented by the provided function.

- reduce(): executes a reducer function on each element of the array, resulting in a single output value.

### QUESTION THREE
#### What will be the value of fruit after calling the function changeFruit
 let fruit = ["apple", "mango", "banana"];  function changeFruit(fruit) {
      fruit[2] = "orange";
   return fruit;
 }

- [ 'apple', 'mango', 'orange' ]