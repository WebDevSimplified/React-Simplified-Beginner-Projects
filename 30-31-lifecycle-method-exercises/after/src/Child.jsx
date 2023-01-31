import React from "react"

export class Child extends React.Component {
  constructor() {
    super()
    this.state = {
      age: 0,
      name: "",
    }
  }

  componentDidMount() {
    console.log("Hi")
    console.log("Render")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Render")

    if (prevState.name !== this.state.name) {
      document.title = this.state.name

      if (this.nameTimeout != null) clearTimeout(this.nameTimeout)

      this.nameTimeout = setTimeout(() => {
        console.log(`My name is ${this.state.name}`)
      }, 1000)
    }

    if (
      prevState.age !== this.state.age ||
      prevState.name !== this.state.name
    ) {
      console.log(
        `My name is ${this.state.name} and I am ${this.state.age} years old`
      )
    }
  }

  componentWillUnmount() {
    console.log("Bye")
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState(state => {
              return { age: state.age - 1 }
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState(state => {
              return { age: state.age + 1 }
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
