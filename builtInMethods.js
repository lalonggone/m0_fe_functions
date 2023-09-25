// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes() method is called on the string "Hello World" 
// We are passing the string "Hello" as an argument to the includes method
// The return value is true
"Hello World".includes("Hello");

// The endsWith() method is called on the string "Hello World"
// We are passing the string "Hello" as an argument again.. but this time to the endsWith method
// The return value is false 
"Hello World".endsWith("Hello");

// The endsWith() method is called on the string "Hello World" again
// We are passing the the string "rld" as an argument to the "endsWith" method
// The return value is false
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The toLowerCase() method is called on the sentence variable that stores the string "Hello, this is a SENTance,"
// The method returns the sentance in all lowercase ...

var sentance = "Hello, this is a SENTAnce."
console.log(sentance.toLowerCase());



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.


var evenNumbers = [2, 4, 6, 8, 10];
var fruits = ["apple", "banana", "cherry", "date"];

// The push() method is called on the numbers variable and adds another number to the array. In this case the number is 12. 
// The return value would be a list of even numbers from 2 to 12.
var newNumber = numbers.push(12);

// The pop() method is called on the fruits variable, removing the last string in the array. In this case, "date" is removed.
// The return value will be "apple, banana, cherry"
var removedFruit = fruits.pop();