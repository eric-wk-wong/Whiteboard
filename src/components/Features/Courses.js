import React from 'react';
import Button from 'react-bootstrap/Button';
import{Link} from 'react-router-dom';
function Courses() {

return (
    <div className="courses">
<Button variant="primary" className="icon expand" componentClass={Link} href="/CIS4160_course" to="/"><strong>CIS 4160</strong></Button>
<Button variant="danger" className="icon expand"  componentClass={Link} href="/CIS5800_course" to="/"><strong>CIS 5800</strong></Button>
</div>

);
}

export default Courses;