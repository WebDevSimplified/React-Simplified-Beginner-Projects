export function FormGroup({ errors = [], children }) {
  return (
    <div className={`form-group ${errors.length > 0 ? "error" : ""}`}>
      {children}
      {errors.length > 0 && <div className="msg">{errors.join(", ")}</div>}
    </div>
  )
}
