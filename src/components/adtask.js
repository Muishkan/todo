import axios from "axios";

const AddTask = ({ tasks, setTask }) => {
  //Form handler function
  const formHandler = (evt) => {
    evt.preventDefault();
    //Add new task to remote DB
    const newTask = { text: evt.target.task.value, done: false };

    axios
      .post("https://myvintedapi.herokuapp.com/todo/add", newTask)
      .then((res) => {
        console.log(res.data);
      });
    //Add task to new state ..
    const newTasks = [...tasks];
    newTasks.push({ text: evt.target.task.value, done: false });
    evt.target.task.value = "";
    setTask(newTasks);
  };

  return (
    <div className="addtask">
      <form onSubmit={formHandler} action="">
        <input
          className="task-input"
          type="text"
          name="task"
          id="task"
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
