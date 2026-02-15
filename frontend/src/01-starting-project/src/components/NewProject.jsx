import { useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation ....
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="inputButCancel">Cancel</button>
        </li>
        <li>
          <button className="inputSavBut" onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" label="Title" ref={title} />
        <Input label="Description" textarea ref={description} />
        <Input type="date" label="Due Date" ref={dueDate} />
      </div>
    </div>
  );
}
