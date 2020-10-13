console.log("Fetch")


document.addEventListener("DOMContentLoaded", function(e){
  const baseUrl = "http://localhost:3000/api/v1/movies/"

  const renderMovies = movies => {
    for(const movieObj of movies){
      renderMovie(movieObj)
    }
  }

  function renderMovie(movieObj){
    const movieLi = document.createElement('li')

    movieLi.classList.add('movie')
    movieLi.dataset.movieId = movieObj.id

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
    document.addEventListener('click', function(e){
      if(e.target.matches('.up-vote')){
        const button = e.target
        const parentLi = button.parentElement
        const scoreSpan = parentLi.querySelector('span')
        const currentScore = parseInt(scoreSpan.textContent)
        const newScore = currentScore + 1
        
        const movieId = parentLi.dataset.movieId
        
        // scoreSpan.textContent = newScore //  this is optimistic

        const options = {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({ score: newScore })
        }

        fetch(baseUrl + movieId, options)
        .then(response => response.json())
        .then(movieObj => {
          const movieLi = document.querySelector(`[data-movie-id="${movieObj.id}"]`)
          const scoreSpan = movieLi.querySelector('span')
          scoreSpan.textContent = movieObj.score 
        })

      } else if(e.target.matches(`[data-purpose="delete"]`)){
        const movieId = e.target.parentElement.dataset.movieId

        const options = {
          method: "DELETE"
        }
        
        fetch(baseUrl + movieId, options)
        .then(response => response.json())
        .then(_data => {
          e.target.parentElement.remove()
        })
        
      } else if(e.target.matches('#show-form')){
        const button = e.target
        const newMovieForm = document.createElement('form')
        newMovieForm.id = 'new-movie-form'
      
        newMovieForm.innerHTML = `
          <label>Title: </label>
          <input type="text" name="title">
          <br>
          <label>Year: </label>
          <input type="number" name="year">
          <br>
          <label>Genre: </label>
          <input type="text" name="genre">
          <br>
          <label>Image URL: </label>
          <input type="text" name="imageUrl">
          <br>
          <input type="submit" value="Add Movie">
        `

        button.insertAdjacentElement('afterend', newMovieForm)
        button.textContent = "Hide Form"
        button.id = 'hide-form'
      } else if(e.target.matches('#hide-form')){
        const button = e.target

        document.querySelector('#new-movie-form').remove()

        button.textContent = "Show Form"
        button.id = "show-form"
      }
    })
  }

  const submitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()
      const form = e.target

      const title = form.title.value
      const year = form.year.value
      const genre = form.genre.value
      const imageUrl = form.imageUrl.value

      const newMovie = { title: title, year: year, genre: genre, imageUrl: imageUrl, score: 0 }

      form.reset()
      
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(newMovie)
      }
      
      fetch(baseUrl, options)
      .then(response => response.json())
      .then(movieObj => {
        renderMovie(movieObj) // pessimistic rendering because we're waiting for the DB to get back to us
      })

    })
  }

  const getMovies = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(movies => renderMovies(movies))
  }
  
  clickHandler()
  submitHandler()
  getMovies()
})



















































