const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listComplet = document.querySelector('.list-tasks')

let myListItens =[]

function  addBewTask(){
   myListItens.push({
      task:input.value,
      conclude:false
   })

   input.value = ''
   
   showList()
}

function showList(){
   let newLi = ''

   myListItens.forEach((task, position) =>{
      newLi = newLi + ` 
       <li class="task ">
       <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa">
       <p>${task}</p>
       <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletItem(${position})">
       </li>`

   })
 

listComplet.innerHTML = newLi
   
}

function concludeTask(){

}

function deletItem(position){
   myListItens.splice(position,1)
   showList()
}

button.addEventListener('click', addBewTask)