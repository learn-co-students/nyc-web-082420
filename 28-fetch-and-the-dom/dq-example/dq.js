/*
Check out the JSON you get from making a GET request to this url (https://randomuser.me/api/).

Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/dq.js`, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.

1. DOMContentLoaded listener
2. GET request to the URL
3. parse the data object
4. render the data to the corresponding parts of the DOM

*/

document.addEventListener("DOMContentLoaded", e => {
  const getUser = () => {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      const user = data.results[0]
      renderUser(user)
    })
  }

  const renderUser = user => {
    const image = user.picture.large
    document.querySelector('#profile_picture').src = image

    const firstName = user.name.first
    const lastName = user.name.last
    const title = user.name.title
    document.querySelector('#fullname').textContent = `${title} ${firstName} ${lastName}`

    const email = user.email
    document.querySelector('#email').textContent = email

    // we could keep going with the rest of the user properties and their corresponding DOM elements
  }

  const clickHandler = () => {
    const button = document.querySelector('button')

    button.addEventListener('click', e => {
      getUser()
    })
  }

  getUser()
  clickHandler()
})