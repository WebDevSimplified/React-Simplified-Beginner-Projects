import { useEffect, useState } from "react";

// If the API does not work use these local URLs
// const URLS = {
//   USERS: "users.json",
//   POSTS: "posts.json",
//   COMMENTS: "comments.json",
// }

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

// BONUS:
// const OPTIONS = {
//   method: "POST",
//   body: JSON.stringify({ name: "Kyle" }),
//   headers: {
//     "Content-type": "application/json",
//   },
// }

function useFetch(url, option = {}) {
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setData(null);
    setIsError(false);
    setIsLoading(true);

    fetch(url, { ...option })
      .then((res) => {
        if (res.status === 200) return res.json();
        return Promise.reject(res);
      })
      .then(setData)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [url]);
  return {
    data,
    isLoading,
    isError,
  };
}

function App() {
  const [url, setUrl] = useState(URLS.USERS);

  const { data, isLoading, isError } = useFetch(url);
  // BONUS:
  // const { data, isLoading, isError } = useFetch(url, OPTIONS)

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            checked={url === URLS.USERS}
            onChange={() => setUrl(URLS.USERS)}
          />
          Users
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.POSTS}
            onChange={() => setUrl(URLS.POSTS)}
          />
          Posts
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.COMMENTS}
            onChange={() => setUrl(URLS.COMMENTS)}
          />
          Comments
        </label>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  );
}

export default App;
