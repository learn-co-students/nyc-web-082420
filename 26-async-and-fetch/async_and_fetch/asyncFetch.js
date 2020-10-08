console.log("async and fetch")

// Asynchrony

function iAmSync(){
  console.log("starting")
  
  for ( let i = 0; i < 10000000; i++){
    let d = new Date()
  }
  
  console.log("all done!")
}

function iAmAsync(){
  console.log("starting")

  setTimeout(function(){
    console.log("Inside the timeout!")
  }, 3000)

  console.log('outside the timeout')
}

// Fetch


const url = "https://pokeapi.co/api/v2/pokemon/pikachu"

fetch(url)
.then(response => response.json())
.then(pokemon => {
  renderPokemon(pokemon)
})


renderPokemon = pokemonObj => {
  console.log("Whole object:", pokemonObj)
  console.log("Name: ", pokemonObj.name)
  console.log("Species: ", pokemonObj.species)
}

// let pikachu = "I'm yellow"
// console.log("Before", pikachu)

// let promise1 = fetch(url)

// let promise2 = promise1.then(response => response.json())
// // let promise2 = promise1.then(function(response) { response.json() })

// let promise3 = promise2.then(pokemon => {
//   pikachu = pokemon
//   console.log("During", pikachu)
// })
// // let promise3 = promise2.then(function(pokemon) { console.log(pokemon) })

// console.log("After", pikachu)