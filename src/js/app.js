
import React from 'react';
import ReactDOM from 'react-dom';
import BaseCalendar from 'js/view/react/BaseCalendar.js';

require('res/less/sb-admin-2.less');

ReactDOM.render(
  <BaseCalendar/>,
  document.getElementById('study_container')
);
