import "./App.css";
import TaskList from "./components/tasklist";
import AddTask from "./components/adtask";
import Footer from "./components/footer";
import ReactDOM from "react-dom";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
library.add(faTrashAlt, faClipboardList);

function App() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    console.log("call only once");
    axios
      .get("https://myvintedapi.herokuapp.com/todo/list")
      .then((res) => {
        console.log(res);
        setTask(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="">
      <div className="nav">
        <FontAwesomeIcon icon="clipboard-list" className="logo" />
        <h1>TODO LIST</h1>
      </div>
      <div className="addtask container">
        <AddTask tasks={tasks} setTask={setTask} />
      </div>
      <div className="tasks container">
        <TaskList tasks={tasks} setTask={setTask} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
