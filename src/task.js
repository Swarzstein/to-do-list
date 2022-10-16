class Task {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }

  Add = () => {
    let tasks = [];
    const storage = JSON.parse(localStorage.getItem('to_do_list'));
    if (storage !== null) {
      tasks = storage;
    }
    tasks.push({
      description: this.description,
      completed: this.completed,
      index: this.index,
    });
    localStorage.setItem('to_do_list', JSON.stringify(tasks));
  };

  Delete = (index) => {
    console.log(`I will delete index number ${index}`);
    let tasks = JSON.parse(localStorage.getItem('to_do_list'));
    console.log(`this are the tasks \n ${JSON.stringify(tasks)}`);
    tasks = tasks.filter((task) => {
      if (task.index === index) {
        return false;
      }
      return true;
    });
    tasks.forEach((task) => {
      if (task.index > index) {
        task.index -= 1;
      }
    });
    console.log(`tasks to be saved \n ${JSON.stringify(tasks)}`);
    localStorage.setItem('to_do_list', JSON.stringify(tasks));
    console.log(JSON.parse(localStorage.getItem('to_do_list')));
  };

  Edit = () => {
    const tasks = JSON.parse(localStorage.getItem('to_do_list'));
    tasks.forEach((task) => {
      if (task.index === this.index) {
        task.description = this.description;
      }
    });
    console.log(JSON.stringify(tasks));
    localStorage.setItem('to_do_list', JSON.stringify(tasks));
  };
}

export default Task;