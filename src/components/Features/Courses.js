import React from 'react';
import Button from 'react-bootstrap/Button';
function Courses() {

return (
    <div className="courses">
<Button variant="primary" className="icon expand" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 5800</strong></Button>
<Button variant="secondary" className="icon expand" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 4800</strong></Button>
<Button variant="success" className="icon expand" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 4160</strong></Button>
<Button variant="info" className="icon expand" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 4100</strong></Button>
<Button variant="danger" className="icon expand" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 3920</strong></Button>
</div>

);
}

export default Courses;