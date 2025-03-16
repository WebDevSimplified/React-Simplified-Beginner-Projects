# Before Getting Started

This project is identical to the previous `useEffect` project, but will be class based instead of function based. The starting code is the same, but the `Child` component is a class instead of a function.


# Instructions

The following exercises should all be performed within the `Child` component. They are exactly the same as the previous `useEffect` project instructions.

1. `console.log` the text **Render** each time the component re-renders
2. `console.log` the text **Hi** when the component mounts
3. `console.log` the text **My name is {name} and I am {age} years old** whenever the `name` or `age` changes
4. Update the `document.title` to be equal to `name` whenever the `name` changes

## Bonus

1. `console.log` the text **Bye** when the component unmounts
2. Create a timeout that `console.log`s the text **My name is {name}** only after there has been a 1 second delay since the last time the name was changed
    * For example, if I change the name from **Kyle** to **Kyl** and then to **Ky** without having more than 1 second between each name change the console should log nothing until 1 second after I finishing changing the name to **Ky** and then it will log **Ky**. If instead there as greater than 1 second delay between each change, it should log **Kyl** and then **Ky**. Each of those logs would happen exactly 1 second after the name was changed.