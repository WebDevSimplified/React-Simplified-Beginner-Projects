import React from "react"

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      age: 0,
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState(currentState => {
              return {
                age: currentState.age - 1,
              }
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState(currentState => {
              return {
                age: currentState.age + 1,
              }
            })
          }
        >
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    )
  }
}
