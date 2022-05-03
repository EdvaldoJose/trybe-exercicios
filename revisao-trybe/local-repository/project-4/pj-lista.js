function checkSavedList() {
    if (localStorage.savedList) {
      const recoveredList = JSON.parse(localStorage.savedList);
      document.getElementById('lista-tarefas').innerHTML = recoveredList;
    }
  }
  
  checkSavedList();
  
  function selectTask(event) {
    const currentSelected = document.querySelector('.selected');
    if (currentSelected) {
      currentSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
  function completeTask(event) {
    const task = event.target;
    if (task.className.includes('completed')) {
      task.classList.remove('completed');
    } else {
      task.classList.add('completed');
    }
  }
  function createTask(input) {
    const taskList = document.getElementById('lista-tarefas');
    const task = document.createElement('li');
    task.innerText = input;
    task.addEventListener('click', selectTask);
    task.addEventListener('dblclick', completeTask);
    taskList.appendChild(task);
  }
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    const input = document.getElementById('texto-tarefa');
    if (input.value.trim()) {
      createTask(input.value);
      input.value = '';
    }
  });
  document.getElementById('apaga-tudo').addEventListener('click', () => {
    document.getElementById('lista-tarefas').innerHTML = '';
  });
  document.getElementById('remover-finalizados').addEventListener('click', () => {
    const completed = document.querySelectorAll('.completed');
    const taskList = document.getElementById('lista-tarefas');
    for (let task of completed) {
        taskList.removeChild(task);
    }
  });
  
  document.getElementById('salvar-tarefas').addEventListener('click', () => {
    const taskList = document.getElementById('lista-tarefas').innerHTML;
    localStorage.savedList = JSON.stringify(taskList);
  });