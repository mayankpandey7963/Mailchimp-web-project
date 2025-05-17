import React from 'react'
import MailchimpNavbar from '../Components/MailchimpNavbar'

import { Container, Row, Col, NavLink, Nav } from 'react-bootstrap';
import {Card, CardGroup} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'; 

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/MailChimp_Website.css';
import '../../src/App.css'

// Components
import AnimatedButton from '../Components/animatedButton';
import ArrowAnimationEffect from '../Components/ArrowAnimationEffect';
import Footer from '../Components/Footer';
import HeaderNavbar from '../Components/HeaderNavbar'

// Icons
import { FaCircleCheck } from "react-icons/fa6";

function MailChimp_Webside() {
  return (
    <>
      <MailchimpNavbar/>

        <Container fluid style={{minHeight:"220vh", backgroundColor:'rgb(238, 238, 238)'}}>
            <Row className='p-5'>
                <Col md={6} className='p-5'>
                    <h1 style={{fontFamily:'initial', fontWeight:'bold'}}>Convert more with automations</h1>
                    <p>We’re the #1 email marketing and automations platform.* That means marketing and sales tools to help you win more new and repeat customers. Sign up for Free.</p>
                    <img className='py-4' src="./GDPR.png" alt="" />
                </Col>
                <Col md={6} className='p-5'>
                    <img className='img-fluid' src="./video_image.png" alt="" />
                </Col>
            </Row>

            <Row className='p-5'>
            <Col md={7} className='p-5'>
                <h2>Try our Standard plan for <u style={{textDecorationColor:'yellow'}}>50% off!</u></h2>
                <p>Spend less to grow more with 50% off for 12 months, even if you change to our Premium or Essentials plans. Cancel or downgrade to our basic Free plan at any time.</p>
            </Col>
            <Col md={5} className='p-5 d-flex justify-content-center'>
                <Card className='p-2 w-75 shadow-lg'>
                    <Card.Title className='ps-3'>
                        Standard
                    </Card.Title>
                    <Card.Body>
                        <Card.Text>Send up to 6,000 emails each month.</Card.Text>
                        <Row className='border border-12 p-2 mb-4 mx-1 d-flex justify-content-between'>
                            <Col sm={6}>Contacts</Col>

                            <Col sm={6}>
                                <Dropdown >
                                    <Dropdown.Toggle variant='light' id="dropdown-basic">
                                     500
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{maxHeight:'300px', overflowY:'auto'}}>
                                      <Dropdown.Item href="#">1,500</Dropdown.Item>
                                      <Dropdown.Item href="#">2,500</Dropdown.Item>
                                      <Dropdown.Item href="#">5,000</Dropdown.Item>
                                      <Dropdown.Item href="#">10,000</Dropdown.Item>
                                      <Dropdown.Item href="#">15,000</Dropdown.Item>
                                      <Dropdown.Item href="#">20,000</Dropdown.Item>
                                      <Dropdown.Item href="#">25,000</Dropdown.Item>
                                      <Dropdown.Item href="#">30,000</Dropdown.Item>
                                      <Dropdown.Item href="#">40,000</Dropdown.Item>
                                      <Dropdown.Item href="#">50,000</Dropdown.Item>
                                      <Dropdown.Item href="#">75,000</Dropdown.Item>
                                      <Dropdown.Item href="#">100,000</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <small>Starts at</small>
                        <div className="priceTexts">
                            <del className='text-secondary pe-2'>&#8377; 1,150</del>
                            <strong>&#8377;575</strong>
                            <sub className='text-secondary ps-1'>/mo for 12 months</sub>
                        </div>
                        <span className='text-secondary pe-1'>Then, starts at</span>
                        <strong>1,150 /month</strong>
                        <br />
                        <div className="btn mt-2 d-flex justify-content-center">
                            <AnimatedButton text='Buy Now' backgroundColor='warning' width="100%" />
                        </div>
                        <Card.Text style={{fontSize:'12px'}}>
                            † See <Card.Link href='#' className='text-dark' style={{textDecoration:'underline', textDecorationStyle:'dotted'}}>Offer Terms</Card.Link>
                            <Card.Link href='#' className='text-dark'>Overages</Card.Link>  apply if contact or email send limit is exceeded. 
                            <Card.Link href='#' className='text-dark'>Learn more</Card.Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>

        <Container fluid style={{backgroundColor:'rgb(255, 255, 255)', position:'relative'}}>
           <div className='premium_priceCard_Div'>
             <Row className='mx-5 my-0 text-white' style={{backgroundColor:'#39352C'}}>
                <Col md={7} className='p-5'>
                <h2>The ultimate expert-assisted platform for growth at scale</h2>
                <p style={{fontSize:'12px'}} className='pt-2'>Get our most comprehensive tools to engage your audience and increase sales, with the dedicated support of experts to migrate your data, provide strategic guidance, and more—exclusive to the Premium plan.</p>
                <Row>
                    <Col sm={6}>
                        <ul className='list-unstyled' style={{fontSize:'11px'}}>
                            <li className='pb-2'><FaCircleCheck className='text-warning' /> Unlimited seats & audiences</li>
                            <li className='pb-2'><FaCircleCheck className='text-warning' /> Migration support</li>
                            <li><FaCircleCheck className='text-warning' /> Customer success manager</li>
                        </ul>
                    </Col>
                    <Col sm={6}>
                        <ul className='list-unstyled' style={{fontSize:'11px'}}>
                            <li className='pb-2'><FaCircleCheck className='text-warning' /> Data-drive optimization tools</li>
                            <li className='pb-2'><FaCircleCheck className='text-warning' /> Priority phone support</li>
                            <li><FaCircleCheck className='text-warning' /> Dedicated onboarding</li>
                        </ul>
                    </Col>
                </Row>
                <p style={{fontSize:'11px'}} className='pt-5'>Larger contact list? Call <a className='text-white' href="#">+1 (855) 546-4819</a>  for custom pricing, annual plans, demos, and more. <a className='text-white' href="#">Contact sales.</a> </p>
                </Col>
                <Col md={5} className='premium_price_card border border-1 border-dark p-4 d-flex justify-content-center'>
                <Card className='p-2 w-75 shadow-lg'>
                    <Card.Title className='ps-3'>
                        Premium
                    </Card.Title>
                    <Card.Body>
                        <Card.Text>Send up to 150,000 emails each month.</Card.Text>
                        <Row className='border border-12 p-2 mb-4 mx-1 d-flex justify-content-between'>
                            <Col sm={6}>Contacts</Col>

                            <Col sm={6}>
                                <Dropdown >
                                    <Dropdown.Toggle variant='light' id="dropdown-basic">
                                     10,000
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{maxHeight:'300px', overflowY:'auto'}}>
                                      <Dropdown.Item href="#">15,000</Dropdown.Item>
                                      <Dropdown.Item href="#">20,000</Dropdown.Item>
                                      <Dropdown.Item href="#">25,000</Dropdown.Item>
                                      <Dropdown.Item href="#">30,000</Dropdown.Item>
                                      <Dropdown.Item href="#">40,000</Dropdown.Item>
                                      <Dropdown.Item href="#">50,000</Dropdown.Item>
                                      <Dropdown.Item href="#">75,000</Dropdown.Item>
                                      <Dropdown.Item href="#">100,000</Dropdown.Item>
                                      <Dropdown.Item href="#">130,000</Dropdown.Item>
                                      <Dropdown.Item href="#">150,000</Dropdown.Item>
                                      <Dropdown.Item href="#">200,000</Dropdown.Item>
                                      <Dropdown.Item href="#">250,000+</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <small>Starts at</small>
                        <div className="priceTexts">
                            <del className='text-secondary pe-2'>&#8377; 23,000</del>
                            <strong>&#8377;11,500</strong>
                            <sub className='text-secondary ps-1'>/mo for 12 months</sub>
                        </div>
                        <span className='text-secondary pe-1'>Then, starts at</span>
                        <strong>23,000 /month</strong>
                        <br />
                        <div className="btn mt-2 d-flex justify-content-center">
                            <AnimatedButton text='Buy Now' backgroundColor='warning' width="100%" />
                        </div>
                        <div className="btn mt-2 d-flex justify-content-center">
                            <AnimatedButton text='Request Demo' backgroundColor='warning' width="100%" />
                        </div>
                        <Card.Text style={{fontSize:'12px'}}>
                            † See <Card.Link href='#' className='text-dark' style={{textDecoration:'underline', textDecorationStyle:'dotted'}}>Offer Terms</Card.Link>
                            <Card.Link href='#' className='text-dark'>Overages</Card.Link>  apply if contact or email send limit is exceeded. 
                            <Card.Link href='#' className='text-dark'>Learn more</Card.Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
             </Row>
           </div>

            <Row className='mt-1 text-white p-5' style={{backgroundColor:'#231E15'}}>
                <Col className='p-5'>
                    <Row>
                        <Col xs={6} className='ps-5'>
                            <h2>Find Out why we're <br /> best-in-class</h2> 
                            <p>The #1 email marketing and <br /> automations platform* that <br /> recommends ways to get more <br /> opens, clicks, and sales.</p>
                        </Col>
                        <Col xs={6} className='pe-5 ps-0'>
                            <Row>
                                <Col sm={6} className=' ps-0'> 
                                    <strong>Up to 25x ROI</strong> <br />
                                    <small>seen by Mailchimp users*</small>
                                </Col>
                                <Col sm={6}> 
                                    <strong>22 years experience</strong> <br />
                                    <small>helping businesses sell more</small>
                                </Col>
                                <Col sm={6} className='pt-5 ps-0'> 
                                    <strong>11M+ Users</strong> <br />
                                    <small>of Mailchimp globally</small>
                                </Col>
                                <Col sm={6} className='pt-5'> 
                                    <strong>Over 3.1 billion emails</strong> <br />
                                    <small>with AI-generated content sent by  Mailchimp customer*</small>
                                </Col>
                                                                
                            </Row>
                        </Col>
                        
                    </Row>
                    
                </Col>
            </Row>

            <Row className='p-5'>
                <Col xs={4}>
                    
                    <Card className='h-100vh'>
                        <Card.Img variant="top" src="./Integrations.png" />
                        <Card.Body>
                          <Card.Title><Nav.Link href='#'>300+ app integrations</Nav.Link></Card.Title>
                          <Card.Text>
                            Connect you favourite apps to send more targeted campaigns.
                          </Card.Text>
                         <ArrowAnimationEffect/>
                        </Card.Body>
                    </Card>                  
                </Col>

                <Col xs={4}>
                    <Card className='h-100vh'>
                        <Card.Img variant="top" src="./Support.png" />
                        <Card.Body>
                          <Card.Title><Nav.Link href='#'>Hands-on support</Nav.Link></Card.Title>
                          <Card.Text>
                            Get help onboarding within your first 30 days at no additional cost.
                          </Card.Text>
                          <ArrowAnimationEffect/>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={4}>
                    <Card>
                        <Card.Img variant="top" src="./12_million_businesses.png" />
                        <Card.Body>
                          <Card.Title><Nav.Link href='#'>12M+ businesses use Mailchimp</Nav.Link></Card.Title>
                          <Card.Text>
                            Learn from our millions of users worldwide. You'll be in good company.
                          </Card.Text>
                          <ArrowAnimationEffect/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className='text-white p-5' style={{backgroundColor:'#231E15'}}>
                <Col>
                    <Row className='p-5'>
                        <Col md={4}>
                            <h3>The tools you need <br /> to start (and keep) <br /> growing</h3>
                        </Col>
                        <Col md={8} className='ps-0'>
                            <Row>
                                <Col xs={6} className='pe-5'>
                                    <h4>Convert with Automations</h4>
                                    <span>Send the right message at the right time to convert more customers.</span>
                                </Col>
                                
                                <Col xs={6}>
                                    <h4>Optimize with Analytics</h4>
                                    <span>Get data-driven suggestions to help make your content more engaging.</span>
                                </Col>
                                
                                <Col xs={6} className='py-5 pe-5'>
                                    <h4>Design with AI</h4>
                                    <span>Get beautiful, on-brand designs made for you with the power of AI.</span>
                                </Col>
                                
                                <Col xs={6} className='py-5 pe-5'>
                                    <h4>Target with Segmentation</h4>
                                    <span>Boost customer loyalty by predicting the right ones to target.</span>
                                </Col>
                                
                                <Col xs={6}>
                                    <h4>Build with Templates</h4>
                                    <span>Launch campaigns in minutes with pre-designed templates that fit any message.</span>
                                </Col>
                                
                                <Col xs={6}>
                                    <h4>Sync with Integrations</h4>
                                    <span>Connect to the tools you already use to save time and make better decisions.</span>
                                </Col>
                                
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='p-5'>
                <h1>Bring in more data, drive more <br /> growth with our integrations</h1>
                <Col xs={4} className='d-flex py-4 socialMediaBoxes'>
                    <img src="./Canva.jpg" width={'80rem'} alt="Canva" />
                    <div className="socialMediaTexts ps-3">
                        <Nav.Link href=''><b>Canva</b></Nav.Link>
                        <span>Create compelling visuals for your marketing.</span>
                    </div>
                </Col>
                <Col xs={4} className='d-flex py-4 socialMediaBoxes'>
                    <img src="./Salesforce__1_.jpg" width={'80rem'} alt="Canva" />
                    <div className="socialMediaTexts ps-3">
                        <Nav.Link href=''><b>Mailchimp for Salesforce</b></Nav.Link>
                        <span>Sync your Mailchimp subscribers and Salesforce&reg; leads across platforms.</span>
                    </div>
                </Col>
                <Col xs={4} className='d-flex py-4 socialMediaBoxes'>
                    <img src="./Instagram__1_.jpg" width={'80rem'} alt="Canva" />
                    <div className="socialMediaTexts ps-3">
                        <Nav.Link href=''><b>Instagram</b></Nav.Link>
                        <span>Promote and share your instagram posts in email campaigns.</span>
                    </div>
                </Col>
                <Col xs={4} className='d-flex py-4 socialMediaBoxes'>
                    <img src="./Google_Analytics2.jpg" width={'80rem'} alt="Canva" />
                    <div className="socialMediaTexts ps-3">
                        <Nav.Link href=''><b>Google Analytics</b></Nav.Link>
                        <span>Unlock powerful Insights with campaign, website or landing page data.</span>
                    </div>
                </Col>
                <Col xs={4} className='d-flex py-4 socialMediaBoxes'>
                    <img src="./Logo_Woo_color.png" width={'80rem'} alt="Canva" />
                    <div className="socialMediaTexts ps-3">
                        <Nav.Link href=''><b>WooCommerce</b></Nav.Link>
                        <span>Power your e-commerce store with smart marketing features.</span>
                    </div>
                </Col>
                <Col xs={4} className='d-flex py-4 socialMediaBoxes'>
                    <img src="./Shopify__1_.jpg" width={'80rem'} alt="Canva" />
                    <div className="socialMediaTexts ps-3">
                        <Nav.Link href=''><b>Shopify</b></Nav.Link>
                        <span>Sync Shopify customer. Products and purchase data to Mailchimp. </span>
                    </div>
                </Col>
                <Col xs={4} className='d-flex py-4 socialMediaBoxes'>
                    <img src="./Quickbooks.jpg" width={'80rem'} alt="Canva" />
                    <div className="socialMediaTexts ps-3">
                        <Nav.Link href=''><b>QuickBooks Online</b></Nav.Link>
                        <span>Bring together your marketing tools and invoice data.</span>
                    </div>
                </Col>
                <Col xs={4} className='d-flex py-4 socialMediaBoxes'>
                    <img src="./Squarespace.jpg" width={'80rem'} alt="Canva" />
                    <div className="socialMediaTexts ps-3">
                        <Nav.Link href=''><b>Squarespace Commerce</b></Nav.Link>
                        <span>Market your ecommerce business and drive sales.</span>
                    </div>
                </Col>
                <Col xs={4} className='d-flex py-4 socialMediaBoxes'>
                    <img src="./Zapier.jpg" width={'80rem'} alt="Canva" />
                    <div className="socialMediaTexts ps-3">
                        <Nav.Link href=''><b>Zapier</b></Nav.Link>
                        <span>Automatically pass data between web services without a single line of code.</span>
                    </div>
                </Col>
                <Col xs={4}>
                    <ArrowAnimationEffect width='25px' />
                </Col>                
            </Row>
        </Container>

        <Container fluid >
            <Row className='p-5' style={{backgroundColor:'#F5F5F5'}}>
                <Col sm={6} className='p-5'>
                    <div className="disruption">
                        <img src="./logo-disruptivos-2020.png" alt="" />
                        <blockquote className='fs-3 pt-3' style={{fontFamily:'cursive'}}>"If you have invested the time and resources to have a valuable database of subscribers and clients, Mailchimp has the ideal set of tools to help make it profitable.”</blockquote>

                        <span><b>Maria Ortiz</b> Marketing Manager at Disruptivos</span>
                    </div>
                </Col>
                <Col sm={6} className='mt-5'>
                    <img className='img-fluid w-100 ' src="./Disruptivos.png" alt="" />
                </Col>
            </Row>

            <Row style={{backgroundColor:'#231E15'}} className='py-5'>
                <Col className='text-white text-center py-5'>
                    <h2 className='mb-4' style={{fontFamily:'cursive'}}>Find out what makes us the #1 email <br /> marketing and automations platform*</h2>
                    <AnimatedButton text='Select Plan' backgroundColor='warning' shadowColor='white' />
                </Col>
            </Row>
        </Container>

        <Footer/>

    </>
  )
}

export default MailChimp_Webside
