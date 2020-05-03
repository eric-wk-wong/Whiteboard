import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Calendar from '../Features/Calendar'

function HomeWorkList() {

    const [key, setKey] = useState('announcement');

    return (
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="announcement" title="announcement">
        <br/>
      <h5>Total Confirmed Cases: 10000</h5>
        <hr/>
        <div className="announcement">
        <p><strong><a rel="noopener noreferrer" href="https://www.cuny.edu/coronavirus/" target="_blank">CORONAVIRUS UPDATES: </a></strong>
        No on-campus classes from March 12 - 18. Most classes will move to distance learning on March 19 for the remainder of the semester. CUNY schools, dorms, libraries, research facilities, day care centers, and labs remain open. </p>
      </div>
        </Tab>
        <Tab eventKey="Calendar" title="Calendar">
          <Calendar/>
        </Tab>
      </Tabs>
);
}
export default HomeWorkList;