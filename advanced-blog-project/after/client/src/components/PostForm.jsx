import { Form, Link } from "react-router-dom"
import { FormGroup } from "../components/FormGroup"

export function PostForm({ users, errors, defaultValues, isSubmitting }) {
  return (
    <Form className="form" method="post">
      <div className="form-row">
        <FormGroup errorMessage={errors?.title}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={defaultValues?.title}
          />
        </FormGroup>
        <FormGroup errorMessage={errors?.userId}>
          <label htmlFor="userId">Author</label>
          <select
            name="userId"
            id="userId"
            defaultValue={defaultValues?.userId}
          >
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup errorMessage={errors?.body}>
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" defaultValue={defaultValues?.body} />
        </FormGroup>
      </div>
      <div className="form-row form-btn-row">
        <Link to=".." className="btn btn-outline">
          Cancel
        </Link>
        <button className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </Form>
  )
}

export function postFormValidator({ title, body, userId }) {
  const errors = {}

  if (title === "") {
    errors.title = "Required"
  }

  if (userId === "") {
    errors.userId = "Required"
  }

  if (body === "") {
    errors.body = "Required"
  }

  return errors
}
