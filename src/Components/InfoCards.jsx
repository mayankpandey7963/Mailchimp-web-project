import React from 'react'
import {Row, Col, Card, Nav} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowAnimationEffect from './ArrowAnimationEffect';


function InfoCards() {

    const dataCard = [
        {
          src: "./Integrations.png",
          alt: "integrations",
          title: "300 + app integrations",
          desc: "Connect you favourite apps to send more targeted campaigns."
        },
        {
          src: "./Support.png",
          alt: "hand-one support",
          title: "Hands-one support",
          desc: "Get help onboarding within your first 30 days at no additional cost."
        },
        {
          src: "./12_million_businesses.png",
          alt: "12_million_businesses",
          title: "12M + business use MailChimp",
          desc: "Learn from our millions of users worldwide. You'll be in good company."
        },
    ]
  return (
    <div>
        <Row>
            {dataCard.map((data, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <Card
                    className="h-100"
                    onMouseOver={e => {
                        e.target.style.textDecoration = 'underline'
                        e.target.style.cursor ='pointer'
                    }
               
                    }
                    onMouseOut={e => e.target.style.textDecoration = 'none'}
                    
                >
                  <Card.Img variant="top" src={data.src} alt={data.alt} />
                  <Card.Body>
                    <Card.Title>
                        <Nav.Link 
                          href={data.link} 
                          style={{ cursor: 'pointer', padding: 0, fontWeight: 'bold', fontSize: '1.25rem' }}
                          
                        >
                          {data.title}
                        </Nav.Link>
                    </Card.Title>
                    <Card.Text>{data.desc}</Card.Text>
                  </Card.Body>
                  <span className="d-inline-block my-3 ms-2">
                     <ArrowAnimationEffect />
                  </span>
                </Card>
              </Col>
            ))}

           
      </Row>
       
      
    </div>
  )
}

export default InfoCards
