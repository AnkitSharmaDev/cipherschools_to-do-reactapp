import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskContext from "../context/TaskContext";

const AddTask = () => {
  const { addNewTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  let handleInputChnage = (e) => {
    // console.log(e.target.name);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  let onFormSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    addNewTask(task);
    setTask({});
    navigate("/");
  };
  return (
    <section className="screen">
      <h1 className="ui heading center">Add new task</h1>
      <div className="ui form">
        <form onSubmit={onFormSubmit}>
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <input
                type="text"
                spellCheck="false"
                data-ms-editor="true"
                placeholder="Task title"
                name="title"
                onChange={handleInputChnage}
                value={task.title}
              />
            </div>

            <div className="field">
              <label>description</label>
              <textarea
                rows="2"
                spellCheck="false"
                data-ms-editor="true"
                placeholder="Task description"
                name="description"
                onChange={handleInputChnage}
                value={task.description}
              />
            </div>
          </div>
          <button ype="Submit" className="ui primary button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
