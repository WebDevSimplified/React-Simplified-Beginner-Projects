import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns"
import { useMemo, useState } from "react"
import classnames from "classnames"

export function DatePicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="date-picker-container">
      <button className="date-picker-button" onClick={() => setIsOpen(o => !o)}>
        {value != null ? format(value, "MMM do, yyyy") : "Select a Date"}
      </button>
      {isOpen && <DatePickerModal value={value} onChange={onChange} />}
    </div>
  )
}

function DatePickerModal({ value, onChange }) {
  const [visibleMonth, setVisibleMonth] = useState(value || new Date())

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth)),
    end: endOfWeek(endOfMonth(visibleMonth)),
  })

  function showNextMonth() {
    setVisibleMonth(currentMonth => {
      return addMonths(currentMonth, 1)
    })
  }

  function showPreviousMonth() {
    setVisibleMonth(currentMonth => {
      return addMonths(currentMonth, -1)
    })
  }

  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button
          className="prev-month-button month-button"
          onClick={showPreviousMonth}
        >
          &larr;
        </button>
        <div className="current-month">
          {format(visibleMonth, "MMMM - yyyy")}
        </div>
        <button
          className="next-month-button month-button"
          onClick={showNextMonth}
        >
          &rarr;
        </button>
      </div>
      <div className="date-picker-grid-header date-picker-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="date-picker-grid-dates date-picker-grid">
        {visibleDates.map(date => (
          <button
            key={date.toDateString()}
            onClick={() => onChange(date)}
            className={classnames("date", {
              "date-picker-other-month-date": !isSameMonth(date, visibleMonth),
              selected: isSameDay(date, value),
              today: isToday(date),
            })}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
}
