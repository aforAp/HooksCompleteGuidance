import {useState, useRef, useEffect} from 'react'
import TaskManging from './TaskManging.jsx';
import Modal from './Modal.jsx';

const AddTask = () => {
    const [task, setTask] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [timers, setTimers] = useState(3);
    const CountRef = useRef(0);
    const inputRef = useRef();
    let defaultStyles = "flex justify-center items-center";
   let CssStyles = showPopup ? defaultStyles + " " + "blur-sm" : defaultStyles;
let timer;
let timer2;
   useEffect(() => {
    if(showPopup) {
         timer  = setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    }
    return () => {
        clearTimeout(timer);
    }
   },[showPopup]);

   useEffect(() => {
    timer2 = setInterval(() => {
        if(timers > 0) {
            setTimers(prev => prev - 1);
        } else {
            setShowPopup(false);
             setTimers(3);
    }
    }, 1000 * timers);
        return () => { clearInterval(timer2) };
    }, [timers]);

    const handleAddTask = () => {
        const newTask = inputRef.current.value.trim();
        if (newTask !== '') {
            setTask(prevTask => [...prevTask, newTask]);
            inputRef.current.value = '';
            CountRef.current += 1;
        }
    }

    const handleRemoveTask2 = () => {
        if (deleteIndex !== null && showPopup === true) {
            setTask(prevTask => prevTask.filter((_, i) => i !== deleteIndex));
            CountRef.current -= 1;
            setShowPopup(false);
            setDeleteIndex(null);
        }
    }

    const handleCopyTask = (index) => {
        const taskToCopy = task[index];
        setTask(prevTask => [...prevTask, taskToCopy]);
        CountRef.current += 1;
    }

    const handleRemoveTask = (index) => (
     setDeleteIndex(index),
     setShowPopup(true)
    );
    


    const handleEdit = (index) => {
        const newTask = prompt("Edit the task:", task[index]);

        if(newTask !== null && newTask !== ''){
            setTask(prevTask => {
                const updatedTask = [...prevTask];
                updatedTask[index] = newTask;
                return updatedTask;
            })
        }
        }
    

  return (
    <div>
        <div className={CssStyles}>
         <input type="text" className="inputFields" ref={inputRef} placeholder="Enter a task" />
        <button className="absolute mt-10 lg:left-[55.2rem] md:left-[35rem] sm:left-[26.5rem] bg-teaGreen text-black px-4 py-2 rounded-md hover:bg-green-300" onClick={handleAddTask}>Add Task</button>
        </div>
        <div>
        <TaskManging showPopup={showPopup} task={task} onCopy={handleCopyTask} onRemoveTask={handleRemoveTask} ref={CountRef} handleEdit={handleEdit} />
        {showPopup && (
            <Modal handleRemoveTask2={handleRemoveTask2} setShowPopup={setShowPopup} timers={timers} />
        )}
        </div>
       </div>
  )
}

export default AddTask
