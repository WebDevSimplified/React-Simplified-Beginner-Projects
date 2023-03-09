import { useContext, useRef, useState } from "react"
import { TodoContext } from "./App"

export function TodoList() {
  const { todos } = useContext(TodoContext)

  return (
    <ul id="list">
      {todos.map(todo => {
        return <TodoItem key={todo.id} {...todo} />
      })}
    </ul>
  )
}

function TodoItem({ id, name, completed }) {
  const { toggleTodo, deleteTodo, updateTodoName } = useContext(TodoContext)
  const [isEditing, setIsEditing] = useState(false)
  const nameRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    updateTodoName(id, nameRef.current.value)
    setIsEditing(false)
  }

  return (
    <li className="list-item">
      {isEditing ? (
        <form className="edit-form" onSubmit={handleSubmit}>
          <input autoFocus type="text" defaultValue={name} ref={nameRef} />
          <button type="submit" data-button-edit>
            Save
          </button>
        </form>
      ) : (
        <label className="list-item-label">
          <input
            checked={completed}
            type="checkbox"
            data-list-item-checkbox
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          <span data-list-item-text>{name}</span>
        </label>
      )}
      <button onClick={() => setIsEditing(true)} data-button-edit>
        Edit
      </button>
      <button onClick={() => deleteTodo(id)} data-button-delete>
        Delete
      </button>
    </li>
  )
}
