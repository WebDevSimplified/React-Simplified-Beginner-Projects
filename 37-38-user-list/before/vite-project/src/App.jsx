import { useState, useEffect } from "react";
import "./App.css";

function User({ name }) {
  return <li>{name}</li>;
}
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((response) => setData(response));
  });

  console.log("Data = ", data);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {data.length === 0 && <h3>Loading...</h3>}
        {data &&
          data.map((e) => {
            return <User name={e.name} />;
          })}
      </ul>
    </div>
  );
}

export default App;
