import { useEffect, useState } from "react"
import { User } from "./User"

function App() {
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setStatus("loading")
    setUsers([])
    setError(null)

    const controller = new AbortController()
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then(res => {
        if (res.ok) return res.json()
        throw new Error(`Status code: ${res.status}`)
      })
      .then(users => {
        setUsers(users)
        setError(null)
        setStatus("fetched")
      })
      .catch(err => {
        if (err.name === "AbortError") return
        setError(err)
        setUsers([])
        setStatus("error")
      })

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <h1>User List</h1>
      {status === "loading" && <h2>Loading...</h2>}
      {status === "error" && (
        <>
          <h2>Error fetching users</h2>
          <p>{error.message}</p>
        </>
      )}
      {status === "fetched" && (
        <ul>
          {users.map(user => {
            return <User key={user.id} name={user.name} />
          })}
        </ul>
      )}
    </>
  )
}

export default App
