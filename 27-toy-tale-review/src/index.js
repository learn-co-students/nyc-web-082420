let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  // ---------------------------------------------------- //

  const baseUrl = "http://localhost:3000/toys/"


  const renderToy = (toy, toyCollection) => {
    // create div with card class
    // add this HTML to the div
    // append that new div to the toy-collection div

    const toyDiv = document.createElement("div")
    toyDiv.classList.add('card')

    toyDiv.innerHTML = `
      <h2>${toy.name}</h2>
      <img src="${toy.image}" class="toy-avatar" />
      <p>${toy.likes} Likes </p>
      <button class="like-btn" data-toy-id="${toy.id}">Like <3</button>
    `

    toyCollection.append(toyDiv)
  }

  const renderToys = toys => {
    const toyCollection = document.querySelector("#toy-collection")

    for(const toy of toys){
      renderToy(toy, toyCollection)
    }
  }

  const getToys = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(toys => {
      renderToys(toys)
    })
  }
  
  const submitHandler = () => {
    const addToyForm = document.querySelector('.add-toy-form')

    addToyForm.addEventListener('submit', e => {
      e.preventDefault()
      const form = e.target

      const name = form.name.value
      const image = form.image.value

      const newToy = { name: name, image: image, likes: 0 }

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(newToy)
      }
      
      fetch(baseUrl, options)
      .then(response => response.json())
      .then(toy => {
        const toyCollection = document.querySelector("#toy-collection")
        renderToy(toy, toyCollection)
        document.querySelector('.add-toy-form').reset()
      })

    })
  }

  const clickHandler = () => {
    document.addEventListener('click', e => {
      if(e.target.matches(".like-btn")){
        const button = e.target
        const toyId = button.dataset.toyId
        const pTag = button.previousElementSibling
        const currentLikes = parseInt(pTag.textContent)
        const newLikes = currentLikes + 1

        options = {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({ likes: newLikes })
        }

        fetch(baseUrl + toyId, options)
        .then(response => response.json())
        .then(toy => {
          const button = document.querySelector(`[data-toy-id="${toy.id}"]`)
          const pTag = button.previousElementSibling
          pTag.textContent = `${toy.likes} Likes`
        })
      }
    })
  }
  
  submitHandler()
  clickHandler()
  getToys()
});


/*

As a user, when I open the page, I should see all the toys.

√1. get request to /toys
√2. render each toy on the DOM

As a user, when I fill out the new toy form and submit it the toy should appear at the bottom of the list and it should persist on page reload.

√1. add a submit listener to the form
√2. on submit, get the data out of the text input
√3. do POST request /toys with the form data
√4. render that new toy

As a user, when I click the like button for a toy, its like count should increment by 1 and the new count should persist on page reload.

1. add click listener(s?) to like buttons
2. on click
  a. increment the likes on the DOM
  b. update the likes property in the db - PATCH request /toys/:id
*/