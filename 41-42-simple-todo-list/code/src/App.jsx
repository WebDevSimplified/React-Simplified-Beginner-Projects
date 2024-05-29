import { useState } from "react";
// import "./App.css";

const Todo = ({ todo: { title, completed, id }, deleteTodo, toggleTodo }) => {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          data-list-item-checkbox
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span data-list-item-text>{title}</span>
      </label>
      <button data-button-delete onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};

const TodoForm = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const onClick = () => {
    if (title === "") return;
    createTodo({
      title,
      completed: false,
      id: crypto.randomUUID(),
    });
    setTitle("");
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input
        autoFocus
        type="text"
        id="todo-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>Add Todo</button>
    </div>
  );
};

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => setTodos((prev) => [...prev, newTodo]);
  const deleteTodo = (id) =>
    setTodos((prev) => [...prev].filter((v) => v.id !== id));
  const toggleTodo = (id, completed) =>
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );

  const todoElms = todos.map((el, i) => (
    <Todo key={i} todo={el} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
  ));

  return (
    <>
      <ul id="list">{todoElms}</ul>
      <TodoForm createTodo={addTodo} />
    </>
  );
}

export default App;
