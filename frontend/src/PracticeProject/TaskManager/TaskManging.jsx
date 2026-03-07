import { useState } from "react";
import { Edit, X, Copy, Pencil } from 'lucide-react';
import Modal from "./Modal";
const TaskManging = ({ task, onRemoveTask, ref, handleEdit, showPopup, onCopy }) => {
  const [categoryName, setCategory] = useState("desc");
let styles = "sortButtons";
let defaultStyles = "flex ml-4 justify-center w-full flex-col items-center";
let customStyles = showPopup ? defaultStyles + " " + "blur-sm" : defaultStyles;
  function handleCategoryChange(categoryName) {
    setCategory(categoryName);
    if (categoryName === "asc") {
        task.sort((a, b) => a.localeCompare(b));
    } else if (categoryName === "desc") {
           task.sort((a, b) => b.localeCompare(a));
    } else if (categoryName === "all") {
           task.length = 0; // Clear the task array
    }
  }
  return (
    <div className={customStyles}>
      <h1 className="tracking-[4px] mt-5 uppercase">the tasks are</h1>
      {task.map((task, index) => (
        <div key={index}>
          <div className="w-[650px] flex border-2 border-aqua rounded-md mt-5 p-2 text-center text-lg font-semibold hover:bg-teaGreen hover:scale-125">
            {task}
            <div className="flex gap-2 ml-auto">
               <button onClick={() => onRemoveTask(index)} >
<X className="text-red-600"/>
        </button>
        <button onClick={() => onCopy(index)}>
            <Copy className="text-yellow-600"/>
        </button>
        <button onClick={() => handleEdit(index)}>
            <Pencil className="text-green-700"/>
        </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        <button
          onClick={() => handleCategoryChange("all")}
          className={styles + " " + "bg-lime text-white hover:bg-darkLime"}
        >
          Clear All Tasks
        </button>
        <button
          onClick={() => handleCategoryChange("asc")}
          className={styles + " " + "bg-teaGreen text-white hover:bg-green-300"}
        >
          Sort by Asc
        </button>
        <button
          onClick={() => handleCategoryChange("desc")}
          className={styles + " " + "bg-red-300 text-white hover:bg-red-600"}
        >
          Sort by Desc
        </button>
      </div>
      <div>
        <h1 className="mt-5 tracking-[4px] uppercase">total tasks: {ref.current}</h1>
      </div>
    </div>
  );
};

export default TaskManging;
