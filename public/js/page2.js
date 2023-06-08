let inputButton = document.getElementById("inputButtonP2");
let input= document.getElementById("InputP2")
let todoCol = document.getElementById("toDoCol")
let doingCol = document.getElementById("doingCol")


// eventlisteners 
inputButton.addEventListener("click",add)

function add(params) {
  let taskDiv = document.createElement("div");
  todoCol.appendChild(taskDiv)
  taskDiv.classList.add("taskDivP2")
  let text = document.createElement("p");
  taskDiv.appendChild(text)
  text.innerText = input.value
}