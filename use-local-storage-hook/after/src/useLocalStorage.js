import { useState, useEffect } from "react"

export function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(() => {
    const jsonData = localStorage.getItem(key)
    if (jsonData == null) {
      if (typeof initialState === "function") {
        return initialState()
      } else {
        return initialState
      }
    }

    return JSON.parse(jsonData)
  })

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [value, key])

  return [value, setValue]
}
