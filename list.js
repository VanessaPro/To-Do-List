const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listComplet = document.querySelector('.list-tasks')

let myListItens =[]

function addBewTask() {
  
   if (input.value.trim() === '') {
       alert('Por favor, digite uma tarefa antes de adicionar!');
       return; 
   }

   
   myListItens.push({
       task: input.value,
       conclude: false
   });

   
   input.value = '';

   
   showList();
}


function showList(){
   let newLi = ''

   myListItens.forEach((task, position) =>{
      newLi = newLi + ` 
       <li class="task ${task.conclude && 'done'}">
       <img src="./img/checked.png" alt="check-na-tarefa" onclick="concludeTask(${position})">
       <p>${task.task}</p>
       <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletItem(${position})">
       </li>`

   })
 

   listComplet.innerHTML = newLi

   localStorage.setItem('list', JSON.stringify(myListItens))   
}

function concludeTask(position){
   myListItens[position].conclude = !myListItens[position].conclude

   showList()

}

function deletItem(position){
   myListItens.splice(position,1)
   showList()
}

function loadList(){
   const listDoLocalStorage = localStorage.getItem('list')

   if(listDoLocalStorage){
      myListItens = JSON.parse(listDoLocalStorage)
   }



   showList()
}

loadList()
button.addEventListener('click', addBewTask)