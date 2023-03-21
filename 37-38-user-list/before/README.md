# Before Getting Started

If you want you can open the `app.html` file in your browser to see what the final version of this application should look like. Your application should match the output exactly to what the `app.html` file renders.

**BONUS:** If you decide to do the bonus loading section you can view the `loading.html` file for an example of what the page should look like while loading.

If the API we use in this video is unavailable, or different in anyway to what I show in the video you can use the `users.json` file as an alternative to the API. If you place the `users.json` file in the `public` folder of your project you can fetch it by running `fetch("users.json")` in your code.


# Instructions

1. Fetch all users from the API (https://jsonplaceholder.typicode.com/users) in your App.jsx file using `useEffect`.
2. Render an `h1` that says **User List** and below that a `ul` containing a list of all users. This is a perfect use case for fragments since we don't want to wrap it in an extra div.
3. The users in the list should be in their own component and that component should take a `name` prop and return the `name` inside an `li` element.

## Bonus

1. Add a loading state that will display the text `Loading...` instead of the user list while it is being downloaded from the API.
    * You can use your dev tools to throttle your network speed to more easily test the loading. Go to the **Network** tab, click the **No Throttling** drop down and choose **Slow 3G**. 