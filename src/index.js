import './style.css';

const toDoList = [
  {
    description: 'fix car',
    completed: false,
    index: 1,
  },
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },
];

const getToDoList = () => {
  const list = toDoList;
  let tasks = '';
  for (let i = 0; i < list.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    list.forEach((task) => {
      if (task.index === i) {
        tasks += `
          <li id = "${task.index}" class="item">
            <input type="checkbox" name="task${task.index}" id="task${task.index}">
            <label>${task.description}</label>
          </li>
        `;
      }
    });
  }

  return tasks;
};

function component() {
  const element = document.querySelector('#todolist');

  element.innerHTML = getToDoList();

  return element;
}

document.querySelector('#todolist').appendChild(component());