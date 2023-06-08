let inputButton = document.getElementById("inputButtonP2");
let input= document.getElementById("InputP2")
let todoCol = document.getElementById("toDoCol")
let doingCol = document.getElementById("doingCol")


// eventlisteners 
inputButton.addEventListener("click",add)


//  functions

function modify() {
  this.parentElement.parentElement.firstChild.innerText = prompt(`modify this task?`)
}
function suprimme() {
  this.parentElement.parentElement.remove();
}

function add(params) {
  if (input.value == ``) {
    alert(`no task written`)
    return
  } 
  let taskDiv = document.createElement("div");
  todoCol.appendChild(taskDiv)
  taskDiv.classList.add("taskDivP2")

  let text = document.createElement("p");
  taskDiv.appendChild(text)
  text.innerText = input.value
 
  input.value = ''

  let taskDivChild = document.createElement('div');
  taskDivChild.classList.add('taskDivChild');
  taskDiv.appendChild(taskDivChild);

  let taskButtonModify = document.createElement(`button`);
  taskButtonModify.innerText = `modify`
  taskButtonModify.classList.add(`taskButtonModify`);
  taskButtonModify.classList.add(`bg-warning`,`rounded-pill`,`px-2` , `text-white`)
  taskDivChild.appendChild(taskButtonModify);
  taskButtonModify.addEventListener(`click`,modify);

  let taskButtonDelete = document.createElement('button');
  taskButtonDelete.innerText = `delete`;
  taskButtonDelete.classList.add(`taskButtonDelete`);
  taskButtonDelete.classList.add(`bg-danger`,`rounded-pill`,`px-2` , `text-white`)
  taskDivChild.appendChild(taskButtonDelete);
  taskButtonDelete.addEventListener(`click`,suprimme);
  
  let taskSelect = document.createElement(`select`)
  taskDivChild.appendChild(taskSelect);


  let optionSelectTodo = document.createElement(`option`);
  optionSelectTodo.innerText =`Todo`
  optionSelectTodo.value= `TodoCol`;
  taskSelect.appendChild(optionSelectTodo)

  let optionSelectDoing = document.createElement(`option`);
  optionSelectDoing.innerText =`Doing`
  optionSelectDoing.value= `DoingCol`;
  taskSelect.appendChild(optionSelectDoing)

  let optionSelectDone = document.createElement(`option`);
  optionSelectDone.innerText =`Done`
  optionSelectDone.value= `DoneCol`;
  taskSelect.appendChild(optionSelectDone)
}