import { createContext, useEffect, useReducer, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoFilterForm } from "./TodoFilterForm"
import { TodoList } from "./TodoList"

const ACTIONS = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
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
        if (todo.id === payload.id)
          return { ...todo, completed: payload.completed }

        return todo
      })
    case ACTIONS.DELETE:
      return todos.filter(todo => todo.id !== payload.id)
    case ACTIONS.UPDATE:
      return todos.map(todo => {
        if (todo.id === payload.id) return { ...todo, name: payload.name }

        return todo
      })
  }
}

const LOCAL_STORAGE_KEY = "TODOS"

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

  function toggleTodo(id, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id, completed } })
  }

  function deleteTodo(id) {
    dispatch({ type: ACTIONS.DELETE, payload: { id } })
  }

  function updateTodoName(id, name) {
    dispatch({ type: ACTIONS.UPDATE, payload: { id, name } })
  }

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addNewTodo,
        toggleTodo,
        deleteTodo,
        updateTodoName,
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
