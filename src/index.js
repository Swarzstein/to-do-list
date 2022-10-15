import './style.css';
import Task from './task.js';

const newTaskInput = document.querySelector('#new-task');

let toDoList = [];

// localStorage.setItem('to_do_list', JSON.stringify(toDoList));

const getToDoList = () => {
  toDoList = JSON.parse(localStorage.getItem('to_do_list'));

  return toDoList;
};

function printList() {
  const element = document.querySelector('#todolist');

  const list = getToDoList();
  let tasks = '';
  for (let i = 1; i <= list.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    list.forEach((task) => {
      if (task.index === i) {
        tasks += `
          <li id = "${task.index}" class="item">
            <input type="checkbox" name="task${task.index}" id="task${task.index}">
            <label>${task.description}</label>
            <button><img src="../icons/trash.svg" alt=""></button>
          </li>
        `;
      }
    });
  }

  element.innerHTML = tasks;

  return element;
}

printList();

const addNewTask = () => {
  toDoList = getToDoList();
  const newIndex = toDoList.length + 1;
  const task = new Task(newTaskInput.value, newIndex);
  task.Add();
  newTaskInput.value = '';
  printList();
};

// Add new Task
document.querySelector('#add').addEventListener('click', addNewTask);
newTaskInput.addEventListener('keypress', (e) => {
  const keypressed = (newTaskInput) ? e.keyCode : e.which;
  if (keypressed === 13) {
    if (newTaskInput.value !== '') { addNewTask(); }
  }
});