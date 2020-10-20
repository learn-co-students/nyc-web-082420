console.log("this is so much fun!")

/************ Execution Context ***********************/

/* In JavaScript, execution context is an abstract concept that holds information about the environment within which the current code is being executed.

Every Execution Context entails the variables, objects, and functions available at a particular time and also contains a reference to a this object. 

`this` is determined *contextually* at the time of invocation.
*/


/************ Default Binding with a Standalone Function Invocation ***********************/

// in a simple function call, `this` will be the window object (or the global object in Node)
// the default binding for a simple function call in the global context will be the window object

function whatIsThis(){
  console.log("This:", this)
}


/************ Implicit Binding with Function called on a Context Object **********/

// `this` references the object executing the current function, we can call this object the "context object" or the "calling object"

function sayTitle(){
  console.log(`My title is ${this.title}`)
}

const brave = {
  title: "Brave New World",
  author: "Aldous Huxley",
  speak: sayTitle
}

const hp1 = {
  title: "Harry Potter 1",
  author: "Just Kidding Rowling",
  speak: sayTitle
}


// note - a function can lose its implicitly bound this as in the case of a callback
// the callback loses its implicit this binding to the object

// document.querySelector("#header").addEventListener('click', brave.speak)
document.querySelector("#header").addEventListener('click', sayTitle.bind(brave))


/************ Explicit binding with Bind/Call/Apply ******************/

// thisArg is an object we want to be used as the `this` object in a given context


// brave.speak.call(hp1)
// sayTitle.call(hp1)

// function sayAuthorAndLocation(location, date){
//   console.log(`I was written by ${this.author} in ${location} on ${date}`)
// }

// sayAuthorAndLocation.apply(hp1, ['Manchester', "Dec 1, 1995"])

// bind returns a bound function with the this arg permanently set
brave.speak.bind(hp1)


/************ Constructor Function Called with New Keyword ***********/

// one of the things the `new` keyword does is that it creates an empty POJO and binds it as the `thisArg` of the constructor function


function Book(title, author){
  this.title = title
  this.author = author
}

// class Book{
//   constructor(title, author){
//     this.title = title
//     this.author = author
//   }
// }

let lotr = new Book("LOTR", "JRRT")


/************ Arrow Functions ****************************/

// arrow functions DO NOT get their own `this`, they get it from the enclosing (function or global) scope
// cannot use `call`, `apply`, or `bind` with arrow function
// arrow functions are not great candidates to be used inside objects if you need to reference the calling object
// the behavior of arrow functions with regard to this is more predictable



const someFunction = () => {
  console.log("this:", this)
}

window.author = "Steven Doran"

const stranger = {
  self: this,
  title: "Stranger in a Strange Land",
  author: "Robert Heinlein",
  printBookTitle: function(){
    console.log("This is: ", this)
    console.log(`The title of the book is ${this.title}.`)
  },
  printBookAuthor: () => {
    console.log("This is: ", this)
    console.log(`This book was written by ${this.author}`)
  }
}

const infinite = {
  author: "That David guy",
  sayAuthor: stranger.printBookAuthor
}














































