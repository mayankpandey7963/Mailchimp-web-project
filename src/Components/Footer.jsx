import React from 'react'
import { Container } from 'react-bootstrap'
import {Dropdown} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import {Row, Col} from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'

import ArrowAnimationEffect from './ArrowAnimationEffect'


// css
import '../Css/Footer.css'

//Icons
import { FaCheckCircle } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";


function Footer() {
  return (
    <>
        <Container fluid className='p-5' style={{backgroundColor:'#E7B75F'}}>
            <strong className='ps-4'>*Disclaimers</strong>
            <ol style={{fontSize:'12px'}}>
                <li>Generate up to 4x more orders with Customer Journey Builder automations based on orders generated through user's connected stores with automations versus when they used bulk emails.</li>
                <li><b>#1 email marketing platform:</b> Based on December 2023 publicly available data on competitors' number of customers.</li>
                <li>SMS is available as an add-on to US paid plans only and SMS credits are added to your account after purchase. Application and agreement to terms is required before purchasing credits. Credits are issued monthly and unused credits expire and do not roll over. Pricing varies. See terms for details.</li>
                <li>Up to 7x more orders through users' connected stores versus when they used bulk emails for Jan 1 2022–Jul 1 2023 period. Features and functionality of CJB varies by plan.</li>
                <li>141% more revenue for users' connected stores using predictive segmented emails versus non-predictive segmented emails for Jan 1 2022–Jul 1 2023 period. Standard and Premium plans only.</li>
                <li>Based on Capterra's 2023 Email Marketing Software Shortlist Shortlist. The Capterra Shortlist report constitutes the subjective opinions of individual end-user reviews, ratings, and data applied against a documented methodology; they neither represent the views of, nor constitute an endorsement by, Capterra or its affiliates. <Nav.Link href='#'>See shortlist.</Nav.Link></li>
                <li><b>25X ROI:</b> Based on all e-commerce revenue attributable to paid plan users’ Mailchimp campaigns from April 2023 to April 2024</li>
                <li><b>$1.7K per campaign:</b> Based on e-commerce users subscribed to a paid plan, with campaigns for connected stores that generated revenue between January and November 2022.</li>
                <li><b>Popup forms (beta):</b> Very limited availability to new and existing Mailchimp users and on web browsers only. Features may be more broadly available soon, but represents no obligation and should not be relied on in making a purchasing decision. Availability of features and functionality varies by plan type. For details, view <Nav.Link href='#'>plans and pricing.</Nav.Link> </li>
            </ol>

            <Row className='px-5 pt-5' style={{fontSize:'13px'}}>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="footer-section d-flex flex-column h-100">
                        <div className="footer-heading fw-bold mt-3 mb-2">Products</div>
                        <div className="vstack gap-2 flex-grow-1">
                          <Nav.Link href="#">Why Mailchimp?</Nav.Link>
                          <Nav.Link>Product Updates</Nav.Link>
                          <Nav.Link>Email Marketing</Nav.Link>
                          <Nav.Link>Websites</Nav.Link>
                          <Nav.Link>Transactional Email</Nav.Link>
                          <Nav.Link>How we Compare</Nav.Link>
                          <Nav.Link>GDPR Compliance</Nav.Link>
                          <Nav.Link>Security</Nav.Link>
                          <Nav.Link>Status</Nav.Link>
                          <Nav.Link>Mobile App</Nav.Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="footer-section d-flex flex-column h-100">
                      <div className="footer-heading fw-bold mt-3 mb-2">Resources</div>
                      <div className="vstack gap-2 flex-grow-1">
                        <Nav.Link eventKey="link-2">Marketing Library</Nav.Link>
                        <Nav.Link eventKey="link-2">Free Marketing Tools</Nav.Link>
                        <Nav.Link eventKey="link-2">Marketing Glossary</Nav.Link>
                        <Nav.Link eventKey="link-2">Integrations Directory</Nav.Link>
                      </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="footer-section d-flex flex-column h-100">
                      <div className="footer-heading fw-bold mt-3 mb-2">Community</div>
                      <div className="vstack gap-2 flex-grow-1">
                        <Nav.Link eventKey="link-2">Agencies & Freelancers</Nav.Link>
                        <Nav.Link eventKey="link-2">Developers</Nav.Link>
                        <Nav.Link eventKey="link-2">Events</Nav.Link>
                      </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="footer-section d-flex flex-column h-100">
                      <div className="footer-heading fw-bold mt-3 mb-2">Company</div>
                      <div className="vstack gap-2 flex-grow-1">
                        <Nav.Link eventKey="link-2">Our Story</Nav.Link>
                        <Nav.Link eventKey="link-2">Newsroom</Nav.Link>
                        <Nav.Link eventKey="link-2">Give Where You Live</Nav.Link>
                        <Nav.Link eventKey="link-2">Careers</Nav.Link>
                        <Nav.Link eventKey="link-2">Accessibility</Nav.Link>
                      </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="footer-section d-flex flex-column h-100">
                      <div className="footer-heading fw-bold mt-3 mb-2">Help</div>
                      <div className="vstack gap-2 flex-grow-1">
                        <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
                        <Nav.Link eventKey="link-2">Hire an Expert</Nav.Link>
                        <Nav.Link eventKey="link-2">Help Center</Nav.Link>
                        <Nav.Link eventKey="link-2">Talk to Sales</Nav.Link>
                      </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <img className='img-fluid mt-3 mb-2' src="./MCP.png" alt="" />
                    <small style={{fontFamily:"serif", fontSize:'15px'}} className='pb-5'>Films, podcasts, and original series that celebrate the entrepreneurial spirit.</small>
                    <ArrowAnimationEffect />
                </Col>

            </Row>
            <hr/>

            <Row>
                <Col xs={12}>
                    <div className="intuitTextGroup d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 gap-md-4 px-2">
                        {/* <Stack direction='horizontal' gap={4}> */}
                            <Nav.Link href='#' className='fw-bold fs-5'>INTUIT</Nav.Link>
                            <Nav.Link href='#'><FaCheckCircle /> turbotax</Nav.Link>
                            <Nav.Link href='#'> <span className='rounded-circle text-white bg-dark' style={{padding:'3px'}}>ck</span> creditKarma</Nav.Link>
                            <Nav.Link href='#'><img className='img-fluid rounded-circle' width={'17px'} src="./Quickbooks.jpg" alt="" /> quickbooks</Nav.Link>
                            <Nav.Link href='#'>mailchimp</Nav.Link>
                        {/* </Stack> */}
                    </div>
                </Col>
                <Col xs={12}>
                    <div className="appStore_GoogleStore mt-5 gap-2 gap-md-4 d-flex flex-column flex-md-row justify-content-center">
                            <Nav.Link><img className='img-fluid' src="./icon-ios.png" alt="" />    </Nav.Link>
                            <Nav.Link><img className='img-fluid' src="./icon-android.png" alt="" /></Nav.Link>
                            <Nav.Link><img className='img-fluid' src="./icon-facebook.png" alt="" /></Nav.Link>
                            <Nav.Link><img className='img-fluid' src="./icon-twitter.png" alt="" /></Nav.Link>
                            <Nav.Link><img className='img-fluid' src="./icon-instagram.png" alt="" /></Nav.Link>
                            <Nav.Link><img className='img-fluid' src="./icon-linkedin.png" alt="" /></Nav.Link>
                            <Nav.Link><img className='img-fluid' src="./icon-youtube.png" alt="" /></Nav.Link>
                            <Nav.Link><img className='img-fluid' src="./pinterest-logo.png" alt="" /></Nav.Link>
                            <Nav.Link><img className='img-fluid' src="./GDPR.png" alt="" /></Nav.Link>
                    </div>
                </Col>
                <Row className='pt-5 d-flex justify-content-center'>
                    <Col xs={12} sm={6} md={2}>
                        <Nav.Link>
                            <Dropdown className='border border-dark'>
                                <Dropdown.Toggle className='bg-light border-0 w-100 text-dark' style={{fontSize: "13px"}} id="dropdown-basic"><BsGlobe2/> EN</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><strong className='pe-3'>EN</strong> English</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><strong className='pe-3'>ES</strong> Espanol</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><strong className='pe-3'>FR</strong> Francais</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><strong className='pe-3'>BR</strong> Portugues</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><strong className='pe-3'>DE</strong> Deutsch</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><strong className='pe-3'>IT</strong> Italiano</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                    </Col>
                    <Col xs={10}>
                        <p style={{fontSize:'13px'}}>&copy;2001-2025 All Rights Reserved. Mailchimp&reg; is a registered trademark of The Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc. Privacy | Terms | Legal | Cookie Preferences</p>
                    </Col>
                </Row>
            </Row>
        </Container>
    </>
  )
}

export default Footer
