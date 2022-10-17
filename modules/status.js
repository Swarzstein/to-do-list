class Status {
  constructor(completed, index) {
    this.completed = completed;
    this.index = index;
  }

  Set = () => {
    const tasks = JSON.parse(localStorage.getItem('to_do_list'));
    tasks.forEach((task) => {
      if (task.index === this.index) {
        task.completed = this.completed;
      }
    });
    localStorage.setItem('to_do_list', JSON.stringify(tasks));
    console.log(JSON.parse(localStorage.getItem('to_do_list')));
  };
}

// const st = new Status();

const setCheckboxListener = () => {
  // console.log(document.querySelectorAll('.checked'));
  document.querySelectorAll('.checked').forEach((checkbox) => {
    // console.log(checkbox.checked);
    checkbox.addEventListener('change', (e) => {
      const checkboxId = e.target.id;
      const index = parseInt(e.target.parentNode.parentNode.id, 10);
      const Completed = () => {
        try {
          // console.log(document.querySelector(`#${checkboxId}:checked`).value);
          if (document.querySelector(`#${checkboxId}:checked`).value !== null) {
            document.querySelector(`#task${index}`).classList.add('completed');
            console.log(document.querySelector(`#task${index}`).classList);
            return true;
          }
        // eslint-disable-next-line no-empty
        } catch (error) {
          document.querySelector(`#task${index}`).classList.remove('completed');
          console.log(document.querySelector(`#task${index}`).classList);
        }
        return false;
      };
      // console.log(Completed());
      const status = new Status(Completed(), index);
      status.Set();
    });
  });
};

const checkCompleted = () => {
  const tasks = JSON.parse(localStorage.getItem('to_do_list'));
  tasks.forEach((task) => {
    if (task.completed === true) {
      document.querySelector(`#task${task.index}`).classList.add('completed');
      try {
        document.getElementById(`chk${task.index}`).checked = true;
      // eslint-disable-next-line no-empty
      } catch (error) {}
    }
  });
};

export { setCheckboxListener, checkCompleted };