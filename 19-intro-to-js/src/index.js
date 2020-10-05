console.log("Welcome to Mod 3")


/*
 **Questions


 **Why JS?

  - three pillars - Coffee Dad Twitter
 
  1. event handling/listening - listening to stuff going on in the browser (generally user behavior of some sort)
  2. getting data from somewhere else - triggers a request for new data in JSON format
  3. rendering data - creating new HTML, DOM manipulation

  - JSON - JavaScript Object Notation

  - request-response cycle




  - Single Page Applications 
    - a full, dynamic web application that runs without triggering a page reload

 
 **What is JS?



 **How JS?

  - how to load JS into an HTML document


  - debugger and console.log
 
  



 **Some data types
  - type checking
  - typeof variable


 
 - Number


 
 - String




 - Object Literals



 - Array



 - undefined


 ** Variables


 **Functions
  - multiple ways of declaring functions
  - definition vs invocation 



*/

// function declaration
function sayHi(name) {
  console.log(`Hi there ${name}`) // temlate literal
}

// function expression
const sayHello = function(name){
  console.log(`Heloo there ${name}`)
}

// arrow functions
const sayHowdy = name => {
  console.log(`Howdy there ${name}`)
}