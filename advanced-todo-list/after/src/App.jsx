import { createContext, useEffect, useReducer, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoFilterForm } from "./TodoFilterForm"
import { TodoList } from "./TodoList"

const LOCAL_STORAGE_KEY = "TODOS"
const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
}

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ]
    case ACTIONS.TOGGLE:
      return todos.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, completed: payload.completed }
        }

        return todo
      })
    case ACTIONS.DELETE:
      return todos.filter(todo => todo.id !== payload.id)
    case ACTIONS.UPDATE:
      return todos.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, name: payload.name }
        }

        return todo
      })
    default:
      throw new Error(`No action found for ${type}.`)
  }
}

export const TodoContext = createContext()

function App() {
  const [filterName, setFilterName] = useState("")
  const [hideCompletedFilter, setHideCompletedFilter] = useState(false)
  const [todos, dispatch] = useReducer(reducer, [], initialValue => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (value == null) return initialValue

    return JSON.parse(value)
  })

  const filteredTodos = todos.filter(todo => {
    if (hideCompletedFilter && todo.completed) return false
    return todo.name.includes(filterName)
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } })
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } })
  }

  function updateTodoName(id, name) {
    dispatch({ type: ACTIONS.UPDATE, payload: { id, name } })
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } })
  }

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addNewTodo,
        toggleTodo,
        updateTodoName,
        deleteTodo,
      }}
    >
      <TodoFilterForm
        name={filterName}
        setName={setFilterName}
        hideCompleted={hideCompletedFilter}
        setHideCompleted={setHideCompletedFilter}
      />
      <TodoList />
      <NewTodoForm />
    </TodoContext.Provider>
  )
}

export default App
