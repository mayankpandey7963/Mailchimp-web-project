import React,{useState} from 'react';
import {Col, Row, Container, Nav, Navbar, Dropdown, Stack, Image} from 'react-bootstrap'

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/MailchimpNavbar.css'
import '../App.css'


// Icons
import { IoSearch } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";


// Components
import AnimatedButton from './AnimatedButton';
import ArrowAnimationEffect from './ArrowAnimationEffect';


function MailchimpNavbar() {

  const [activeMenu, setActiveMenu] = useState(null);

  const solutions_services = [
    {
      src: "./email_marketing_24.png",
      alt: "email marketing",
      title: "Email Marketing",
      desc: "Send Personalized emails that convert."
    },
    {
      src: "./marketing_automations_24.png",
      alt: "marketing automation",
      title: "Marketing Automation",
      desc: "Deliver the right message at the right time."
    },
    {
      src: "./Brain.png",
      alt: "ai marketing tools",
      title: "AI Marketing Tools",
      desc: "Say hello to your AI growth assistant."
    },
    {
      src: "./websites_domains_24.png",
      alt: "website domain",
      title: "Website Domain",
      desc: "Create your branded web presence."
    },
    {
      src: "./reporting_analytics_24.png",
      alt: "reporting and analytics",
      title: "Reporting and Analytics",
      desc: "Track sales & campaign performance"
    },
    {
      src: "./content_creation_24.png",
      alt: "content creation tools",
      title: "content creation tools",
      desc: "Build content that captivates and converts."
    },
    {
      src: "./social_media_marketing_24.png",
      alt: "social media marketing",
      title: "social media marketing",
      desc: "Amplify the conversation across multiple channels"
    },
    {
      src: "./audience_management_24.png",
      alt: "Audience management",
      title: "Audience management",
      desc: "Target and segment customers"
    },
    {
      src: "./magnet_export.png",
      alt: "Lead generation platform",
      title: "Lead generation platform",
      desc: "Grow your audience with high-quality leads."
    },
    {
      src: "./templates_24.png",
      alt: "Templates",
      title: "Templates",
      desc: "Customize pre-designed layouts."
    },
    {
      src: "./marketing-crm__2_.png",
      alt: "See all features",
      title: "See all features",
      desc: "See all our products offerings in one place."
    },

  ]
  const solutions_servicesLinks = [
    {
      title: "E-commerce and retail"
    },
    {
      title: "Mobile and web apps"
    },
    {
      title: "Start-ups"
    },
    {
      title: "Agencies and freelancers"
    },
    {
      title: "Developers"
    },
    {
      title: "PROFESSIONAL SERVICES"
    },
    {
      title: "Hire an Expert"
    },
    {
      title: "Personalized onboarding"
    },
    {
      title: "Customer success"
    }
  ]

  return (
    <>
    {/* quickbook_mailchimp icon */}
    <Container fluid className='border border-dark d-flex p-1 ps-4' style={{backgroundColor: '#f2f2f2'}}>
        <strong className='text-secondary'>INTUIT</strong>
        <span className='quickbook_mailchimp ps-2'>
          <img className='quickbook-icon me-1 rounded-circle' src="/Quickbooks.jpg" width={15} height={15} alt="Quickbooks" />
          <small className='quickbooks'>quickbooks</small>
        </span>
        <span className='quickbook_mailchimp ps-2'>
          <small className='mailchimp'>mailchimp</small>
        </span>
    </Container>

    
    <Container fluid className='bg-dark'>
      <div className="percentTexts text-white text-center py-1">
        <h6>Save 50% for 12 months</h6>
        <h6>-limited time offer. <u>Get started today</u></h6>
      </div>
    </Container>
    
    {/* Navbar */}
    <div onMouseEnter={() => setActiveMenu(activeMenu)} onMouseLeave={() => setActiveMenu(null)} style={{ position: "relative" }}>

      <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
        <Container fluid className="ms-2">
          <Navbar.Brand href="#home">
            <img src="/logo.png" width={120} height={35} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="me-0">
            <Nav className="align-items-center" style={{fontSize:'12px'}}>

              <Nav.Link onMouseEnter={() => setActiveMenu("solutions")} >Solutions and Services </Nav.Link>

              <Nav.Link onMouseEnter={() => setActiveMenu("integrations")}  >Integrations </Nav.Link>
             
              <Nav.Link onMouseEnter={() => setActiveMenu("resources")}  > Resources </Nav.Link>

              <Nav.Link href="#Switch" style={{ fontSize: '14px' }}>Switch to Mailchimp</Nav.Link>
              <Nav.Link href="#pricing" style={{ fontSize: '14px' }}>Pricing</Nav.Link>
              <Nav.Link className='ps-5 fs-4'><IoSearch /></Nav.Link>

              {/* Language Dropdown */}
              <Dropdown className='border border-dark'>
                <Dropdown.Toggle className='bg-light border-0 text-dark' style={{ fontSize: '13px' }}>
                  <BsGlobe2 /> EN
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item><strong className='pe-3'>EN</strong> English</Dropdown.Item>
                  <Dropdown.Item><strong className='pe-3'>ES</strong> Espanol</Dropdown.Item>
                  <Dropdown.Item><strong className='pe-3'>FR</strong> Francais</Dropdown.Item>
                  <Dropdown.Item><strong className='pe-3'>BR</strong> Portugues</Dropdown.Item>
                  <Dropdown.Item><strong className='pe-3'>DE</strong> Deutsch</Dropdown.Item>
                  <Dropdown.Item><strong className='pe-3'>IT</strong> Italiano</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link style={{ fontSize: '13px' }}>Sales: +1(800) 315-5939</Nav.Link>
              <Nav.Link><AnimatedButton text='Log in' backgroundColor='light' /></Nav.Link>
              <Nav.Link><AnimatedButton text='Sign up' backgroundColor='warning' /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mega Menu Section */}
      {activeMenu && (
      <div className="mega-menu-container w-100 position-absolute start-0 bg-white border-top shadow z-3" onMouseLeave={() => setActiveMenu  (null)} >
      <Container fluid>
        <Row>
          {activeMenu === "solutions" && (
            <>
              
              <Col xs={8} className='p-5'>
                <Row style={{fontSize:'12px'}}>
                  <Col xs={12}>
                    <div className="text_AnimatedBtn pb-3 d-flex justify-content-between">
                      <h2>Solutions and Services</h2>
                      <ArrowAnimationEffect text="See what's new"/>
                    </div>
                  </Col>

                  {(solutions_services.map((element, index) => (
                    <Col xs={12} sm={6} md={4} key={index} className='d-flex py-2 socialMediaBoxes'>

                      <Image fluid src={element.src} alt={element.alt} style={{width:'1.3rem', height:'1.3rem'}} />
                      <div className="socialMediaTexts ps-3">
                        <Nav.Link href='#'> <h6>{element.title}</h6></Nav.Link>
                        <p>{element.desc}</p>
                      </div>

                    </Col>
                  )))}
                </Row>
              </Col>

              <Col
                xs={4}
                className="vstack gap-2 p-5"
                style={{
                  backgroundColor: '#F6F6F4',
                  fontSize: '13px'
                }}
              >
                <h6>FOR YOUR INDUSTRY</h6>
              
                {solutions_servicesLinks.map((element, index) => (
                  <Nav.Link
                    href={element.link || '#'}
                    style={{ textDecoration: 'none', color: 'black' }}
                    key={index}
                  >
                    {element.title}
                  </Nav.Link>
                ))}
              </Col>


             
              
            </>
          )}

          {activeMenu === "integrations" && (
            <>
              <Col xs={8} className='px-5 py-2' style={{maxHeight:'380px', overflowY:'auto'}}>
                <Row style={{fontSize:'12px'}}>
                  <Col xs={12}>
                    <div className="text_AnimatedBtn d-flex justify-content-between">
                      <h5>Integrations</h5>
                      <ArrowAnimationEffect text='See 300+ Integrations'/>
                    </div>
                    <span style={{fontSize:"13sxan"}}>MOST POPULAR</span>
                  </Col>
                  <Col xs={7}>
                    <div className="image_Gallery m-2">
                      <Row className='mb-3'>
                       <Stack direction="horizontal" gap={3}>
                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'><img className='img-fluid p-2' width={53} height={53} src="./Shopify_icon.png" alt="Shopify_icon" /></Col>

                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'>
                            <img 
                            className='img-fluid p-2'
                            width={53}
                            height={53}
                            src="./Logo_Woo_color.png"
                            alt="Logo_Woo_color" />
                          </Col>

                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'>
                            <img 
                            className='img-fluid p-2'
                            width={53}
                            height={53}
                            src="./Canva_icon.png"
                            alt="Canva_icon" />
                          </Col>

                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'>
                            <img
                            className='img-fluid p-2'
                            width={53}
                            height={53}
                            src="./Zapier_icon.png"
                            alt="Zapier_icon" /></Col>
                       </Stack>
                      </Row>

                      <Row className='mb-3'>
                        <Stack direction="horizontal" gap={3}>
                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'>
                            <img
                            className='img-fluid p-2'
                            width={53}
                            height={53}
                            src="./Square_icon.png"
                            alt="Square_icon" />
                          </Col>

                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'>
                            <img
                            className='img-fluid p-2'
                            width={53}
                            height={53}
                            src="./Wix_icon.png"
                            alt="Wix_icon" />
                          </Col>

                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'>
                            <img
                            className='img-fluid p-2'
                            width={53}
                            height={53}
                            src="./Squarespace_icon.png"
                            alt="Squarespace_icon" />
                          </Col>

                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'>
                            <img
                            className='img-fluid p-2'
                            width={53}
                            height={53}
                            src="./Stripe_icon.png"
                            alt="Stripe_icon" />
                          </Col>
                        </Stack>
                      </Row>

                      <Row>
                        <Stack direction="horizontal" gap={3}>
                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'>
                            <img
                            className='img-fluid p-2'
                            width={53}
                            height={53}
                            src="./Salesforce_icon.png"
                            alt="Salesforce_icon" />
                          </Col>

                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'>
                            <img
                            className='img-fluid p-2'
                            width={53}
                            height={53}
                            src="./LinkedIn_icon.png"
                            alt="Linkedin_icon" />
                          </Col>

                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'>
                            <img
                            className='img-fluid p-2'
                            width={53}
                            height={53}
                            src="./Wordpress_icon.png"
                            alt="Wordpress_icon" />
                          </Col>

                          <Col xs={3} className='integrations_img d-flex justify-content-center align-items-center rounded'>
                            <img
                            className='img-fluid p-2'
                            width={53}
                            height={53}
                            src="./Facebook_icon.png"
                            alt="Facebook_icon" />
                          </Col>
                        </Stack>
                      </Row>
                    </div>
                  </Col>

                  <Col xs={5} className='vstack gap-2 ps-5' style={{fontSize:"13px"}}>
                    <strong>YOUR TECH STACK</strong>
                    <Nav.Link className='text-decoration-none' href="#">E-commerce</Nav.Link>
                    <Nav.Link className='text-decoration-none' href='#'>Analytics</Nav.Link>
                    <Nav.Link className='text-decoration-none' href='#'>Booking & Scheduling</Nav.Link>
                    <Nav.Link className='text-decoration-none' href='#'>Loyality</Nav.Link>
                    <Nav.Link className='text-decoration-none' href='#'>Subscription management</Nav.Link>
                    <Nav.Link className='text-decoration-none' href='#'>Customer service</Nav.Link>
                    <Nav.Link className='text-decoration-none' href='#'>forms & Surveys</Nav.Link>
                    <Nav.Link className='text-decoration-none' href='#'>Developer tools</Nav.Link>
                    <Nav.Link className='text-decoration-none' href='#'>Content</Nav.Link>
                  </Col>
                </Row>
              </Col>

              <Col xs={4} className='vstack gap-2 p-5' style={{backgroundColor:'#F6F6F4', fontSize:'13px'}}>
                <h6>FOR YOUR INDUSTRY</h6>
                <Nav.Link className='text-decoration-none' href="#">E-commerce and retail</Nav.Link>
                <Nav.Link className='text-decoration-none' href='#'>Mobile and web apps</Nav.Link>
                <Nav.Link className='text-decoration-none' href='#'>Start-ups</Nav.Link>
                <Nav.Link className='text-decoration-none' href='#'>Agencies and freelancers</Nav.Link>
                <Nav.Link className='text-decoration-none' href='#'>Developers</Nav.Link>

                <h6 className='pt-4'>PROFESSIONAL SERVICES</h6>
                <Nav.Link className='text-decoration-none' href='#'>Hire an Expert</Nav.Link>
                <Nav.Link className='text-decoration-none' href='#'>Personalized onboarding</Nav.Link>
                <Nav.Link className='text-decoration-none' href='#'>Customer success</Nav.Link>
              </Col>
            </>
          )}

          {activeMenu === "resources" && (
            <>
                <Col xs={8} className='p-5'>
                  <Col xs={12}>
                    <div className="text_AnimatedBtn d-flex justify-content-between">
                      <h5>Resources</h5>
                      <ArrowAnimationEffect text='See all resources'/>
                    </div>
                  </Col>

                  <Row>
                    <Col xs={4} className='vstack gap-3 ps-5' style={{fontSize:"13px"}}>
                      <strong>LEARN WITH MAILCHIMP</strong>
                      <Nav.Link className='text-decoration-none' href='#'>E-commerce</Nav.Link>
                      <Nav.Link className='text-decoration-none' href='#'>Digital</Nav.Link>
                      <Nav.Link className='text-decoration-none' href='#'>Marketing automations</Nav.Link>
                      <Nav.Link className='text-decoration-none' href='#'>Audience management</Nav.Link>
                      <Nav.Link className='text-decoration-none' href='#'>Websites</Nav.Link>
                      <Nav.Link className='text-decoration-none' href='#'>Email marketing</Nav.Link>
                      <Nav.Link className='text-decoration-none' href='#'>Social media</Nav.Link>
                    </Col>
                    <Col xs={4} className='vstack gap-3 ps-5' style={{fontSize:"13px"}}>
                      <strong>MAILCHIMP PRESENTS</strong>
                      <Nav.Link className='text-decoration-none' href='#'>Podcasts</Nav.Link>
                      <Nav.Link className='text-decoration-none' href='#'>Series</Nav.Link>
                      <Nav.Link className='text-decoration-none' href='#'>Films</Nav.Link>
                    </Col> 
                    <Col xs={4} className='vstack gap-3 ps-5' style={{fontSize:"13px"}}>
                      <strong>FOR DEVELOPERS</strong>
                      <Nav.Link className='text-decoration-none' href='#'>Marketing API</Nav.Link>
                      <Nav.Link className='text-decoration-none' href='#'>Trasanctional API</Nav.Link>
                      <Nav.Link className='text-decoration-none' href='#'>Release note</Nav.Link>
                      <Nav.Link className='text-decoration-none' href='#'>Transactional email</Nav.Link>
                    </Col>
                  </Row>
                </Col>
                <Col xs={4} className='pt-5' style={{backgroundColor:'#F6F6F4'}}>
                  <div className="msg_case_eve vstack gap-3">
                    <div className="msg">
                      <span><img className='img-fluid me-3' width={'25px'} src="./Union__21_.png" alt="Union__21_" /> Help Center</span>
                    </div>
                    <div className="case">
                      <span><img className='img-fluid me-3' width={'25px'} src="./Union__22_.png" alt="Union__22" /> Case Studies</span>
                    </div>
                    <div className="events">
                      <span><img className='img-fluid me-3' width={'25px'} src="./Union__23_.png" alt="Union__23" /> Events</span>
                    </div>
                  </div>

                  <div className="resources_right_links vstack gap-3 pt-5">
                    <strong>PROFESSIONAL SERVICES</strong>
                    <Nav.Link className='text-decoration-none' href='#'>Hire an Expert</Nav.Link>
                    <Nav.Link className='text-decoration-none' href='#'>Personalized onboarding</Nav.Link>
                    <Nav.Link className='text-decoration-none' href='#'>Customer success</Nav.Link>
                  </div>
                </Col>
            </>
          )}
        </Row>
      </Container>
     </div>
      )}
    </div>


    </>
  )
}

export default MailchimpNavbar
