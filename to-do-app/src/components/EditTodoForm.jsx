import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [valueInput, setValueInput] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(valueInput, task.id);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        onChange={(e) => setValueInput(e.target.value)}
        value={valueInput}
      />
      <button type="submit" className="todo-btn-update">
        Update
      </button>
    </form>
  );
};

export default EditTodoForm;
