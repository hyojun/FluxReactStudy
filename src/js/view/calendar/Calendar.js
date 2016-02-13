import React, { PropTypes } from 'react';
//import moment from 'moment';
import createDateObjects from './createDateObjects';

var Calendar = React.createClass({ //https://facebook.github.io/react/docs/reusable-components.html#es6-classes

  propTypes: {
    weekOffset: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
    renderDay: PropTypes.func,
    onNextMonth: PropTypes.func.isRequired,
    onPrevMonth: PropTypes.func.isRequired,
    onPickDate: PropTypes.func
  },

  getDefaultProps: function() {
    return {
      weekOffset: 0,
      renderDay: day => day.format('MM월 DD일')
    };
  },

  render : function() {
    const { date, weekOffset, renderDay, onNextMonth, onPrevMonth, onPickDate } = this.props;
    return (
      <div className='Calendar'>
        <div className='Calendar-header'>
          <button onClick={onPrevMonth}>&laquo;</button>
          <div className='Calendar-header-currentDate'>{date.format('YYYY년 MM월')}</div>
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

});

module.exports = Calendar;
