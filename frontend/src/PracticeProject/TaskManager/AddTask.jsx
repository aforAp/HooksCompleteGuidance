import {useState, useRef} from 'react'
import TaskManging from './TaskManging.jsx';
import { Edit, X, Copy } from 'lucide-react';
const AddTask = () => {
    const [task, setTask] = useState([]);
    const inputRef = useRef();

    const handleAddTask = () => {
        const newTask = inputRef.current.value.trim();
        if (newTask !== '') {
            setTask(prevTask => [...prevTask, newTask]);
            inputRef.current.value = '';
        }
    }
  return (
    <div>
        <div className="flex justify-center items-center">
         <input type="text" className="inputFields" ref={inputRef} placeholder="Enter a task" />
        <button className="absolute mt-10 lg:left-[55.2rem] md:left-[35rem] sm:left-[26.5rem] bg-teaGreen text-black px-4 py-2 rounded-md hover:bg-green-300" onClick={handleAddTask}>Add Task</button>
        </div>
        <div>
        <TaskManging task={task} />
       
        </div>
       </div>
  )
}

export default AddTask
