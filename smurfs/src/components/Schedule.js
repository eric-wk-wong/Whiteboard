import React, {Component} from 'react';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';
import SideBar from './sidebar';
import Acc from './Acc';

class Schedules extends React.Component {
  render(){
return (
    <div>
        <Acc/>
        <SideBar/>
<div className="toprow">
    <div className="ScheduleComponent">
    <ScheduleComponent currentView='Week'>
    <Inject services={[Day,Week,WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
    </div>
    </div>
    </div>
);
}
}

export default Schedules;