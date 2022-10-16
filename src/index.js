import './style.css';
import Task from './task.js';

const newTaskInput = document.querySelector('#new-task');
const element = document.querySelector('#todolist');
let toDoList = [];

// localStorage.setItem('to_do_list', JSON.stringify(toDoList));

const getToDoList = () => {
  toDoList = JSON.parse(localStorage.getItem('to_do_list'));
  return toDoList;
};

const printList = () => {
  const list = getToDoList();
  let tasks = '';
  for (let i = 1; i <= list.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    list.forEach((task) => {
      if (task.index === i) {
        tasks += `
          <li id = "${task.index}" class="item">
            <label>
              <input type="checkbox" name="chk${task.index}" id="chk${task.index}">
              <input class="edit borderless fit hidden" type="text" name="edit${task.index}" id="edit${task.index}" placeholder="Edit task...">
              <p id="task${task.index}">${task.description}</p>
            </label>
            <div class="edit-manager flex hidden">
              <button class="edit-confirm">Confirm</button>
              <button class="edit-cancel">Cancel</button>
            </div>
            <div class="list-editor flex">
              <button class="edit-task">edit</button>
              <button class="delete-task">Del</button>
            </div>
          </li>
        `;
      }
    });
  }

  element.innerHTML = tasks;
  document.querySelectorAll('.edit-task').forEach((etb) => {
    etb.addEventListener('click', (e) => {
      const taskIndex = parseInt(e.target.parentNode.parentNode.id, 10);
      const taskElement = document.getElementById(`${taskIndex}`);
      // console.log(taskElement);

      document.querySelector(`#edit${taskIndex}`).classList.remove('hidden');
      document.querySelector(`#task${taskIndex}`).classList.add('hidden');

      taskElement.querySelector('.edit-manager').classList.remove('hidden');
      taskElement.querySelector('.list-editor').classList.add('hidden');

      // console.log(document.querySelector(`#task${taskIndex}`));
      // printList();
    });
  });
  document.querySelectorAll('.edit-confirm').forEach((ec) => {
    ec.addEventListener('click', (e) => {
      const taskIndex = parseInt(e.target.parentNode.parentNode.id, 10);
      const newDescription = document.getElementById(`edit${taskIndex}`).value;
      const taskElement = document.getElementById(`${taskIndex}`);
      const task = new Task(newDescription, taskIndex);
      task.Edit();
      // console.log(newDescription);

      document.querySelector(`#edit${taskIndex}`).classList.add('hidden');
      document.querySelector(`#task${taskIndex}`).classList.remove('hidden');

      taskElement.querySelector('.edit-manager').classList.add('hidden');
      taskElement.querySelector('.list-editor').classList.remove('hidden');

      // console.log(document.querySelector(`#task${taskIndex}`));
      printList();
    });
  });
  document.querySelectorAll('.delete-task').forEach((dtb) => {
    dtb.addEventListener('click', (e) => {
      const task = new Task();
      const taskIndex = parseInt(e.target.parentNode.parentNode.id, 10);
      task.Delete(taskIndex);
      printList();
    });
  });
};

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