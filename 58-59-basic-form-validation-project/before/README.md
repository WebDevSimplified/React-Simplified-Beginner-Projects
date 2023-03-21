# Before Getting Started

If you want you can open the `app.html` file in your browser to see what the final version of this application should look like. Your application should match the output exactly to what the `app.html` file renders. This includes all the class names you will need to work with this project.

This project is a bit of a complex one (especially the bonus section) since it combines together many concepts from all across this course.

# Instructions

1. Create a form with an email and password input that check for the following validations:
    * Email:
        * Required (Cannot be blank)
        * Must end in `@webdevsimplified.com`
    * Password:
        * Required (Cannot be blank)
        * Must Be 10 characters or longer
        * Must include a lowercase letter
        * Must include an uppercase letter
        * Must include a number
2. Show error messages next to the inputs every time the form is submitted if there are any. If there are no errors alert the message `Success`.
3. If you did the first 2 steps using refs, repeat the same thing with state instead. If you used state for the first 2 steps instead repeat the same thing with refs.

## Bonus

1. Make it so that the error messages show up when you submit the form (just like step 2), but also make it so the error messages will automatically update when you change the value in each input but only after the first time you submit the form.
    * For example if you type in an email that is incorrect and submit the form it should show an error message. Then when you go back and start making changes to the email input, the error message should update with the current errors as you change the input and disappear when the input is valid.