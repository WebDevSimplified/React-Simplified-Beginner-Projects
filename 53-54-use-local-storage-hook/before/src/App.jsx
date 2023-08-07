import { useEffect, useState } from "react";

// function useLocalStorage(key, initial) {
//   const [value, setValue] = useState(() => {
//     const data = localStorage.getItem(key);
//     if (data == null) {
//       if (typeof initial === "function") {
//         return initial();
//       } else {
//         return initial;
//       }
//     } else {
//       return JSON.parse(data);
//     }
//   });
//   useEffect(() => {
//     if (value === undefined) {
//       localStorage.removeItem(key);
//     } else {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
//   }, [value, key]);
//   return [value, setValue];
// }
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue == null) {
      if (typeof initialValue === "function") {
        return initialValue();
      } else {
        return initialValue;
      }
    } else {
      return JSON.parse(localValue);
    }
  });

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return [value, setValue];
}

function App() {
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "");

  // Bonus:
  const [lastName, setLastName] = useLocalStorage("LAST_NAME", () => {
    return "Default";
  });

  // Bonus:
  const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
    "Programming",
    "Weight Lifting",
  ]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      {/* Bonus: */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      {/* Bonus: */}
      <div>{hobbies.join(", ")}</div>
      <button
        onClick={() =>
          setHobbies((currentHobbies) => [...currentHobbies, "New Hobby"])
        }
      >
        Add Hobby
      </button>
    </>
  );
}

export default App;
