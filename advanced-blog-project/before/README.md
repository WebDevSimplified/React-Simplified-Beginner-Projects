# Before Getting Started

This is going to be another large project, but luckily it won't be as large as the last project. The goal of this project is to utilize actions and forms to allow users to filter, create, and edit posts. The starting code for this project is exactly the same as the ending code from the previous project. You also do not need to worry about updating your CSS file since all the new styles needed for this project were already included in the CSS file from the previous project.

You will also notice the `html` folder. This just contains the HTML for the pages that need to be changed/added for this project. You can use these files to help you figure out what needs to be changed on the existing pages as well as what to add for the new pages.

# API Information

The API has the following _new_ endpoints:

- `POST /posts` - Create a new post
- `PUT /posts/:id` - Update a post
- `GET /posts?q=<query>&userId=<userId>` - Returns all of the posts that match the query and userId

# Instructions

1. Create a New Post page that renders out a form that allows the user to create a new post. Don't forget to add a button to the Posts page linking to the New Post page. The form should have the following fields:
   - Title
   - Body
   - Author (User)
2. Create an Edit Post page that renders out a form that allows the user to edit an existing post. The form should be identical to the new post form. Don't forget to add a button to the Post page linking to the Edit Post page.
3. Add a filter to the Posts page that allows the user to filter the posts by a query.

## Bonus:

1. Add a filter to the Posts page that allows the user to filter the posts by the user that wrote the post.
2. Disable the submit button on the New Post and Edit Post pages if the form is in the process of submitting.
3. Handle the following validations on the New Post and Edit Post pages:
   - Title is required
   - Body is required
   - User is required
