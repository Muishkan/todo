import Task from "./task";

const TaskList = ({ tasks, setTask }) => {
  return (
    <>
      <div className="todo">
        <h2>Let's do</h2>
        {tasks.map((task, index) => {
          if (!task.done) {
            return (
              <Task
                key={task._id}
                index={index}
                task={task}
                tasks={tasks}
                setTask={setTask}
              />
            );
          }
        })}
      </div>
      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        {tasks.map((task, index) => {
          if (task.done) {
            return (
              <Task
                key={task._id}
                index={index}
                task={task}
                tasks={tasks}
                setTask={setTask}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default TaskList;
