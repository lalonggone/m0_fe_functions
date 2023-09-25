// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
  // Okay so this one seems really messed up to me.. I just made it look like a regular function declaration.
  // Kept the function keyword b/c its descriptive
  // Changed console.log... to -> return "Hello, what is your name?"; and put it on the next line. No parentheses.
  // Added curly brace on next line and console.log(askForName()) on the line after that
  function askForName() { 
    return "Hello, what is your name?";
  }
  console.log(askForName())


// EX 2:
  // Yikes this one was messy, too. Not sure if I found everything but the code runs so..
  // Indented var and return for better readability.
  // Added a semicolon after the var sum
  // Wrapped the two functions(?) in separate console.logs to print the sum
  function addThreeNums(first, second, third) {
    var sum = first + second + third;
    return sum;
  }
  
  
  console.log(addThreeNums(1, 2, 3))
  console.log(addThreeNums(4, 2, 7))


// EX 3:
// I changed "func" to "function" because func is not a command.. and moved the last curly brace down
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


//  EX 4:
  // Just moved some indentation around and put the curly braces in the right spots.
  function average(num1, num2){
    var sum = num1 + num2;
    var avg = sum / 2;
    return avg
}