import React from 'react';
import bg from './Carousels-images/baruch1.jpg';
import bg1 from './Carousels-images/baruch2.jpg';

function Startmotion() {

return (
    <div>
        <header>
            <nav>
                <h3 id="logo"> Dream Vacation</h3>
                <img className="hamburger" src={bg}/>
            </nav>
            <section>
                <div class="hero">
                    <img src={bg1}/>
                    <h1 className="headline">Dream Big</h1>
                </div>
            </section>
        </header>

        <div className="slider"></div>
</div>

);
}

export default Startmotion;