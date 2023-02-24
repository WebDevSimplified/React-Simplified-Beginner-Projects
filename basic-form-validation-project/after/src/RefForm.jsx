import { useRef, useState } from "react"
import { checkEmail, checkPassword } from "./validators"

export function RefForm() {
  const [emailErrors, setEmailErrors] = useState([])
  const [passwordErrors, setPasswordErrors] = useState([])
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()

  function onSubmit(e) {
    e.preventDefault()
    setIsAfterFirstSubmit(true)

    const emailResults = checkEmail(emailRef.current.value)
    setEmailErrors(emailResults)

    const passwordResults = checkPassword(passwordRef.current.value)
    setPasswordErrors(passwordResults)

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert("Success")
    }
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <div>Ref Form</div>
      <div className={`form-group ${emailErrors.length > 0 && "error"}`}>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          className="input"
          onChange={
            isAfterFirstSubmit &&
            (e => setEmailErrors(checkEmail(e.target.value)))
          }
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
          ref={passwordRef}
          type="password"
          id="password"
          className="input"
          onChange={
            isAfterFirstSubmit &&
            (e => setPasswordErrors(checkPassword(e.target.value)))
          }
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
