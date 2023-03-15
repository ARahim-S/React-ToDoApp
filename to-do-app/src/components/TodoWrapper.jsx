import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import uniqid from "uniqid";
import EditTodoForm from "./EditTodoForm";
import CurrentTime from "./CurrentTime";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uniqid("smdnkfsdkjfnkj"),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Keep in Mind !</h1>
      <div>
        <CurrentTime />{" "}
      </div>
      <TodoForm addTodo={addTodo} />
      {todos?.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            handleToggleComplete={handleToggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
