import { useState } from "react"

export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue)

  function push(element) {
    setArray(a => [...a, element])
  }

  function replace(index, newElement) {
    setArray(a => {
      return [...a.slice(0, index), newElement, ...a.slice(index + 1)]
    })
  }

  function filter(callback) {
    setArray(a => {
      return a.filter(callback)
    })
  }

  function remove(index) {
    setArray(a => {
      return [...a.slice(0, index), ...a.slice(index + 1)]
    })
  }

  function clear() {
    setArray([])
  }

  function reset() {
    setArray(initialValue)
  }

  return { array, set: setArray, push, replace, filter, remove, clear, reset }
}
