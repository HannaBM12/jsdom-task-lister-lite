document.addEventListener("DOMContentLoaded", () => {

  function taskItem(task){
      let item1 = document.querySelector('#tasks')
      let listOne = document.createElement('li')
      listOne.innerText = task

      let button = document.createElement('button')
      button.innerText = "X"
      button.className = "cancelButton"

      listOne.appendChild(button)

      item1.appendChild(listOne)
  }
  //  taskItem()

    function formSubmit(){
    let taskForm = document.querySelector('#create-task-form')
        taskForm.addEventListener('submit', function(event){
          event.preventDefault()
        
          let description = event.target.items.value
          taskItem(description)
          taskForm.reset() 
          removeItem()
        })
 
   }

   function removeItem(){
        let buttons = document.querySelectorAll(".cancelButton")
          console.log(buttons)
          buttons.forEach(item => {
            item.addEventListener('click', event => {
               item.parentElement.remove()
            })
          })
   }
   formSubmit()
  

  
});


