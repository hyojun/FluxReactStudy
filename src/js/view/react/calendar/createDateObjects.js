import Immutable from 'immutable';
import Moment from 'moment';

export default function createDateObjects(date, weekOffset = 0) {
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
