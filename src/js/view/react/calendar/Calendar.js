import React from 'react';
import Immutable from 'immutable';
import Moment from 'moment';
import GridItem from './GridItem';

const FORMAT_DATE = 'YYYY년 MM월';

export default class Calendar extends React.Component {

  constructor(prop) {
    super(prop);
  }

  render() {
    const { date, weekOffset, renderDay, onNextMonth, onPrevMonth } = this.props;
    const dateArr = this._createDateObjects(date, weekOffset);

    return (
      <div className='Calendar'>
        <div className='Calendar-header'>
          <button onClick={onPrevMonth}>&laquo;</button>
          <div className='Calendar-header-currentDate'>{date.format(FORMAT_DATE)}</div>
          <button onClick={onNextMonth}>&raquo;</button>
        </div>
        <div className='Calendar-grid'>
          {dateArr.map((oDay, mIndex) =>
            <GridItem
              key={`day-${mIndex}`}
              day={oDay}
              className={`Calendar-grid-item ${oDay.classNames || ''}`}
              renderDay={renderDay}
            />
          )}
        </div>
      </div>
    );
  }

  _createDateObjects(date, weekOffset = 0) {
    var dateArr = [];

    const startOfMonth = date.startOf('month');
    let diff = startOfMonth.weekday() - weekOffset;
    if (diff < 0) diff += 7;

    const prevMonthDays = Immutable.Range(0, diff)
      .map(n => ({
        day: startOfMonth.clone().subtract(diff - n, 'days'),
        classNames: 'prevMonth'
      }));

    const currentMonthDays = Immutable.Range(1, date.daysInMonth() + 1)
      .map(index => ({
        day: new Moment([date.year(), date.month(), index])
      }));

    const daysAdded = prevMonthDays.size + currentMonthDays.size;
    const nextMonthDays  = Immutable.Range(1, 7)
      .filter(n => (daysAdded + n) % 7 !== 0)
      .map(n => ({
        day: currentMonthDays.last().day.clone().add(n, 'days'),
        classNames: 'nextMonth'
      }));

    for(let i=0;i<prevMonthDays.count();i++){
      dateArr.push(prevMonthDays.get(i));
    }
    for(let i=0;i<currentMonthDays.count();i++){
      dateArr.push(currentMonthDays.get(i));
    }
    for(let i=0;i<nextMonthDays.count();i++){
      dateArr.push(nextMonthDays.get(i));
    }

    console.log(''+dateArr.length);
    return dateArr;
  }

}

Calendar.propTypes = {
  weekOffset: React.PropTypes.number.isRequired,
  date: React.PropTypes.object.isRequired,
  onNextMonth: React.PropTypes.func.isRequired,
  onPrevMonth: React.PropTypes.func.isRequired
};

Calendar.defaultProps = {
  weekOffset: 0
};
