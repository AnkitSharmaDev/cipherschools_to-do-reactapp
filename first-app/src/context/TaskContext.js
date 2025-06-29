import {  createContext, useState } from "react";
import {v4 as randomUUID} from 'uuid';

const TaskContext = createContext();
const TASK_EDITABLE_FIELD_LIST = ["title", "description "];

const TaskProvider = ({children}) => {
    const [taskList, setTaskList] = useState([]);

    const addNewTask = (task) => {
        setTaskList([...taskList, { ...task, createdDate: new Date(),taskid: randomUUID() }]);
    };

    const deleteTask = (taskid) => {
        setTaskList(taskList.filter((task) => task.taskid !== taskid));
        console.log("tryig to delet");
        
    };

    const editTask = (taskid, updatedTask) => {
        let tempTaskList = [...taskList];
        for(let t of tempTaskList) {
            if(t.taskid === taskid) {
                 TASK_EDITABLE_FIELD_LIST.forEach((field) => (t[field] = updatedTask[field]));
            }
        }
        setTaskList(tempTaskList);
    };

    return (
        <TaskContext.Provider value={{ taskList, addNewTask, deleteTask,editTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export  { TaskProvider };
export default TaskContext;