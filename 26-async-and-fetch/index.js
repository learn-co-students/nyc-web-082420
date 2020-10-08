console.log("Fetch")


document.addEventListener("DOMContentLoaded", function(e){

  const renderMovies = movies => {
    for(const movieObj of movies){
      renderMovie(movieObj)
    }
  }

  function renderMovie(movieObj){
    const movieLi = document.createElement('li')

    movieLi.classList.add('movie')

    movieLi.innerHTML = `
      <h3>${movieObj.title}</h3>
      <img alt="" src="${movieObj.imageUrl}" />
      <h4>Year: ${movieObj.year}</h4>
      <h4>Genre: ${movieObj.genre}</h4>
      <h4>Score: <span>${movieObj.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose="delete" >&times;</button>
    `

    const movieList = document.querySelector("#movie-list")

    movieList.append(movieLi)
  }


  function clickHandler(){
    const movieList = document.querySelector("#movie-list")

    movieList.addEventListener('click', function(e){
      if(e.target.matches('.up-vote')){
        const button = e.target
        const parentLi = button.parentElement
        const scoreSpan = parentLi.querySelector('span')
        const currentScore = parseInt(scoreSpan.textContent)
        const newScore = currentScore + 1
        
        scoreSpan.textContent = newScore
      } else if(e.target.matches(`[data-purpose="delete"]`)){
        e.target.parentElement.remove()
      } 
    })
  }

  const getMovies = () => {
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movies => renderMovies(movies))
  }

  const createLostBoys = () => {
    const lostBoys = {
      title: "The Lost Boys",
      year: 1988,
      genre: "Thriller",
      score: 0,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81SAKfMU%2BOL._AC_SL1500_.jpg"
    }

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(lostBoys)
    }
    
    fetch("http://localhost:3000/movies", options)
    .then(response => response.json())
    .then(movie => renderMovie(movie))
  }
  
  clickHandler()
  getMovies()

  createLostBoys()

  // renderMovies(movieCollection)
})

// fetch request to the db - get all the movies
// iterate through the movies
// render each one