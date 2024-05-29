import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Advait");
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />

      <div>
        <button onClick={() => setAge((v) => v - 1)}>-</button>
        {/* {`  ${age}  `} */}
        {age}
        <button onClick={() => setAge((v) => v + 1)}>+</button>
      </div>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default App;
