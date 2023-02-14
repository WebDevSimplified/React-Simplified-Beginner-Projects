# Before Getting Started

BONUS: Options, abort signal

This 

There are quite a few ways to customize this hook with different defaults, but for this particular use case we will be focusing specifically on fetching JSON data.

# Instructions

1. Add the ability to add todos with an input and a button which adds the todo when clicked. These todos should show up in a list above the input.
    * You can use a form for this if you want, but there are some quirks with forms in React that we cover later in the course so it is probably best just to not use a form for now.
2. Add the ability to mark a todo as complete by clicking on the checkbox or label for the todo.
3. Add a delete button next to each todo item in the list which will remove the todo when clicked.

## Bonus

1. The easiest way to create this project is to just put all the HTML/data into one single component. This works fine for this project since it is so small, but with larger projects is not ideal. The bonus for this project is to break up your project so that each todo item in the list is rendered as a separate component from your `App.jsx` component.