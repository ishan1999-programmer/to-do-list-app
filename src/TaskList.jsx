import { v4 as uuidv4 } from 'uuid';
export default function TaskList({tasks ,deleteTask , doneTask}) {

    let task_list = tasks.map((task,idx)=>{
        return (
            <li key={uuidv4()} className = {task.isDone ? "done" : ""}>
                <div className="taskText">{task.text}</div>
                <div className="taskButtons">
                    <img src="done.svg" alt="" id="taskDone" onClick={() => doneTask(idx)} />
                    <img src="delete.svg" alt="" id="taskDelete" onClick={() => deleteTask(idx)}/>
                </div>
            </li>
        )
    })  
    return(
        <div className="taskListBox">
            <ul className="taskList">
                {task_list}
            </ul>
        </div>
    )
}