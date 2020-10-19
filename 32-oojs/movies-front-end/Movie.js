class Movie{
  constructor(movieObject){
    this.title = movieObject.title
    this.genre = movieObject.genre
    this.year = movieObject.year
    this.score = movieObject.score
    this.imageUrl = movieObject.imageUrl
    this.id = movieObject.id
  }

  render(list){
    const movieLi = document.createElement('li')

    movieLi.classList.add('movie')
    movieLi.dataset.movieId = this.id

    movieLi.innerHTML = `
      <h3>${this.title}</h3>
      <img alt="" src="${this.imageUrl}" />
      <h4>Year: ${this.year}</h4>
      <h4>Genre: ${this.genre}</h4>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose="delete" >&times;</button>
    `

    list.append(movieLi)
  }

  static renderCollection(movies, list){
    for(const movie of movies){
      // renderMovie(movieObj)
      movie.render(list)
    }
  }
}