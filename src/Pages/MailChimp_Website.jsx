import React from 'react'

import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'; 

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/MailChimp_Website.css';
import '../../src/App.css'

// Components

import MailchimpNavbar from '../Components/MailchimpNavbar'
import AnimatedButton from '../Components/AnimatedButton';
import ArrowAnimationEffect from '../Components/ArrowAnimationEffect';
import Footer from '../Components/Footer';
import IntegrationCard from '../Components/IntegrationCard';
import InfoCards from '../Components/InfoCards';

// Icons
import { FaCircleCheck } from "react-icons/fa6";

function MailChimp_Webside() {

    const standardPrice = [1500, 2500, 5000, 1000, 15000, 20000, 25000, 30000, 40000, 50000, 75000, 100000]
    const premiumPrice = [15000, 20000, 25000, 30000, 40000, 50000, 75000, 100000, 130000, 150000, 2000000, 2500000]


  return (
    <>
      <MailchimpNavbar/>
        {/* Convert more with automations */}
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

            <Row className='p-5 d-flex justify-content-between'>
                <Col xs={12} sm={9} md={7} lg={5} className='p-5'>
                    <h2>Try our Standard plan for <u style={{textDecorationColor:'yellow'}}>50% off!</u></h2>
                    <p>Spend less to grow more with 50% off for 12 months, even if you change to our Premium or Essentials plans. Cancel or downgrade to our basic Free plan at any time.</p>
                </Col>

                {/* Standards */}
                <Col xs={12} sm={9} md={7} lg={5} className='p-5 d-flex justify-content-center'>
                    <Card className=' w-100 p-3 shadow-lg'>
                        <Card.Title className='ps-3'>
                            Standard
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>Send up to 6,000 emails each month.</Card.Text>
                            <Row className='border border-12 p-2 mb-4 mx-1 d-flex justify-content-between'>
                                <Col sm={6}>
                                    <span>Contacts</span>
                                </Col>

                                <Col sm={6}>
                                    <Dropdown >
                                        <Dropdown.Toggle variant='light' id="dropdown-basic">
                                         500
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{maxHeight:'250px', overflowY:'auto'}}>
                                          {standardPrice.map((price, index) =>(
                                            <Dropdown.Item key={index}>
                                                {price.toLocaleString()}
                                            </Dropdown.Item>
                                          ))}
                                          </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <small>Starts at</small>
                            <div className="priceTexts d-flex align-items-baseline my-1">
                                <del className='text-secondary pe-2'>&#8377; 1,150</del>
                                <strong>&#8377;575</strong>
                                <sub className='text-secondary ps-1'>/mo for 12 months</sub>
                            </div>

                            <div>
                              <span className="pe-1">Then, starts at</span>
                              <strong>&#8377; 1,150 /month</strong>
                            </div>

                            <br />
                            <div className="btn my-2 d-flex justify-content-center">
                                <AnimatedButton text='Buy Now' backgroundColor="warning" />
                            </div>
                            <Card.Text style={{fontSize:'12px'}}>
                                † See <Card.Link href='#' className='text-dark' style={{textDecoration:'underline', textDecorationStyle:'dotted'}}>Offer Terms</Card.Link>,{''}
                                
                                <Card.Link href='#' className='text-dark'>Overages</Card.Link>, {' '}
                                apply if contact or email send limit is exceeded. 

                                <Card.Link href='#' className='text-dark'>Learn more</Card.Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        {/* The ultimate expert-assisted platform for growth at scale */}
        <Container fluid style={{backgroundColor:'rgb(255, 255, 255)', position:'relative'}}>
           <div className='premium_priceCard_Div'>
                <Row className='mx-5 my-0 text-white d-flex justify-content-between' style={{backgroundColor:'#39352C'}}>
                    <Col xs={12} sm={6} md={4} className='p-5'>
                        <h2>The ultimate expert-assisted platform for growth at scale</h2>
                        <p style={{fontSize:'12px'}} className='pt-2'>Get our most comprehensive tools to engage your audience and increase sales, with the dedicated support of experts to migrate your data, provide strategic guidance, and more—exclusive to the Premium plan.</p>
                        <Row>
                            <Col sm={6}>
                                <ul className='list-unstyled' style={{fontSize:'11px'}}>
                                    <li className='pb-2'>
                                        <FaCircleCheck className='text-warning' /> 
                                        Unlimited seats & audiences
                                    </li>
                                    <li className='pb-2'>
                                        <FaCircleCheck className='text-warning' /> 
                                        Migration support
                                    </li>
                                    <li>
                                        <FaCircleCheck className='text-warning' />
                                        Customer success manager
                                    </li>
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

                    {/* Preminum_ */}
                    <Col xs={12} sm={10} md={7} lg={6}  className='premium_price_card p-5 d-flex justify-content-center'>
                        <Card className='p-2 w-75 shadow-lg'>
                            <Card.Title className='ps-3'>
                                Premium
                            </Card.Title>
                            <Card.Body>
                                <Card.Text>Send up to 150,000 emails each month.</Card.Text>
                                <Row className='border border-12 p-2 mb-4 mx-1 d-flex justify-content-between'>
                                    <Col sm={6}>Contacts</Col>

                                    <Col sm={6}>
                                       <Dropdown>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                                10,000
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu style={{ maxHeight: '250px', overflowY: 'auto' }}>
                                                {premiumPrice.map((price, index) =>(
                                                    <Dropdown.Item key={index}>
                                                        {price.toLocaleString()}
                                                    </Dropdown.Item>
                                                ))}
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
                                    <AnimatedButton text='Buy Now' backgroundColor='warning'/>
                                </div>
                                <div className="btn mt-2 d-flex justify-content-center">
                                    <AnimatedButton text='Request Demo' backgroundColor='warning' />
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
                <InfoCards/>
            </Row>

           <Row className='text-white p-5' style={{ backgroundColor: '#231E15' }}>
                <Col>
                    <Row className='pb-5'>
                      <Col xs={12} md={4} className='mb-4'>
                        <h3>The tools you need <br /> to start (and keep) <br /> growing</h3>
                      </Col>

                      <Col xs={12} md={8}>
                        <Row>
                          {[
                            {
                              title: 'Convert with Automations',
                              desc: 'Send the right message at the right time to convert more customers.',
                            },
                            {
                              title: 'Optimize with Analytics',
                              desc: 'Get data-driven suggestions to help make your content more engaging.',
                            },
                            {
                              title: 'Design with AI',
                              desc: 'Get beautiful, on-brand designs made for you with the power of AI.',
                            },
                            {
                              title: 'Target with Segmentation',
                              desc: 'Boost customer loyalty by predicting the right ones to target.',
                            },
                            {
                              title: 'Build with Templates',
                              desc: 'Launch campaigns in minutes with pre-designed templates that fit any message.',
                            },
                            {
                              title: 'Sync with Integrations',
                              desc: 'Connect to the tools you already use to save time and make better decisions.',
                            }
                          ].map((item, index) => (
                            <Col xs={12} sm={6} lg={4} className='mb-4' key={index}>
                              <h5>{item.title}</h5>
                              <p className="mb-0">{item.desc}</p>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                </Col>
            </Row>


            {/* IntegrationsCard */}
            <Row className='p-5'>
                
                {/* IntegrationCard */}
                <IntegrationCard/>
                
                <Col xs={4}>
                    <ArrowAnimationEffect width='25px' />
                </Col>                
            </Row>
        </Container>

        <Container fluid >
            <Row className='p-5' style={{backgroundColor:'#F5F5F5'}}>
                <Col sm={6} className='p-5'>
                    <div className="disruption">
                        <Image fluid src="./logo-disruptivos-2020.png" alt="" />
                        <blockquote className='fs-3 pt-3' style={{fontFamily:'cursive'}}>"If you have invested the time and resources to have a valuable database of subscribers and clients, Mailchimp has the ideal set of tools to help make it profitable.”</blockquote>

                        <span><b>Maria Ortiz</b> Marketing Manager at Disruptivos</span>
                    </div>
                </Col>
                <Col sm={6} className='mt-5'>
                    <Image className=' w-100 ' src="./Disruptivos.png" alt="" />
                </Col>
            </Row>

            <Row className='text-white text-center py-5' style={{backgroundColor:'#231E15'}}>
                <Col xs={12} >
                    <h2 className='mb-4' style={{fontFamily:'cursive'}}>Find out what makes us the #1 email <br /> marketing and automations platform*</h2>
                </Col>
                <Col xs={12}>
                    <AnimatedButton width={150} text='Select Plan' backgroundColor='warning' shadowColor='white' />
                </Col>
            </Row>
        </Container>

        <Footer/>

    </>
  )
}

export default MailChimp_Webside
