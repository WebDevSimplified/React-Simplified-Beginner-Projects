import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.setState((prev) => {
              return {
                age: prev.age + 1,
              };
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState((prev) => {
              return {
                age: prev.age - 1,
              };
            });
          }}
        >
          -
        </button>
        <h2>
          Hello {this.state.name || "User"}, might be {this.state.age}
        </h2>
      </div>
    );
  }
}

// function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={() => setAge((prev) => prev + 1)}>+</button>
//       <button onClick={() => setAge((prev) => prev - 1)}>-</button>
//       <h2>
//         Hello {name || "User"}, might be {age}
//       </h2>
//     </div>
//   );
// }
