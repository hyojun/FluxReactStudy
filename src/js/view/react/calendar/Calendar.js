import React from 'react';
import createDateObjects from './createDateObjects';

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
          {createDateObjects(date, weekOffset).map((day, i) =>
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
