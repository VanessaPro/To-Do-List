const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let myListItens =[]

function  addBewTask(){
   myListItens.push(input.value)
   
}

function showList(){
   let newLi = ''

   myListItens.forEach(task =>{

   })
  // <li class="task ${item.concluida && 'done'}">
  // <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
 //</img>  <p>${item.tarefa}</p>
  // <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
  //</li>


   
}

button.addEventListener('click', addBewTask)