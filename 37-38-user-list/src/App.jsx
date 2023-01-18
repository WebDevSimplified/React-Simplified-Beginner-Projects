import { useState, useEffect } from "react"
import { User } from "./User"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    // fetch("users.json")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(setUsers)
      .finally(() => setLoading(false))
  }, [])

  // let usersList
  // if (loading) {
  //   usersList = <h3>Loading...</h3>
  // } else {
  //   usersList = (
  //     <ul>
  //       {users.map(user => (
  //         <User key={user.id} {...user} />
  //       ))}
  //     </ul>
  //   )
  // }

  return (
    <>
      <h1>User List</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      )}
    </>
  )
}

export default App
