import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [valueInput, setValueInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(valueInput);
    setValueInput("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        className="todo-input"
        placeholder="Create Task"
        onChange={(e) => setValueInput(e.target.value)}
        value={valueInput}
      />
      <button type="submit" className="todo-btn">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
