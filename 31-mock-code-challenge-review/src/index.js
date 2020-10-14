document.addEventListener('DOMContentLoaded', e => {
  const baseUrl = "http://localhost:3000/dogs/"
  const tableBody = document.querySelector('#table-body')

  const getDogs = () => {
    fetch(baseUrl)
    .then(response => response.json())
    // .then(renderDog) // these do the same thing
    .then(dogs => renderDogs(dogs))
  }

  const renderDogs = dogs => {
    tableBody.innerHTML = ''
    dogs.forEach(dog => renderDog(dog))
  }

  const renderDog = dog => {
    const dogTr = document.createElement('tr')
    dogTr.innerHTML = `
      <td>${dog.name}</td>
      <td>${dog.breed}</td>
      <td>${dog.sex}</td>
      <td>
        <button data-dog-id=${dog.id}>Edit</button>
      </td>
    `

    tableBody.append(dogTr)
  }
  
  const clickHandler = () => {
    tableBody.addEventListener('click', e => {
      if(e.target.textContent === "Edit"){
        const button = e.target

        const dogTr = button.closest('tr')
        const cells = dogTr.children

        const name = cells[0].textContent
        const breed = cells[1].textContent
        const sex = cells[2].textContent

        const form = document.querySelector('#dog-form')
        form.name.value = name
        form.breed.value = breed
        form.sex.value = sex

        form.dataset.dogId = button.dataset.dogId
      }
    })
  }

  const submitHandler = () => {
    const form = document.querySelector('#dog-form')
    form.addEventListener('submit', e => {
      e.preventDefault()

      const dogForm = e.target
      const dogId = dogForm.dataset.dogId
      
      const name = dogForm.name.value
      const breed = dogForm.breed.value
      const sex = dogForm.sex.value
      
      const dog = { name: name, breed: breed, sex: sex }

      const options = {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(dog)
      }

      fetch(baseUrl + dogId, options)
      .then(response => response.json())
      .then(_dog => {
        getDogs()
      })
    })

  }

  // more complicated solution
  // const submitHandler = () => {
    // const form = document.querySelector('#dog-form')
    // form.addEventListener('submit', e => {
    //   e.preventDefault()

      // const dogForm = e.target
      // const dogId = dogForm.dataset.dogId
      
      // const name = dogForm.name.value
      // const breed = dogForm.breed.value
      // const sex = dogForm.sex.value
      
      // const dog = { name: name, breed: breed, sex: sex }

  //     const method = e.submitter.value === 'Create' ? "POST" : "PATCH"
  //     const url = e.submitter.value === 'Create' ? baseUrl : baseUrl + dogId

      // const options = {
      //   method: method,
      //   headers: {
      //     "content-type": "application/json",
      //     "accept": "application/json"
      //   },
      //   body: JSON.stringify(dog)
      // }

      // fetch(url, options)
      // .then(response => response.json())
      // .then(_dog => {
      //   getDogs()
      // })

  //   })
  // }

  getDogs()
  clickHandler()
  submitHandler()
})


/*

* On page load, render a list of already registered dogs in the table. You can fetch these dogs from http://localhost:3000/dogs. The dog should be put on the table as a table row. The HTML might look something like this <tr><td>Dog *Name*</td> <td>*Dog

1. GET request on page load
2. render each dog returned by the server into the table

* Make a dog editable. Clicking on the edit button next to a dog should populate the top form with that dog's current information.

1. click listener on the edit button
2. get the data somehow (from the table? somewhere else?)
  √- on the DOM in the tr
  ~- it's available during render in the dog object
  X- it's in the database

3. populate the form with this dog's info

* On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information (including name, breed and sex attributes). Once the form is submitted, the table should reflect the updated dog information. There are many ways to do this. You could search for the table fields you need to edit and update each of them in turn, but we suggest making a new get request for all dogs and rerendering all of them in the table. Make sure this GET happens after the PATCH so you can get the most up-to-date dog information.

1. submit listner on the form
2. get the data out of the form
3. PATCH request to update that dog
4. re-render the dogs

create a new dog form 

1. submit listener
2. get the data out of the form
3. POST request to create a new record with that data


*/