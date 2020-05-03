import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import { Container, Row, Col } from 'react-bootstrap';

class HelpDesk extends Component {
	render() {
		return (
			<div className="HomeBG">
				<NavBar />
				<div>
					<Container>
						<Row className=" rowcenter toprow">
							<Col xs={12} md={12} className="layoutbg expand">
                            <br/>
								<div className="blog">
									<h5>Help Desk Page</h5>
								</div>
								<p>
									Here you will find usefp contact information of the various offices and their
									business hours.
								</p>
							</Col>
						</Row>

						<Row className="rowcenter">
							<Col xs={12} md={12} className="layoutbg expand">
								<br />
								<div className="blog">
									<h5>Finacial Aid Office</h5>
								</div>
								<hr />
                                <Container>
                                <Row>
                                <Col xs={6} sm={6} md={6}>
                                <p>
									Phone: (646)-312-1360 <br />Email: FAScustomerservice@baruch.cuny.edu
								</p>
                                </Col>
                                <Col xs={6} sm={6} md={6}>
                                    <p>Monday 9:00am - 6:00pm</p>
                                    <p>Tuesday 9:00am - 6:00pm</p>
                                    <p>Wednesday 9:00am - 6:00pm</p>
                                    <p>Thursday 9:00am - 6:00pm</p>
                                    <p>Friday 9:00am- 5:00pm</p>
                                </Col>
                                </Row>
                                </Container>
								
							</Col>
						</Row>

						<Row className="rowcenter">
							<Col xs={12} md={12} className="layoutbg expand">
								<br />
								<div className="blog">
									<h5>Registrar office</h5>
								</div>
								<hr />
							<Container>
                                <Row>
                                <Col xs={6} sm={6} md={6}>
                                <p>
									Phone: (646)-312-1150 <br />Fax: 646-312-1151
								</p>
                                </Col>
                                <Col xs={6} sm={6} md={6}>
										<p>Monday 9:00am - 6:00pm</p>
										<p>Tuesday 9:00am - 6:00pm</p>
										<p>Wednesday 9:00am - 6:00pm</p>
										<p>Thursday 9:00am - 6:00pm</p>
										<p>Friday 9:00am- 5:00pm</p>
                                </Col>
                                </Row>
                                </Container>
							</Col>
						</Row>


						<Row className="rowcenter">
							<Col xs={12} md={12} className="layoutbg expand">
								<br />
								<div className="blog">
									<h5>Advisement office</h5>
								</div>
								<hr />
							<Container>
                                <Row>
                                <Col xs={6} sm={6} md={6}>
								<p>
									<a href="http://baruch.cuny.edu/appointment">AdvisorTrak</a> <br />Email:
									academic.advisement@baruch.cuny.edu
								</p>
                                </Col>
                                <Col xs={6} sm={6} md={6}>
										<p>Monday 9:00am - 5:00pm</p>
										<p>Tuesday 9:00am - 5:00pm</p>
										<p>Wednesday 9:00am - 5:00pm</p>
										<p>Thursday 9:00am - 5:00pm</p>
										<p>Friday 9:00am- 5:00pm</p>
                                </Col>
                                </Row>
                                </Container>
							</Col>
						</Row>

						<Row className="rowcenter">
							<Col xs={12} md={12} className="layoutbg expand">
								<br />
								<div className="blog">
									<h5>Transfer Center</h5>
								</div>
								<hr />
							<Container>
                                <Row>
                                <Col xs={6} sm={6} md={6}>
								<p>
									Phone: (646) 312-1800 <br />Email: new.transfer@baruch.cuny.edu
								</p>
                                </Col>
                                <Col xs={6} sm={6} md={6}>
										<p>Monday 9:00am - 6:00pm</p>
										<p>Tuesday 9:00am - 6:00pm</p>
										<p>Wednesday 9:00am - 6:00pm</p>
										<p>Thursday 9:00am - 6:00pm</p>
										<p>Friday 9:00am- 5:00pm</p>
                                </Col>
                                </Row>
                                </Container>
							</Col>
						</Row>

						<Row className="rowcenter">
							<Col xs={12} md={12} className="layoutbg expand">
								<br />
								<div className="blog">
									<h5>Admissions Office</h5>
								</div>
								<hr />
							<Container>
                                <Row>
                                <Col xs={6} sm={6} md={6}>
								<p>
									Phone: (646)-312-2010 <br />Email: admissions@baruch.cuny.edu
								</p>
                                </Col>
                                <Col xs={6} sm={6} md={6}>
										<p>Monday 9:00am - 6:00pm</p>
										<p>Tuesday 9:00am - 6:00pm</p>
										<p>Wednesday 9:00am - 6:00pm</p>
										<p>Thursday 9:00am - 6:00pm</p>
										<p>Friday 9:00am- 5:00pm</p>
                                </Col>
                                </Row>
                                </Container>
							</Col>
						</Row>
						
					</Container>
				</div>
			</div>
		);
	}
}

export default HelpDesk;
