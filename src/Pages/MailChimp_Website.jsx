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
        <Container fluid style={{ minHeight: "220vh", backgroundColor: 'rgb(238, 238, 238)' }}>
          {/* Section 1: Heading + Image */}
          <Row className='p-3 p-md-5 d-flex align-items-center flex-wrap'>
            <Col xs={12} md={6} className='p-3 text-center text-md-start'>
              <h1 style={{ fontFamily: 'initial', fontWeight: 'bold' }}>
                Convert more with automations
              </h1>
              <p>
                We’re the #1 email marketing and automations platform.* That means marketing and sales tools to help you win more new and repeat customers. Sign up for Free.
              </p>
              <img className='img-fluid py-3' src="./GDPR.png" alt="GDPR Banner" />
            </Col>

            <Col xs={12} md={6} className='p-3 text-center'>
              <img className='img-fluid' src="./video_image.png" alt="Video Thumbnail" />
            </Col>
          </Row>

          {/* Section 2: Offer + Pricing Card */}
          <Row className='p-3 p-md-5 d-flex justify-content-center'>
            <Col xs={12} lg={5} className='p-3 text-center text-lg-start'>
              <h2>
                Try our Standard plan for <u style={{ textDecorationColor: 'yellow' }}>50% off!</u>
              </h2>
              <p>
                Spend less to grow more with 50% off for 12 months, even if you change to our Premium or Essentials plans. Cancel or downgrade to our basic Free plan at any time.
              </p>
            </Col>

            <Col xs={12} lg={6} xl={5} className='p-3'>
              <Card className='w-100 p-3 p-md-4 shadow-lg rounded-4'>
                <Card.Body>
                  <Card.Title className='fs-5 fs-md-4 mb-3'>Standard</Card.Title>
                  <p className='mb-3'>Send up to 6,000 emails each month.</p>
              
                  <Row className='border rounded p-3 mb-4 mx-0 align-items-center'>
                    <Col xs={12} sm={6} className='mb-2 mb-sm-0'>
                      <span className='fw-semibold'>Contacts</span>
                    </Col>
              
                    <Col xs={12} sm={6}>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant='outline-dark'
                          size='sm'
                          className='w-100 text-start'>
                          500
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ maxHeight: '250px', overflowY: 'auto' }}>
                          {standardPrice.map((price, index) => (
                            <Dropdown.Item key={index}>
                              {price.toLocaleString()}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                        
                  <div className="priceTexts mb-2">
                    <small className="text-muted">Starts at</small>
                    <div className="d-flex flex-wrap align-items-baseline gap-1">
                      <del className="text-secondary me-2 small">&#8377; 1,150</del>
                      <strong className="fs-6">&#8377;575</strong>
                      <sub className="text-secondary">/mo for 12 months</sub>
                    </div>
                  </div>
                        
                  <div className='mb-4'>
                    <span>Then, starts at </span>
                    <strong>&#8377; 1,150 /month</strong>
                  </div>
                        
                  <div className="d-flex justify-content-center mb-3">
                    <AnimatedButton text='Buy Now' backgroundColor="warning" />
                  </div>
                        
                  <p className='text-muted' style={{ fontSize: '12px' }}>
                    † See <Card.Link href='#' className='text-dark text-decoration-underline'>Offer Terms</Card.Link>,{' '}
                    <Card.Link href='#' className='text-dark text-decoration-underline'>Overages</Card.Link> apply if contact or email send limit is exceeded.{' '}
                    <Card.Link href='#' className='text-dark text-decoration-underline'>Learn more</Card.Link>
                  </p>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>

        <Container fluid style={{ backgroundColor: '#fff', position: 'relative' }}>
          {/* PREMIUM PLAN SECTION */}
          <Row className='px-3 px-md-5 text-white' style={{ backgroundColor: '#39352C' }}>
            <Col xs={12} md={6} className='py-5'>
              <h2 className='text-center text-md-start'>
                The ultimate expert-assisted platform for growth at scale
              </h2>
              <p className='pt-2' style={{ fontSize: '12px' }}>
                Get our most comprehensive tools...
              </p>
              <Row>
                <Col xs={12} sm={6}>
                  <ul className='list-unstyled' style={{ fontSize: '11px' }}>
                    <li className='pb-2'><FaCircleCheck className='text-warning' /> Unlimited seats & audiences</li>
                    <li className='pb-2'><FaCircleCheck className='text-warning' /> Migration support</li>
                    <li><FaCircleCheck className='text-warning' /> Customer success manager</li>
                  </ul>
                </Col>
                <Col xs={12} sm={6}>
                  <ul className='list-unstyled' style={{ fontSize: '11px' }}>
                    <li className='pb-2'><FaCircleCheck className='text-warning' /> Data-driven tools</li>
                    <li className='pb-2'><FaCircleCheck className='text-warning' /> Priority phone support</li>
                    <li><FaCircleCheck className='text-warning' /> Dedicated onboarding</li>
                  </ul>
                </Col>
              </Row>
              <p className='pt-4' style={{ fontSize: '11px' }}>
                Larger contact list? Call <a className='text-white' href="#">+1 (855)...</a>
              </p>
            </Col>

            <Col xs={12} md={6} className='py-5 d-flex justify-content-center'>
              <Card className='w-100 w-md-75 p-3 shadow-lg'>
                <Card.Title>Premium</Card.Title>
                <Card.Body>
                  <Card.Text>Send up to 150,000 emails each month.</Card.Text>

                  <Row className='border p-3 mb-4'>
                    <Col xs={12}>Contacts</Col>
                    <Col xs={12}>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" size="sm" className='w-100 text-start'>
                          10,000
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ maxHeight: '250px', overflowY: 'auto' }}>
                          {premiumPrice.map((price, i) => (
                            <Dropdown.Item key={i}>{price.toLocaleString()}</Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                        
                  <small>Starts at</small>
                  <div className='priceTexts'>
                    <del className='text-secondary pe-2'>&#8377; 23,000</del>
                    <strong>&#8377;11,500</strong>
                    <sub className='text-secondary ps-1'>/mo for 12 months</sub>
                  </div>
                  <span className='text-secondary pe-1'>Then, starts at</span>
                  <strong>23,000 /month</strong>
                        
                  <div className='d-grid gap-2 mt-3'>
                    <AnimatedButton text='Buy Now' backgroundColor='warning' />
                    <AnimatedButton text='Request Demo' backgroundColor='warning' />
                  </div>
                        
                  <Card.Text className='mt-3' style={{ fontSize: '12px' }}>
                    † See <Card.Link href="#" className='text-dark text-decoration-underline'>Offer Terms</Card.Link>, 
                    <Card.Link href="#" className='text-dark'>Overages</Card.Link>, 
                    <Card.Link href="#" className='text-dark'>Learn more</Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
                        
          {/* WHY BEST-IN-CLASS SECTION */}
          <Row className='mt-1 text-white py-5 px-3' style={{ backgroundColor: '#231E15' }}>
            <Col>
              <Row>
                <Col xs={12} md={6} className='mb-4 text-center text-md-start'>
                  <h2>Find out why we're <br /> best-in-class</h2>
                  <p>The #1 email marketing...</p>
                </Col>
                <Col xs={12} md={6}>
                  <Row>
                    <Col xs={6} className='mb-4'><strong>Up to 25x ROI</strong><br /><small>seen by Mailchimp users</small></Col>
                    <Col xs={6} className='mb-4'><strong>22 years experience</strong><br /><small>helping businesses sell more</small></Col>
                    <Col xs={6}><strong>11M+ Users</strong><br /><small>globally</small></Col>
                    <Col xs={6}><strong>3.1B emails</strong><br /><small>AI-generated by customers</small></Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
                        
          {/* TOOLS GRID SECTION */}
          <Row className='text-white p-5' style={{ backgroundColor: '#231E15' }}>
            <Col>
              <Row className='pb-5'>
                <Col xs={12} md={4} className='mb-4'>
                  <h3>The tools you need<br />to start (and keep) growing</h3>
                </Col>
                <Col xs={12} md={8}>
                  <Row>
                    {[
                      { title: 'Convert with Automations', desc: 'Send the right message...' },
                      { title: 'Optimize with Analytics', desc: 'Get data-driven suggestions...' },
                      { title: 'Design with AI', desc: 'Beautiful, on-brand designs...' },
                      { title: 'Target with Segmentation', desc: 'Boost loyalty with predictions...' },
                      { title: 'Build with Templates', desc: 'Launch campaigns in minutes...' },
                      { title: 'Sync with Integrations', desc: 'Connect tools you already use...' }
                    ].map((item, i) => (
                      <Col xs={12} sm={6} lg={4} className='mb-4' key={i}>
                        <h5>{item.title}</h5>
                        <p className='mb-0'>{item.desc}</p>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
                  
          {/* INTEGRATION SECTION */}
          <Row className='p-5'>
            <Col xs={12} md={8}>
              <IntegrationCard />
            </Col>
            <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
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
