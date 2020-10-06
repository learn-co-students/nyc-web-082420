console.log("Events are cool I guess.")

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


// const jawsUpVote = document.querySelector('.up-vote')

// jawsUpVote.addEventListener('click', function(e){
//   const button = e.target
//   const parentLi = button.parentElement
//   const scoreSpan = parentLi.querySelector('span')
//   const currentScore = parseInt(scoreSpan.textContent)
//   const newScore = currentScore + 1

//   scoreSpan.textContent = newScore
// })


const upVoteButtons = document.querySelectorAll('.up-vote')

for(const button of upVoteButtons){
  button.addEventListener('click', function(e){
    const button = e.target
    const parentLi = button.parentElement
    const scoreSpan = parentLi.querySelector('span')
    const currentScore = parseInt(scoreSpan.textContent)
    const newScore = currentScore + 1
    
    scoreSpan.textContent = newScore
  })
}

renderMovie(gooniesObj)




// As a user, when I click the Up Vote button, the score for that movie should increment by 1

// 1. get the button from the DOM
// 2. add a click listener
// 3. do some DOM manipulation on click