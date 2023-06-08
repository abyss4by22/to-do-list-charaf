// page1
let input1 = document.getElementById(`topInput`)
let button1 = document.getElementById(`topButton`)
let valider = [];
let nonvalider = [];
let tout = []
function greenify() {
  this.parentElement.classList.toggle("greenify")
  if (this.classList.contains('greenify')) {
    valider.push(this)
  }else{
    valider.pop()
  }
  
  console.log(tout);
  console.log(valider);
}
function remove() {
  this.parentElement.remove()
}
function change() {
  this.parentElement.firstChild.innerText = prompt(`change task to what?`)
}
function createElement() {
  let task = document.createElement(`div`);
  task.classList.add(`task`)
  centerBox.appendChild(task);
  let text = document.createElement(`p`)
  text.classList.add(`text`)
  text.innerText = input1.value;
  input1.value = ''
  task.appendChild(text)
  let green = document.createElement(`button`);
  green.innerText = `validate`
  green.classList.add(`green`)
  task.appendChild(green)
  green.addEventListener(`click`, greenify)
  let red = document.createElement(`button`);
  red.innerText = `delete`
  red.classList.add(`red`)
  task.appendChild(red)
  red.addEventListener(`click`, remove)
  let modify = document.createElement(`button`);
  modify.innerText = `modify`
  modify.classList.add(`modify`)
  task.appendChild(modify)
  modify.addEventListener(`click`, change)
  tout.push(task);
  

}

button1.addEventListener(`click`, createElement)

let validated = document.getElementById('validated');
let allTasks = document.getElementById("allTasks");
let nonValidated = document.getElementById("non-validated")
let select = document.getElementById("select")

select.addEventListener("change", selectFunction = ()=> {
  const selectedOption = select.value;
  if (selectedOption === "all"){
    all()
  }else if (selectedOption === "validated") {
    validatedfunc()
  } else if (selectedOption === "nonValidated"){
    nonValidatedFunc()
  }
})

function all() {
  tout.forEach(element => {
    element.classList.remove("hidden")
  });
}
function validatedfunc() {
  tout.forEach(element => {
    
    if (element.classList.contains("greenify")) {
      element.classList.remove("hidden")
    }else{
      element.classList.add("hidden")
    }
  });
  
}
function nonValidatedFunc() {
  tout.forEach(element => {
    
    if (element.classList.contains("greenify")) {
      element.classList.add("hidden")
    }else{
      element.classList.remove("hidden")
    }
  });
}
  