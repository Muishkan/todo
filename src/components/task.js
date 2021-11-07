import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Task = ({ index, task, tasks, setTask }) => {
  //Delete Task function, on click
  const delTask = () => {
    //Delete task from the remote DB

    axios
      .get(`https://myvintedapi.herokuapp.com/todo/delete/${task._id}`)
      .then((res) => {
        console.log(res.data);
      });

    //Render TaskList again
    const newTasks = tasks.filter((val) => val._id !== task._id);
    setTask(newTasks);
  };

  //Task complete function .. in checkbox selection.
  const taskDone = (evt) => {
    const newTasks = [...tasks];
    if (evt.target.checked) {
      newTasks[index].done = true;
    } else {
      newTasks[index].done = false;
    }
    setTask(newTasks);

    const newObj = newTasks[index];
    console.log(newObj);

    axios
      .put(`https://myvintedapi.herokuapp.com/todo/done/${task._id}`, newObj)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={taskDone}
        checked={task.done && "checked"}
      />
      <span className={task.done ? "done" : ""}>{task.text}</span>
      <FontAwesomeIcon icon="trash-alt" onClick={delTask} />
    </div>
  );
};

export default Task;
