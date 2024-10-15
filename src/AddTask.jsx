import { useState } from "react"

export default function AddTask({addTask}) {
    let [inputText, setInputText] = useState("");

    function handleOnChange(e){
        setInputText(e.target.value);
    }

    function handleAddTask(){
        addTask({text:inputText , isDone: false});
        setInputText("");
    }
    return(
        <div className="addTaskBox">
            <input type="text" value={inputText}   id="addTaskInput" onChange={handleOnChange} />
            <img src="add.svg" alt="" id="taskAdd" onClick={handleAddTask} />
        </div>
    )
}