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
    let tasks = JSON.parse(localStorage.getItem('to_do_list'));
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
  };
}

export default Task;