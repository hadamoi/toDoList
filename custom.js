let taskInput = document.getElementById('task_input');
let tabs = document.querySelectorAll('.task_tabs div');
let underline = document.getElementById('underline');
let mode = 'all';
let filterList = [];
let addButton =  document.getElementById('add_button');
let taskList = [];

taskInput.focus();

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keyup', (e)=>{
  if(e.keyCode === 13){
    addTask()
  }
})

for(let i=1; i<tabs.length; i++){
  tabs[i].addEventListener('click', function(event){filter(event)})
}

function addTask(){
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  }

  taskList.push(task);
  taskInput.value = '';
  render()
}

function render(){
  
  let list = [];
  if(mode == 'all') {
    list = taskList;
  } else if(mode == 'ongoing' || mode == 'done'){
    list = filterList;
  }

  let resultHTML = '';
  for(let i=0; i<list.length; i++){
    if(list[i].isComplete == true){

      resultHTML +=
      `<div class="task">
        <span class="task_done">${list[i].taskContent}</span>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">check</button>
          <button onclick="deleteTask('${list[i].id}')">delete</button>
        </div>
      </div>`

    } else {

      resultHTML +=
      `<div class="task">
        <span>${list[i].taskContent}</span>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">check</button>
          <button onclick="deleteTask('${list[i].id}')">delete</button>
        </div>
      </div>`

    }
  }

  document.getElementById('task_board').innerHTML = resultHTML;

}

function toggleComplete(id){
  for(let i=0; i<taskList.length; i++){
    if(taskList[i].id == id){
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  filter();
}

function deleteTask(id) {
  for(let i=0; i<taskList.length; i++){
    if(taskList[i].id == id) {
      taskList.splice(i,1);
      break;
    }
  }
  filter();
}

function filter(event) {

  if(event) {
    mode = event.target.id;
    underline.style.width = event.target.offsetWidth + 'px';
    underline.style.left = event.target.offsetLeft + 'px';
  }
  
  filterList = [];

  if(mode ==='ongoing'){
    for(let i=0; i<taskList.length; i++){
      if(taskList[i].isComplete == false) {
        filterList.push(taskList[i])
      }
    }
  } else if(mode === 'done'){
    for(let i=0; i<taskList.length; i++){
      if(taskList[i].isComplete) {
        filterList.push(taskList[i])
      }
    }
  }
  render()
}

function randomIDGenerate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
