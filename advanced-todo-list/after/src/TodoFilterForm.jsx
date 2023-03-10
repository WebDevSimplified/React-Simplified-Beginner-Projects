export function TodoFilterForm({
  name,
  setName,
  hideCompleted,
  setHideCompleted,
}) {
  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={hideCompleted}
          onChange={e => setHideCompleted(e.target.checked)}
        />
        Hide Completed
      </label>
    </div>
  )
}
