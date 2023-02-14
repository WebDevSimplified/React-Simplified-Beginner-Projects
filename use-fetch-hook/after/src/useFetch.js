import { useState, useEffect } from "react"

export function useFetch(url, options = {}) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    setData(undefined)
    const controller = new AbortController()

    fetch(url, { signal: controller.signal, ...options })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          return Promise.reject(res)
        }
      })
      .then(setData)
      .catch(e => {
        if (e.name === "AbortError") return
        setIsError(true)
      })
      .finally(() => setIsLoading(false))

    return () => controller.abort()
  }, [url])

  return { isLoading, isError, data }
}
