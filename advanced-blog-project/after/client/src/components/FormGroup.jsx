export function FormGroup({ children, errorMessage }) {
  return (
    <div className={`form-group ${errorMessage != null ? "error" : ""}`}>
      {children}
      {errorMessage != null && (
        <div className="error-message">{errorMessage}</div>
      )}
    </div>
  )
}
