// A square of squares

// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… 
// Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task

// Given an integral number, determine if it's a square number:

//     In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// Thought process: 
// first step, google square number and examples of square numbers, from wikipedia:
//  For example, 9 is a square number, since it equals 3^2 and can be written as 3 × 3
// from this example can see that we may have to incorporate the modulus operator, & <- do we have to use?
// function will take a number input
// check for integer type and check that number isn't negative
// function that returns a boolean, true or false if it's a square
// n^2 = n * n, formula for a square number <- we just have to do the opposite in this case
// use squareroot to find if a number is a square number, 
// google how to use squareroot in javascript, solution -> Math.sqrt(n)
// create test using the all the info gathered
