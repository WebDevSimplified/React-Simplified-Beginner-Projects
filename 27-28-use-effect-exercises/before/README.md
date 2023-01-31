# Before Getting Started

This project is a bit different since the starting code is a fully working React application. All you need to do is run `npm i` and `npm run dev` to install all dependencies and run the application. You will notice that this code looks nearly identical to the previous project. The only change is I added a button that will toggle between hiding and showing the `Child` component. This is just there to help us test mounting and unmounting of our component.

You may also notice I have removed `StrictMode` from the `main.jsx` file. I did this to make understanding and deciphering this exercise easier. We will cover what this does in just a few videos.


# Instructions

The following exercises should all be performed within the `Child` component.

1. `console.log` the text **Render** each time the component re-renders
2. `console.log` the text **Hi** when the component mounts
3. `console.log` the text **My name is {name} and I am {age} years old** whenever the `name` or `age` changes
4. Update the `document.title` to be equal to `name` whenever the `name` changes

## Bonus

1. `console.log` the text **Bye** when the component unmounts
2. Create a timeout that `console.log`s the text **My name is {name}** only after there has been a 1 second delay since the last time the name was changed.
    * For example, if I change the name from **Kyle** to **Kyl** and then to **Ky** without having more than 1 second between each name change the console should log nothing until 1 second after I finishing changing the name to **Ky** and then it will log **Ky**. If instead there as greater than 1 second delay between each change, it should log **Kyl** and then **Ky**. Each of those logs would happen exactly 1 second after the name was changed.