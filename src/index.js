import _ from 'lodash';
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
  let toDoes = '';
  for (let i = 0; i < list.length; i += 1) {
    list.forEach((element) => {
      if (element.index === i) {
        toDoes += `
          <li id = "${element.index}" class="item">
            <input type="checkbox" name="task${element.index}" id="task${element.index}">
            <label>${element.description}</label>
          </li>
        `;
      }
    });
  }

  return toDoes;
};

function component() {
  const element = document.querySelector('#todolist');

  element.innerHTML = getToDoList();

  return element;
}

document.querySelector('#todolist').appendChild(component());