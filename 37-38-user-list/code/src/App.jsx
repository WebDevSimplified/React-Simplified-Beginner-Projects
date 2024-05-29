import { useEffect, useState } from "react";
import "./App.css";

const User = ({ name }) => <li>{name}</li>;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    async function getUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getUsers();

    return () => controller.abort();
  }, []);

  const userList = users.length ? (
    <ul>
      {users.map((el) => (
        <User key={el.id} name={el.name} />
      ))}
    </ul>
  ) : null;

  return (
    <>
      <h1>User List</h1>
      {loading ? <p>Loading...</p> : userList}
    </>
  );
}

export default App;
