const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons/`

document.addEventListener('DOMContentLoaded', e => {

  const renderTrainers = trainers => {
    // document.querySelector('main').innerHTML = ''

    for(const trainer of trainers){
      renderTrainer(trainer)
    }
  }

  const renderTrainer = trainer => {
    const trainerDiv = document.createElement('div')
    trainerDiv.classList.add('card')
    trainerDiv.dataset.id = trainer.id

    trainerDiv.innerHTML = `
      <p>${trainer.name}</p>
      <button data-trainer-id="${trainer.id}">Add Pokemon</button>
    `

    const pokemonUl = document.createElement('ul')
    
    for(pokemon of trainer.pokemons){
      const pokeLi = createPokemonLi(pokemon)
      pokemonUl.append(pokeLi)
    }

    trainerDiv.append(pokemonUl)

    document.querySelector('main').append(trainerDiv)
  }

  const createPokemonLi = pokemon => {
    const pokeLi = document.createElement('li')
    pokeLi.innerHTML = `
      ${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
    `

    return pokeLi
  }

  const clickHandler = () => {
    document.addEventListener('click', e => {
      if(e.target.matches('[data-trainer-id]')){
        const button = e.target
        const teamSize = button.nextElementSibling.childElementCount
        const trainerId = button.dataset.trainerId

        if(teamSize < 6){
          const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ trainer_id: trainerId})
          }
          
          fetch(POKEMONS_URL, options)
          .then(response => response.json())
          .then(pokemon => {
            // getTrainers()
            const trainerDiv = document.querySelector(`[data-id="${pokemon.trainer_id}"]`)
            const pokeLi = createPokemonLi(pokemon)
            trainerDiv.querySelector('ul').append(pokeLi)
          })
        } else {
          alert('Team is full, dummy. 🤡')
        }
      } else if(e.target.matches('.release')){
        const button = e.target
        const pokemonId = button.dataset.pokemonId

        const options = {
          method: "DELETE"
        }

        fetch(POKEMONS_URL + pokemonId, options)
        .then(response => response.json())
        .then(pokemon => {
          const pokeLi = document.querySelector(`[data-pokemon-id="${pokemon.id}"]`).parentElement
          pokeLi.remove()
        })
      }
    })
  }
  
  const getTrainers = () => {
    fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(renderTrainers)
  }
  
  clickHandler()
  getTrainers()
})



/*

* When a user loads the page, they should see all
trainers, with their current team of Pokemon.

1. DOMContentLoaded listener
2. GET to /trainers
3. render the trainers (pokemon?)

* Whenever a user hits Add Pokemon and they have
space on their team, they should get a new Pokemon.

1. click listener on the add pokemon button
2. validate current team size
3. on click, make a post request to create a new pokemon for this trainer
4. render the new Pokemon on successful creation


* Whenever a user hits Release Pokemon on a specific
Pokemon team, that specific Pokemon should be released from
the team.

1. click listener on release
2. delete request with the pokemon id
3. remove the li from the dom




<div class="card" data-id="1">
  <p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div>


*/