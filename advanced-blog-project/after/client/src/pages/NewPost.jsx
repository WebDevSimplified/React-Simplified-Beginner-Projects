import { redirect, useActionData, useLoaderData } from "react-router-dom"
import { createPost } from "../api/posts"
import { getUsers } from "../api/users"
import { PostForm, postFormValidator } from "../components/PostForm"

function NewPost() {
  const users = useLoaderData()
  const errors = useActionData()

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm
        users={users}
        errors={errors}
        isSubmitting={state === "submitting"}
      />
    </>
  )
}

function loader({ request: { signal } }) {
  return getUsers({ signal })
}

async function action({ request }) {
  const formData = await request.formData()
  const title = formData.get("title")
  const userId = formData.get("userId")
  const body = formData.get("body")

  const errors = postFormValidator({ title, userId, body })

  if (Object.keys(errors).length > 0) {
    return errors
  }

  const post = await createPost(
    { title, userId, body },
    { signal: request.signal }
  )

  return redirect(`/posts/${post.id}`)
}

export const newPostRoute = {
  loader,
  action,
  element: <NewPost />,
}
