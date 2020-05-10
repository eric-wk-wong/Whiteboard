import React from 'react';
import Button from 'react-bootstrap/Button';
import{Link} from 'react-router-dom';
function Courses() {

return (
    <div className="courses">
        <Link className="icon expand" to="/StudentPage"><Button variant="primary"><strong>CIS 4160</strong></Button></Link>
        </div>

);
}

export default Courses;