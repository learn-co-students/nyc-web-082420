document.addEventListener("DOMContentLoaded", () => {

  function submitHandler() {
    const taskForm = document.querySelector('#create-task-form')
    taskForm.addEventListener('submit', function(e){
      e.preventDefault()
      const form = e.target
      // const task = form[0].value
      const task = form["new-task-description"].value
      const priority = form.priority.value

  
      const taskLi = document.createElement('li')
      taskLi.textContent = task

      const deleteButton = document.createElement('button')
      deleteButton.textContent = "x"
      deleteButton.classList.add('delete')
      taskLi.append(deleteButton)

      // deleteButton.addEventListener('click', function(e){
      //   e.target.parentElement.remove()
      // })
  
  
      // const taskList = document.querySelector('#tasks')
      // taskList.append(taskLi)
      
      const div = document.querySelector('#' + priority)
      div.append(taskLi)
  
      form.reset()
    })
  }

  function clickHandler() {
    document.addEventListener('click', function(e){
      if(e.target.matches('.delete')){
        e.target.parentElement.remove()
      }
    })
  }
  
  submitHandler()
  clickHandler()
});


/* As a user, the task string that I provided should appear on the DOM after the submit button has been activated. 

1. add a submit listener to the form
2. on submit, squash the default behavior
3. get the data out of the form
4. create a new li with the data and slap it on the DOM



*/