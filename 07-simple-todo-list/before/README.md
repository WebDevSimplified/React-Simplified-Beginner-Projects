# Before Getting Started

If you want you can open the `app.html` file in your browser to see what the final version of this application should look like. Your application should match the output exactly to what the `app.html` file renders.

You may notice I included things like ids, data-attributes, class selectors, etc in the HTML. All these should be included in the final version of this project as the CSS uses them all. This is there to ensure you understand how to set HTML attributes in React.

This project will also be one of the first projects where the instructions I give you will be very vague on implementation details. It is up to you to figure out the best way to implement each task. This will also more closely resemble working on projects in the real world.

# Instructions

1. Add the ability to add todos with an input and a button which adds the todo when clicked. These todos should show up in a list above the input.
    * You can use a form for this if you want, but there are some quirks with forms in React that we cover later in the course so it is probably best just to not use a form for now.
2. Add the ability to mark a todo as complete by clicking on the checkbox or label for the todo.
3. Add a delete button next to each todo item in the list which will remove the todo when clicked.

## Bonus

1. The easiest way to create this project is to just put all the HTML/data into one single component. This works fine for this project since it is so small, but with larger projects is not ideal. The bonus for this project is to break up your project so that each todo item in the list is rendered as a separate component from your `App.jsx` component.