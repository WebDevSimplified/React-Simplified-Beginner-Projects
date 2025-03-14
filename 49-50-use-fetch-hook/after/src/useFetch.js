import { useState, useEffect } from "react"

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState("idle")

  useEffect(() => {
    setData(null)
    setError(null)
    setStatus("loading")

    const controller = new AbortController()
    fetch(url, { signal: controller.signal, ...options })
      .then(res => {
        if (res.ok) return res.json()
        throw new Error(`Status code: ${res.status}`)
      })
      .then(data => {
        setData(data)
        setError(null)
        setStatus("fetched")
      })
      .catch(err => {
        if (err.name === "AbortError") return
        setData(null)
        setError(err)
        setStatus("error")
      })

    return () => {
      controller.abort()
    }
  }, [url, options])

  return { data, status, error }
}
