console.log("HEY YOU GUYS!!")

// 1. create the HTML for a goonies - li etc.
// 2. put it up on the DOM somehow
  // get the ul from the DOM
  // append the new LI to the UL

const gooniesObj = {
  title: "The Goonies",
  imageUrl: "https://i.etsystatic.com/7965399/r/il/e7eaf6/1514626619/il_570xN.1514626619_mvx9.jpg",
  year: 1985,
  genre: "Adventure",
  score: 0
}


function renderMovie(movieObj){
  const movieLi = document.createElement('li')

  // movieLi.className = "movie"
  movieLi.classList.add('movie')

  movieLi.innerHTML = `
    <h3>${movieObj.title}</h3>
    <img alt="" src="${movieObj.imageUrl}" />
    <h4>Year: ${movieObj.year}</h4>
    <h4>Genre: ${movieObj.genre}</h4>
    <h4>Score: <span>${movieObj.score}</span> </h4>
    <button class="up-vote">Up Vote</button>
    <button>Down Vote</button>
    <button>&times;</button>
  `

  const movieList = document.querySelector("#movie-list")
  movieList.append(movieLi)
}

renderMovie(gooniesObj)

