# Before Getting Started

The staring code for this project includes all the JSX/logic of using the hook already. The only thing you need to do is implement the `useArray` hook and import it into the `App.jsx` file. Also, the code for the bonus section of the course is included but just commented out so you can uncomment those lines whenever you tackle the bonus sections.

# Instructions

1. Create a custom `useArray` hook that takes an array as its only argument, stores that array in state, and returns an object with the following properties:
    * `array` - This is the array stored in state
    * `set` - This is just the set state function returned from `useState`
    * `push` - A function that takes one argument and adds that argument to the end of the array
    * `replace` - A function that takes two arguments (the index of the element to replace, and the new element to replace the old element with) and replaces the element at the specified index with the new element
    * `filter` - A function that takes one argument (a callback function) and filters the array just like the `array.filter` method
    * `remove` - A function that takes two arguments (the index of the element to remove) and removes the element at the index specified
    * `clear` - A function that will remove all elements from the array

## Bonus

1. Add a `reset` function that will reset the array to its initial value
2. Make it so the initial value you pass to `useArray` works exactly the same as `useState`'s initial value. This means it can accept a function or an array. This will mostly only impact the `reset` function.