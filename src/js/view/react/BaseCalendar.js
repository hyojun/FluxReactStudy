
import React from 'react';
//import { Calendar } from 'react-calendar-component';
import Calendar from './calendar/Calendar';
import Moment from 'moment';
import 'moment/locale/nb';

require('res/css/calendar_style.css');

export default class BaseCalendar extends React.Component {

  constructor() {
    super();
    this.state = {
      date: new Moment()
    };
  }

  render() {
    return (
      <Calendar
        onNextMonth={() => this.setState({ date: this.state.date.clone().add(1, 'months') }) }
        onPrevMonth={() => this.setState({ date: this.state.date.clone().subtract(1, 'months') }) }
        date={this.state.date}
      />
    );
  }
}
