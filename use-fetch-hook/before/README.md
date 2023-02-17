# Before Getting Started

The staring code for this project includes all the JSX/logic of using the hook already. The only thing you need to do is implement the `useFetch` hook and import it into the `App.jsx` file. Also, the code for the bonus section of the course is included but just commented out so you can uncomment those lines whenever you tackle the bonus sections.

This project should hopefully be fairly easy for you as it is just taking everything we have done with fetch and putting it into a custom hook.

# Instructions

1. Create a custom `useFetch` hook that returns an object with the following data:
    * `isLoading` - Will be true while the fetch request is loading
    * `isError` - Will be true if the fetch request failed
    * `data` - Will contain the data from the fetch request

## Bonus

1. Add the ability to pass down an `options` object to the `useFetch` hook that will set the options for the fetch request.
2. Add in the proper cleanup functionality for aborting a request if a new request is triggered before the old one finishes.