// page1
let input1 = document.getElementById(`topInput`)
let button1 = document.getElementById(`topButton`)
function greenify() {
  this.parentElement.style.backgroundColor = `green`
}
function remove() {
  this.parentElement.remove()
}
function change() {
  this.parentElement.firstChild.innerText= prompt(`change task to what?`)
}
function createElement(){
  let task = document.createElement(`div`);
  task.classList.add(`task`)
  centerBox.appendChild(task);
 let text = document.createElement(`p`)
 text.classList.add(`text`)
 text.innerText = input1.value;
 input1.value =''
 task.appendChild(text)
 let green = document.createElement(`button`);
 green.innerText = `validate`
 green.classList.add(`green`)
 task.appendChild(green)
 green.addEventListener(`click`,greenify)
 let red = document.createElement(`button`);
 red.innerText = `delete`
 red.classList.add(`red`)
 task.appendChild(red)
 red.addEventListener(`click`,remove)
 let modify = document.createElement(`button`);
 modify.innerText = `modify`
 modify.classList.add(`modify`)
 task.appendChild(modify)
 modify.addEventListener(`click`,change)

}

button1.addEventListener(`click`,createElement)

