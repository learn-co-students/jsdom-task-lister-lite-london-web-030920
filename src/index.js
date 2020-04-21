document.addEventListener("DOMContentLoaded", () => { 


  //find form
const wholeForm = document.querySelector('#create-task-form')

//listen for click on submit
wholeForm.addEventListener("submit", function(e){
  //prevent refresh
  e.preventDefault()

  //find input area
  const input = document.querySelector('#new-task-description')

  // create new Element for input
  const newElement = document.createElement("li")

  // add input value to the new Element
  newElement.innerText = input.value

  const button = document.createElement("button")
  button.innerHTML = "X"
  button.addEventListener("click", function(e){
    e.target.parentElement.remove()
  })
  newElement.appendChild(button)

  //append the new element to the parent
const tasks = document.getElementById('tasks').appendChild(newElement)

//get rid of existing writing
input.value = ""



})




});
