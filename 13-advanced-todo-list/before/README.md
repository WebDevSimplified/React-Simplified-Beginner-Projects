# Before Getting Started

The starting code for this project is the exact same code as the ending of the simple todo list project we completed earlier in the course. The only change is I added an `app.html` file which shows what the final HTML/CSS for this project should look like. Also, the CSS file you used in the first project already contains all the styles needed for this updated version of the project so you do not need to add any additional styles.

The goal of this project is to expand upon our simple todo list by adding more complex user interactions which will lead to more complex state management.

# Instructions

1. The state for our todos should be stored in local storage so when we come back to the page at a later time all our data is still there
2. Convert all the state in the application to use `useReducer` and `Context` to pass the state between components
3. Add the ability to delete existing todos
4. Add a form that lets you filter todos by their name and hide completed todos

## Bonus

1. Add the ability to edit existing todos
   - This is in the bonus section not because the editing portion is tricky, but because handling the proper UI state of swapping between text and an input is something we haven't really done before
