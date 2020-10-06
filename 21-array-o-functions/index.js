function wakeDog(dogName, dogBreed){
  console.log(`Wake ${dogName} the ${dogBreed}`)
  return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed){
  console.log(`Leash ${dogName} the ${dogBreed}`)
  return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed){
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName, dogBreed){
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName, dogBreed){
  console.log(`Walk home with ${dogName} the ${dogBreed}`)
  return `Walk home with ${dogName} the ${dogBreed}`
}

// function unleashDog(dogName, dogBreed){
  // console.log(`Unleash ${dogName} the ${dogBreed}`)
  // return `Unleash ${dogName} the ${dogBreed}`
// }

const unleashDog = (dogName, dogBreed) => {
  console.log(`Unleash ${dogName} the ${dogBreed}`)
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

// function exerciseDog(dogName, dogBreed){
//   // for(const fn of routine){
//   //   fn(dogName, dogBreed)
//   // }

//   // routine.forEach(function(item){
//   //   item(dogName, dogBreed)
//   // })

//   return routine.map(function(item){
//     return item(dogName, dogBreed)
//   })
// }

const exerciseDog = (dogName, dogBreed) => {
  return routine.map(fn => {
    return fn(dogName, dogBreed)
  })
}