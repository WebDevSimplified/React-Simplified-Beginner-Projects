import { FormGroup } from "./FormGroup"
import ReactSelect from "react-select"
import { useRef, useState } from "react"
import "./styles.css"
import { checkCountry, checkEmail, checkPassword } from "./validators"

const COUNTRY_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
]

function App() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const countryRef = useRef()

  const [emailErrors, setEmailErrors] = useState([])
  const [passwordErrors, setPasswordErrors] = useState([])
  const [countryErrors, setCountryErrors] = useState([])

  function onSubmit(e) {
    e.preventDefault()

    const emailResults = checkEmail(emailRef.current.value)
    const passwordResults = checkPassword(passwordRef.current.value)
    const countryResults = checkCountry(countryRef.current.getValue()[0])

    setEmailErrors(emailResults)
    setPasswordErrors(passwordResults)
    setCountryErrors(countryResults)

    if (
      emailResults.length === 0 &&
      passwordResults.length === 0 &&
      countryResults.length === 0
    ) {
      alert("Success")
    }
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <FormGroup errors={emailErrors}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" id="email" ref={emailRef} />
      </FormGroup>
      <FormGroup errors={passwordErrors}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          ref={passwordRef}
        />
      </FormGroup>
      <FormGroup errors={countryErrors}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          ref={countryRef}
          options={COUNTRY_OPTIONS}
        />
      </FormGroup>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default App
