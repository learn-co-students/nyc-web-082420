console.log("Let's make some dogs... 🐕")

// POJO - Plain Ol' JavaScript Objects

// function walkMe(){
//   console.log("walking")
// }

// const george = {
//   name: "George",
//   breed: "Ewok",
//   speak: function() {
//     console.log('woof woof')
//   },
//   walk: walkMe
// }

// const perky = {
//   name: "Perky",
//   breed: "German Shepherd",
//   speak: function(){
//     console.log('woof woof')
//   },
//   walk: walkMe
// }

// Constructor Function

// function Dog(name, breed){
//   this.name = name
//   this.breed = breed
//   // this.speak = function(){
//   //   console.log(`Hi, my name is ${this.name}`)
//   // }
// }

// Dog.prototype.walk = function(){
//   console.log("Hey, I'm walking here!")
// }

// Dog.prototype.speak = function(){
  // console.log(`Hi, my name is ${this.name}`)
// }

// Dog.puppyEyes = function(){ // equivalent of a class method
  // console.log("gives puppy eyes")
// }

// const george = new Dog("George", "Ewok")
// const perky = new Dog("Perky", "German Shepherd")

// Class

// class Dog{
//   static all = []
  
//   constructor(name, breed){
//     this.name = name
//     this.breed = breed

//     Dog.all.push(this)
//   }

  // speak(){
  //   console.log(`Hi, my name is ${this.name}`)
  // }

//   static puppyEyes(){
//     console.log("gives puppy eyes")
//   }
// }

// const george = new Dog("George", "Ewok")
// const perky = new Dog("Perky", "German Shepherd")

// Subclass

class Animal{
  constructor(name, species){
    this.name = name
    this.species = species
  }

  dance(){
    console.log("Dancing queen 👸🏼")
  }
}

class Dog extends Animal{
  constructor(name, breed){
    super(name, Dog.species)
    this.breed = breed
  }
  
  static species = "canine"

  speak(){
    console.log(`Hi, my name is ${this.name}`)
  }
}

const george = new Dog("George", "Ewok")
const perky = new Dog("Perky", "German Shepherd")