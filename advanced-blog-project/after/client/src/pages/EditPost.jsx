import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom"
import { getPost, updatePost } from "../api/posts"
import { getUsers } from "../api/users"
import { PostForm, postFormValidator } from "../components/PostForm"

function EditPost() {
  const { users, post } = useLoaderData()
  const errors = useActionData()
  const { state } = useNavigation()

  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <PostForm
        users={users}
        errors={errors}
        defaultValues={post}
        isSubmitting={state === "submitting"}
      />
    </>
  )
}

async function loader({ request: { signal }, params }) {
  const users = getUsers({ signal })
  const post = getPost(params.postId, { signal })
  return { users: await users, post: await post }
}

async function action({ request, params }) {
  const formData = await request.formData()
  const title = formData.get("title")
  const userId = formData.get("userId")
  const body = formData.get("body")

  const errors = postFormValidator({ title, userId, body })

  if (Object.keys(errors).length > 0) {
    return errors
  }

  const post = await updatePost(
    params.postId,
    { title, userId, body },
    { signal: request.signal }
  )

  return redirect(`/posts/${post.id}`)
}

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
}
