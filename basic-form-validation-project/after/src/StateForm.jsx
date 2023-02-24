import { useState } from "react"
import { checkEmail, checkPassword } from "./validators"

export function StateForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)

  const passwordErrors = isAfterFirstSubmit ? checkPassword(password) : []
  const emailErrors = isAfterFirstSubmit ? checkEmail(email) : []

  function onSubmit(e) {
    e.preventDefault()
    setIsAfterFirstSubmit(true)

    const emailResults = checkEmail(email)
    const passwordResults = checkPassword(password)

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert("Success")
    }
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <div>State Form</div>
      <div className={`form-group ${emailErrors.length > 0 && "error"}`}>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          value={email}
          type="email"
          id="email"
          className="input"
          onChange={e => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 && "error"}`}>
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input"
          onChange={e => setPassword(e.target.value)}
        />
        {passwordErrors.length > 0 && (
          <div className="msg">{passwordErrors.join(", ")}</div>
        )}
      </div>
      <button class="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
