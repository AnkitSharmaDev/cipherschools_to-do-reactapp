import { formatDate } from "../utils/DateUtil";
import TaskContext from "../context/TaskContext";
import { useContext, useState } from "react";

const Task = ({ task: { title, description, createdDate, taskid } }) => {
  const { deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState({
    title: title || "",
    description: description || "",
  });

  let handleInputChnage = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  if (isEditing) {
    return (
      <div className="card">
        <div className="content">
          <div className="ui form">
            <div className="field">
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
          <div className="meta">{formatDate(createdDate)}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div
              className="ui basic green button"
              onClick={() => {
                editTask(taskid, task);
                setIsEditing(false);
              }}
            >
              Save
            </div>
            <div
              className="ui basic red button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">{formatDate(createdDate)}</div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div
              className="ui basic green button"
              onClick={() => {
                setTask({ title, description });
                setIsEditing(true);
              }}
            >
              Edit
            </div>
            <div
              className="ui basic red button"
              onClick={() => deleteTask(taskid)}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Task;
