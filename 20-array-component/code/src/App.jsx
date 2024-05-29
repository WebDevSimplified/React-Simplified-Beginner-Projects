import { useState } from "react";
import "./App.css";

const initialState = ["A", "B", "C"];

function App() {
  const [v, setV] = useState(initialState);
  const [c, setC] = useState("");

  const removeFirst = () => setV([...v].slice(1));
  const removeLetter = () => setV([...v].filter((el) => el !== c));
  const addStart = () => setV([c, ...v]);
  const addEnd = () => setV([...v, c]);
  const reset = () => setV(initialState);

  const aToH = () => setV(v.map((el) => (el === "A" ? "H" : el)));

  return (
    <>
      <div>{v.join(", ")}</div>
      <br />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          value={c}
          onChange={(e) => setC(e.target.value.toUpperCase())}
          maxLength={1}
        />

        {/* 2 */}
        <br />
        <button onClick={removeFirst}>Remove first</button>

        {/* 3 */}
        <br />
        <button onClick={removeLetter}>Remove letter</button>

        {/* 4 */}
        <br />
        <button onClick={addStart}>Add start</button>

        {/* 5 */}
        <br />
        <button onClick={addEnd}>Add end</button>

        {/* 6 */}
        <br />
        <button onClick={() => setV([])}>Clear</button>

        {/* 7 */}
        <br />
        <button onClick={reset}>Reset</button>

        {/* 1 */}
        <br />
        <button onClick={aToH}>A to H</button>

        {/* 3 */}
        <br />
        {/* <button onClick={() => setV(v.toSpliced(1, 0, "X"))}>Insert</button> */}
        <button
          onClick={() =>
            (function addLetterAtIndex(letter = "X", index = 1) {
              setV((currentArray) => {
                return [
                  ...currentArray.slice(0, index),
                  letter,
                  ...currentArray.slice(index),
                ];
              });
            })()
          }
        >
          Insert
        </button>
      </div>
    </>
  );
}

export default App;
