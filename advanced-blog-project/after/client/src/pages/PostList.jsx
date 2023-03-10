import { useEffect, useRef } from "react"
import { Form, Link, useLoaderData, useSearchParams } from "react-router-dom"
import { getPosts } from "../api/posts"
import { getUsers } from "../api/users"
import { FormGroup } from "../components/FormGroup"
import { PostCard } from "../components/PostCard"

function PostList() {
  const { posts, users, searchParams } = useLoaderData()
  const queryRef = useRef()
  const authorRef = useRef()

  useEffect(() => {
    queryRef.current.value = searchParams?.query || ""
  }, [searchParams.query])

  useEffect(() => {
    authorRef.current.value = searchParams?.userId || ""
  }, [searchParams.userId])

  return (
    <>
      <h1 className="page-title">
        Posts
        <div className="title-btns">
          <Link to="new" className="btn btn-outline">
            New
          </Link>
        </div>
      </h1>
      <Form className="form mb-4">
        <div className="form-row">
          <FormGroup>
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" ref={queryRef} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId" ref={authorRef}>
              <option value="">Any</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </FormGroup>
          <button className="btn">Filter</button>
        </div>
      </Form>
      <div className="card-grid">
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  )
}

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams
  const query = searchParams.get("query")
  const userId = searchParams.get("userId")
  const filterParams = { q: query }
  if (userId !== "") filterParams.userId = userId

  const posts = getPosts({ signal, params: filterParams })
  const users = getUsers({ signal })

  return {
    posts: await posts,
    users: await users,
    searchParams: { query, userId },
  }
}

export const postListRoute = {
  loader,
  element: <PostList />,
}
