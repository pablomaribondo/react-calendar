import { FC } from 'react';

import useCalendar, { Column } from '../hooks/useCalendar';

const Calendar: FC = () => {
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    days,
    months,
    getNextMonth,
    getPrevMonth
  } = useCalendar();

  const dateClickHandler = (date: string) => {
    console.log(date);
  };

  return (
    <>
      <p className="mt-4 mb-2">
        Selected Month:{' '}
        {`${months[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}
      </p>

      <table className="table">
        <thead>
          <tr>
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(calendarRows).map((cols: Column[]) => (
            <tr key={cols[0].date}>
              {cols.map(col =>
                col.date === todayFormatted ? (
                  <td
                    key={col.date}
                    className={`${col.classes} today`}
                    onClick={() => dateClickHandler(col.date)}
                  >
                    {col.value}
                  </td>
                ) : (
                  <td
                    key={col.date}
                    className={col.classes}
                    onClick={() => dateClickHandler(col.date)}
                  >
                    {col.value}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" className="button" onClick={getPrevMonth}>
        Prev
      </button>
      <button type="button" className="button" onClick={getNextMonth}>
        Prev
      </button>
    </>
  );
};

export default Calendar;
