# Before Getting Started

This is by far the biggest project we have covered so far in this course. It combines many concepts we learned in previous sections of this course with the complex concepts related to routing. This project is meant to be a challenge, but it is also meant to be a lot of fun.

The starting code for this project is also quite a bit different. There are two folders to worry about. The `api` folder contains the code for the fake API we will be using, while the `client` folder contains the static HTML files for each page in our application as well as the CSS file for all the styling needed. In order to start the API you need to run `npm run dev` inside the `api` folder (make sure you run `npm i` first to install the dependencies). This should start up an API on `http://localhost:3000`. This API is built on the [json-server](https://www.npmjs.com/package/json-server) package, which is a great tool for quickly building fake APIs. Essentially, whenever you make a request to the API it will read/write to the `db.json` file to get your data. I also included a `db.example.json` file which is the same as the `db.json` file, but it will never be modified so if you want to reset the API data to its original state you can copy the JSON from the `db.example.json` file into the `db.json` file.

The goal of this project is to create an application that renders out all of the data from the API. This API contains data on users, comments, posts, and todos.

Also, there will be things in this project that we may not have covered yet related to React Router (or even other concepts). That is ok. The goal of this project is to not only practice the skills we have learned, but to also learn how to look up documentation and figure out how to implement things we haven't covered yet. Another thing to consider when building out this project is how to keep your code clean and organized. This project is quite a bit larger and more complex than our previous projects so it is a challenge to keep your code organized and easy to read.

# API Information

The API has the following endpoints:

- `GET /posts` - Returns all of the posts
- `GET /posts/:id` - Returns a single post
- `GET /posts/:id/comments` - Returns all of the comments for a single post
- `GET /users` - Returns all of the users
- `GET /users/:id` - Returns a single user
- `GET /posts?userId=<userId>` - Returns all of the posts for a single user
- `GET /todos` - Returns all of the todos
- `GET /todos?userId=<userId>` - Returns all of the todos for a single user

# Instructions

1. Create a nav bar that contains links to the following pages:
   - Posts
   - Users
   - Todos
2. Create a Posts page that renders out all of the posts from the API in a card based grid where each card contains the title, body, and a link to view the post.
3. Create a Users page that renders out all of the users from the API in a card based grid where each card contains the user name, company name, email, website, and a link to view the user.
4. Create a Todos page that renders out all of the todos from the API in a list where each item contains the todo title and is crossed off if completed.
5. Create a Post page that renders out the post title, and body.
6. Create a User page that renders out the user name, company name, email, website, and address.

## Bonus:

1. Add a loading spinner that shows while the data is being fetched. Make sure this only renders over the main content area and does not cover up the navbar.
2. Add a 404 error page that still shows the navbar, but renders a 404 error message inside the main content area.
3. Add an error page that renders a generic error message in production, but renders the full error message and stack trace in development.
4. On the Post page render out all of the comments for that post as well as the name for the user that created the post. Make the user name is a link to the user page.
5. On the User page render out all of the posts that user created in a grid format as well as all the todos that user has in a list format.
