import { useEffect, useRef, useState } from "react"

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [status, setStatus] = useState("idle")

  // FIXME: Can do either ref or memoize it in parent/declare outside the component
  const optionsRef = useRef(options)
  useEffect(() => {
    optionsRef.current = options
  }, [options])

  useEffect(() => {
    setStatus("loading")
    setData(null)
    setError(null)

    const controller = new AbortController()
    fetch(url, { signal: controller.signal, ...optionsRef.current })
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
        setError(err)
        setData(null)
        setStatus("error")
      })

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, error, status }
}
