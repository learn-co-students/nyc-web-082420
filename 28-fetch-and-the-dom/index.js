console.log("Fetch")


document.addEventListener("DOMContentLoaded", function(e){
  const baseUrl = "http://localhost:3000/movies/"
  let currentPage = 2

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
        e.target.parentElement.remove()
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


/*

As a user, when I click the "Show Form" button, I should see a form that allows me to enter movie details and the text of the button should change to "Hide Form".

1. modify existing click listener to capture form button clicks
2. build a form
3. slap the form on the DOM
4. change text in button

As a user, when I enter movie information into the form and click submit, that movie should appear on the page and it should persist when I reload the page. Also, the form should empty out.

√1. submit listener
√2. get info out of the form
√3. POST request to create record in DB
√4. add movie to the DOM
5. reset the form

As a user, when I click the "Hide Form" button, the form should disappear and the text in the button should change back to "Show Form".

√1. click listener time
√2. on click, we need to remove the form from the DOM
√3. change text/id of button

As user, when I click "Up Vote", the number should increment on the page and it should persist across page reloads.

√1. change the DOM
2. PATCH request to update the score attribute

*/



















































