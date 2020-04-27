import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Courses from './Courses';
import Calendar from './Calendar'

function HomeWorkList() {

    const [key, setKey] = useState('Courses');

    return (
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="Courses" title="Courses">
            <Courses/>
        </Tab>
        <Tab eventKey="Calendar" title="Calendar">
          <Calendar/>
        </Tab>
      </Tabs>
);
}
export default HomeWorkList;