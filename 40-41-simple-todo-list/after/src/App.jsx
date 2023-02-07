import { useState } from "react"
import "./styles.css"
import { TodoItem } from "./TodoItem"

function App() {
  const [todos, setTodos] = useState([])
  const [newTodoName, setNewTodoName] = useState("")

  function addNewTodo() {
    if (newTodoName === "") return

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), name: newTodoName, completed: false },
      ]
    })
    setNewTodoName("")
  }

  function toggleTodo(id, checked) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) return { ...todo, completed: checked }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div>
      <ul id="list">
        {todos.map(todo => (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
          // <li key={todo.id} className="list-item">
          //   <label className="list-item-label">
          //     <input
          //       type="checkbox"
          //       data-list-item-checkbox
          //       checked={todo.completed}
          //       onChange={e => toggleTodo(todo.id, e.target.checked)}
          //     />
          //     <span data-list-item-text>{todo.name}</span>
          //   </label>
          //   <button data-button-delete onClick={() => deleteTodo(todo.id)}>
          //     Delete
          //   </button>
          // </li>
        ))}
      </ul>

      <div id="new-todo-form">
        <label for="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={e => setNewTodoName(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </div>
  )
}

export default App
