const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listComplet = document.querySelector('.list-tasks')

let myListItens =[]

function  addBewTask(){
   myListItens.push(input.value)

   input.value = ''
   
   showList()
}

function showList(){
   let newLi = ''

   myListItens.forEach((task) =>{
      newLi = newLi + ` 
       <li class="task ">
       <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa">
       <p>${task}</p>
       <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem">
       </li>`

   })
 

listComplet.innerHTML = newLi
   
}

button.addEventListener('click', addBewTask)