import { FormGroup } from "./FormGroup"
import ReactSelect from "react-select"
import "./styles.css"
import { useController, useForm } from "react-hook-form"

const COUNTRY_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
]

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm()

  const { field: countryField } = useController({
    name: "country",
    control,
    rules: { required: { value: true, message: "Required" } },
  })

  function onSubmit(data) {
    console.log(data)
    alert("Success")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormGroup errorMessage={errors?.email?.message}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "Required" },
            validate: value => {
              if (!value.endsWith("@webdevsimplified.com")) {
                return "Must end with @webdevsimplified.com"
              }
            },
          })}
        />
      </FormGroup>
      <FormGroup errorMessage={errors?.password?.message}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          {...register("password", {
            required: { value: true, message: "Required" },
            minLength: { value: 10, message: "Must be at least 10 characters" },
            validate: {
              hasLowerCase: value => {
                if (!value.match(/[a-z]/)) {
                  return "Must include at least 1 lowercase letter"
                }
              },
              hasUpperCase: value => {
                if (!value.match(/[A-Z]/)) {
                  return "Must include at least 1 uppercase letter"
                }
              },
              hasNumber: value => {
                if (!value.match(/[0-9]/)) {
                  return "Must include at least 1 number"
                }
              },
            },
          })}
        />
      </FormGroup>
      <FormGroup errorMessage={errors?.country?.message}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          options={COUNTRY_OPTIONS}
          {...countryField}
        />
      </FormGroup>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default App
