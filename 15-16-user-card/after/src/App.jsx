import user from "./user.json"
import "./user.css"
import { UserCardFunction } from "./UserCardFunction"
import { UserCardClass } from "./UserCardClass"

function App() {
  return (
    <div>
      <UserCardFunction
        name={user.name}
        age={user.age}
        address={user.address}
        phoneNumber={user.phoneNumber}
      />
      <br />
      <UserCardClass
        name={user.name}
        age={user.age}
        address={user.address}
        phoneNumber={user.phoneNumber}
      />
    </div>
  )
}

export default App
