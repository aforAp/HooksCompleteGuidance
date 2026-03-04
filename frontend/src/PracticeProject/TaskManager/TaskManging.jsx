import { useState } from "react";
import { Edit, X, Copy } from 'lucide-react';
const TaskManging = ({ task }) => {
  const [categoryName, setCategory] = useState("desc");
let styles = "sortButtons";
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
    <div className="flex ml-4 justify-center w-full flex-col items-center">
      <h1 className="tracking-[4px] mt-5 uppercase">the tasks are</h1>
      {task.map((task, index) => (
        <p key={index}>
          <div className="w-[650px] border-2 border-aqua rounded-md mt-5 p-2 text-center text-lg font-semibold hover:bg-teaGreen">
            {task}
            <div>
               <button>
<X />
        </button>
        <button>
            <Copy />
        </button>
        <button>
            <Pencil />
        </button>
            </div>
          </div>
        </p>
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
    </div>
  );
};

export default TaskManging;
