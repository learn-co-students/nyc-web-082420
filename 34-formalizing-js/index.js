console.log("functions & stuff")

/*

1. SCOPE

  a. Global Scope
  b. Function Scope
  c. Block Scope

2. HOISTING

3. VARIABLE DECLARATION

4. FIRST CLASS FUNCTIONS

  a. callbacks
  b. closures
  c. higher order functions

5. PASS BY VALUE VS PASS BY REFERENCE

  a. pass by value
  b. pass by reference

*/

// ---------------------------------------------------------------------------------------------------------------------------------

// 1. SCOPE
/* 
- Lexical scoping uses the location where a variable is declared within the code to determine where that variable is available
- nested function have access to variables declared in their outer scope
- function can reach "up" to higher scope to access variables declared there, but the reverse does not work
- Lexical Scoping means that in a nested group of functions, 
the inner function have access to the variables and other resources of their parent scope.
*/

  // a. global
  // variables declared in the global scope are available to any nested function

  // const name = "Steven"

  // function sayName(){
    // console.log(`Hi there ${name}`)
  // }



  // b. Function Scope
  // variables declared in function scope are visible within the function and any nested functions inside of it, but not visible from outside of the function
  
  // function sayName(){
  //   const firstName = "Steven"
  //   console.log(`Hi there ${firstName}`)
  // }

  // console.log(firstName)


  // c. Block Scope
  // variables declared in block scope are visible within the block and any nested functions inside of it, but not visible from outside of the block

  // if(true){
  //   const firstName = "Steven"
  //   console.log(`Hi there ${firstName}`)
  // }

  // console.log(firstName)

// ---------------------------------------------------------------------------------------------------------------------------------
// 2. HOISTING
/* 
when JS is being compiled, certain functions and variables are "hoisted" to the top of whatever scope they're in - variable definitions don't come along for the ride
*/

// console.log(dog)

// var dog = "george"

// console.log(dog)

bark()

function bark(){
  console.log('woof woof')
}

// const bark = function(){
//   console.log('woof woof')
// }

// ---------------------------------------------------------------------------------------------------------------------------------
// 3. VARIABLE DECLARATION
  // a. var

  // just don't use var
  // allows for both redeclaration and redefinition

  // b. let
  // this should be used if the value of the variable will change
  // allows you to redefine a variable

  let dog = "george"
  dog = "perky"
  

  // c. const
  // cannot redeclare or redefine
 
  const person = "Steven"
  // person = "Sean"
  // const person = "Hasibul"

  const book = {
    title: "Harry Potter"
  }

  book.author = "Just Kidding Rowling"

  
// ---------------------------------------------------------------------------------------------------------------------------------
// 4. FIRST CLASS FUNCTIONS

  /* 
  languages are said to treat functions as first class citizens 
  when they treat functions like other objects, meaning they can be
  assigned to variables, they can be passed around as arguments,
  or they can be assigned as properties inside objects.
  */

  // a. callbacks 
  // when functions are passed as arguments to other functions

  // b. higher order functions
  // functions that accept functions as parameters or that return other functions
  
  function multiplier(n){
    return function(m){
      return n * m
    }
  }
  
  // c. closures
  // a closure is when a function is able to remember and access its
  // scope even when that function is executing outside of its original scope
  // a function with a backpack, a function with baggage


  let doubler = multiplier(2) 

// ----------------------------------------------------------------------
// 5. PASS BY VALUE VS PASS BY REFERENCE

  // a. pass by value

  // primitives (numbers, strings, undefined, booleans, null) are pass by value meaning a new copy of them is created




  // b. pass by reference

  // objects (including arrays and functions) are pass by reference meaning two different variables point to the same object

 