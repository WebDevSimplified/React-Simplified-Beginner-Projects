import { useState } from "react"

const INITIAL_STATE = ["A", "B", "C"]

function App() {
  const [array, setArray] = useState(INITIAL_STATE)
  const [newValue, setNewValue] = useState("")

  function removeFirstElement() {
    setArray(a => a.slice(1))
  }

  function removeLetter(letter) {
    setArray(a => a.filter(element => element !== letter))
  }

  function AddToStart(letter) {
    setArray(a => [letter, ...a])
  }

  function AddToEnd(letter) {
    setArray(a => [...a, letter])
  }

  function addAtIndex(index, letter) {
    setArray(a => [...a.slice(0, index), letter, ...a.slice(index)])
  }

  function updateAToH() {
    setArray(a =>
      a.map(element => {
        if (element === "A") return "H"
        return element
      })
    )
  }

  return (
    <div>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeLetter("A")}>Remove All A's Element</button>
      <br />
      <button onClick={() => AddToStart("A")}>Add A To Start</button>
      <br />
      <button onClick={() => AddToEnd("Z")}>Add Z To End</button>
      <br />
      <button onClick={() => addAtIndex(2, "C")}>
        Add C In Third Position
      </button>
      <br />
      <input
        type="text"
        value={newValue}
        onChange={e => setNewValue(e.target.value)}
      />
      <button onClick={() => AddToStart(newValue)}>Add Input To Start</button>
      <br />
      <button onClick={updateAToH}>Change A's To H's</button>
      <br />
      <button onClick={() => setArray([])}>Clear</button>
      <br />
      <button onClick={() => setArray(INITIAL_STATE)}>Reset</button>
      <br />
      {array.join(", ")}
    </div>
  )
}

export default App
