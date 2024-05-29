import { useEffect, useRef, useState } from "react";

const later = (callback, lastChangedTime) => {
  const delay = 1000;

  setTimeout(() => {
    const elapsed = Date.now() - lastChangedTime.current;
    if (elapsed >= delay) callback();
  }, delay);
};

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const nameChangedTime = useRef(0);

  // 1
  console.log("Render");

  useEffect(() => {
    // 2
    console.log("Hi");
    // Bonus - 1
    return () => console.log("Bye");
  }, []);

  // 3
  useEffect(() => {
    console.log(`Name: ${name} | Age: ${age}`);
  }, [age, name]);
  useEffect(() => {
    document.title = name;
  }, [name]);

  // Bonus - 2
  useEffect(() => {
    nameChangedTime.current = Date.now();
    later(() => console.log(name), nameChangedTime);
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
