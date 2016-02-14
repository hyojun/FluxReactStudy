import React from 'react';
import Immutable from 'immutable';
import Moment from 'moment';

const FORMAT_DATE = 'YYYY년 MM월';
const FORMAT_DAY = 'MM월 DD일';

export default class Calendar extends React.Component {

  constructor(prop) {
    super(prop);
  }

  render() {
    const { date, weekOffset, renderDay, onNextMonth, onPrevMonth, onPickDate } = this.props;
    return (
      <div className='Calendar'>
        <div className='Calendar-header'>
          <button onClick={onPrevMonth}>&laquo;</button>
          <div className='Calendar-header-currentDate'>{date.format(FORMAT_DATE)}</div>
          <button onClick={onNextMonth}>&raquo;</button>
        </div>
        <div className='Calendar-grid'>
          {this._createDateObjects(date, weekOffset).map((day, i) =>
            <div
              key={`day-${i}`}
              className={`Calendar-grid-item ${day.classNames || ''}`}
              onClick={() => onPickDate(day.day)}
            >
              {renderDay(day.day)}
            </div>
          )}
        </div>
      </div>
    );
  }

  _createDateObjects(date, weekOffset = 0) {
    const startOfMonth = date.startOf('month');

    let diff = startOfMonth.weekday() - weekOffset;
    if (diff < 0) diff += 7;

    const prevMonthDays = Immutable.Range(0,diff)
      .map(index => {
        day : new Moment([date.year(), date.month(), index]);
      });

    const currentMonthDays = Immutable.Range(1, date.daysInMonth() + 1)
      .map(index => ({
        day: new Moment([date.year(), date.month(), index])
      }));

    const daysAdded = prevMonthDays.size + currentMonthDays.size - 1;

    const nextMonthDays  = Immutable.Range(1, 7)
      .filter(n => (daysAdded + n) % 7 !== 0)
      .map(n => ({
        day: currentMonthDays.last().day.clone().add(n, 'days'),
        classNames: 'nextMonth'
      }));

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }

}

Calendar.propTypes = {
  weekOffset: React.PropTypes.number.isRequired,
  date: React.PropTypes.object.isRequired,
  renderDay: React.PropTypes.func,
  onNextMonth: React.PropTypes.func.isRequired,
  onPrevMonth: React.PropTypes.func.isRequired,
  onPickDate: React.PropTypes.func
};

Calendar.defaultProps = {
  weekOffset: 0,
  renderDay: day => day.format(FORMAT_DAY)
};
