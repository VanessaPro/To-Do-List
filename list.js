const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let myListItens =[]

function  addBewTask(){
   myListItens.push(input.value)
   
}

button.addEventListener('click', addBewTask)