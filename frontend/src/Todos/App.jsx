import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo, removeTodo } from "./slices/Dataslices.jsx";
import { wordLength, wordReverse } from "./slices/MathSlices.jsx";

const App = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const math = useSelector((state) => state.math);

  function EditInput(id) {
    const existingTodo = todos.find(item => item.id === id);
    if (existingTodo) {
      let input = prompt("Edit Todo", existingTodo.text);
      if (input !== null) {
        dispatch(editTodo({ id, text: input }));
      }
    }
  }
  
  return (
    <div>
      <h1>Todos</h1>
      <h1>{todos.length}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(input))}>Add Todo</button>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "left",
            margin: "0 40rem 0 40rem"
          }}
        >
          <div key={todo.id}>{todo.text}</div>
          <h1>{todo.text.length}</h1>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          <h1>{math.length}</h1>
          <button onClick={() => {EditInput(todo.id)}}>Edit</button>
          <button onClick={() => dispatch(wordLength(todo.text))}>Word Length</button>
          <h1>{math.word}</h1>
          <button onClick={() => dispatch(wordReverse(todo.text))}>Word Reverse</button>
        </div>
      ))}
    </div>
  );
};

export default App;
