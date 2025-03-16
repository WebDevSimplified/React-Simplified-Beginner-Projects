# Before Getting Started

The starting code for this project includes all the JSX/logic of using the hook already. The only thing you need to do is implement the `useLocalStorage` hook and import it into the `App.jsx` file. Also, the code for the bonus section of the course is included but just commented out so you can uncomment those lines whenever you tackle the bonus sections.

This project is a step up in difficulty from the last few (especially the bonus sections) so don't worry if this is a bit of a struggle.

# Instructions

1. Create a custom `useLocalStorage` hook that functions identically to `useState` by returning an array where the first element is the value and the second element is the function to set the value. This hook should take two arguments. The first is a string which is the key for `localStorage` and the second is the initial value of the state.
2. Whenever the state changes it should be synced with `localStorage` so that if you were to refresh your page nothing would change as all values are pulled from `localStorage` on initial load and stored in `localStorage` when changed.

## Bonus

1. Ensure that the `useLocalStorage` hook works just like `useState` in that you can pass it a value or function as the initial value.
2. Use JSON to serialize and deserialize the values stored in `localStorage` so that it will work with any value (such as arrays or objects).